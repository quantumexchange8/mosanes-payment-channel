<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\TradingAccount;
use App\Services\CTraderService;
use App\Models\AssetSubscription;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Services\RunningNumberService;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Dashboard');
    }

    public function getLiveAccount(Request $request)
    {
        $user = Auth::user();
        $accountType = $request->input('accountType');

        $conn = (new CTraderService)->connectionStatus();
        if ($conn['code'] != 0) {
            return back()
                ->with('toast', [
                    'title' => 'Connection Error',
                    'type' => 'error'
                ]);
        }

        $trading_accounts = $user->tradingAccounts()
            ->whereHas('account_type', function($q) use ($accountType) {
                $q->where('category', $accountType);
            })
            ->get();

        try {
            foreach ($trading_accounts as $trading_account) {
                (new CTraderService)->getUserInfo($trading_account->meta_login);
            }
        } catch (\Throwable $e) {
            Log::error($e->getMessage());
        }

        $liveAccounts = TradingAccount::with('account_type')
            ->where('user_id', $user->id)
            ->when($accountType, function ($query) use ($accountType) {
                return $query->whereHas('account_type', function ($query) use ($accountType) {
                    $query->where('category', $accountType);
                });
            })
            ->get()
            ->map(function ($account) {

                $following_master = AssetSubscription::with('asset_master:id,asset_name')
                    ->where('meta_login', $account->meta_login)
                    ->where('status', 'ongoing')
                    ->first();

                $remaining_days = null;

                if ($following_master && $following_master->matured_at) {
                    $matured_at = Carbon::parse($following_master->matured_at);
                    $remaining_days = Carbon::now()->diffInDays($matured_at);
                }

                return [
                    'id' => $account->id,
                    'user_id' => $account->user_id,
                    'meta_login' => $account->meta_login,
                    'balance' => $account->balance,
                    'credit' => $account->credit,
                    'leverage' => $account->margin_leverage,
                    'equity' => $account->equity,
                    'account_type' => $account->account_type->slug,
                    'account_type_leverage' => $account->account_type->leverage,
                    'account_type_color' => $account->account_type->color,
                    'asset_master_id' => $following_master->asset_master->id ?? null,
                    'asset_master_name' => $following_master->asset_master->asset_name ?? null,
                    'remaining_days' => intval($remaining_days),
                ];
            });

        return response()->json($liveAccounts);
    }

    public function deposit_to_account(Request $request)
    {
        $request->validate([
            'meta_login' => ['required', 'exists:trading_accounts,meta_login'],
        ]);

        $user = Auth::user();
dd($request->all());
        $transaction = Transaction::create([
            'user_id' => $user->id,
            'category' => 'trading_account',
            'transaction_type' => 'deposit',
            'to_meta_login' => $request->meta_login,
            'transaction_number' => RunningNumberService::getID('transaction'),
            'status' => 'processing',
        ]);

        $token = Str::random(40);

        $payoutSetting = config('payment-gateway');
        $domain = $_SERVER['HTTP_HOST'];

        if ($domain === 'user.mosanes.com') {
            $selectedPayout = $payoutSetting['live'];
        } else {
            $selectedPayout = $payoutSetting['staging'];
        }

        $vCode = md5($selectedPayout['appId'] . $transaction->transaction_number . $selectedPayout['merchantId'] . $selectedPayout['ttKey']);

        $params = [
            'userName' => $user->name,
            'userEmail' => $user->email,
            'orderNumber' => $transaction->transaction_number,
            'userId' => $user->id,
            'merchantId' => $selectedPayout['merchantId'],
            'vCode' => $vCode,
            'token' => $token,
            'locale' => app()->getLocale(),
        ];

        // Send response
        $url = $selectedPayout['paymentUrl'] . '/payment';
        $redirectUrl = $url . "?" . http_build_query($params);

        return Inertia::location($redirectUrl);

        // $tradingAccount = TradingAccount::find($request->account_id);
        // (new CTraderService)->getUserInfo(collect($tradingAccount));

        // $tradingAccount = TradingAccount::find($request->account_id);
        // $amount = $request->input('amount');
        // $wallet = Auth::user()->wallet->first();

        // if ($wallet->balance < $amount) {
        //     throw ValidationException::withMessages(['wallet' => trans('public.insufficient_balance')]);
        // }

        // try {
        //     $trade = (new CTraderService)->createTrade($tradingAccount->meta_login, $amount, $tradingAccount->account_type_id, "Deposit To Account", ChangeTraderBalanceType::DEPOSIT);
        // } catch (\Throwable $e) {
        //     if ($e->getMessage() == "Not found") {
        //         TradingUser::firstWhere('meta_login', $tradingAccount->meta_login)->update(['acc_status' => 'Inactive']);
        //     } else {
        //         Log::error($e->getMessage());
        //     }
        //     return response()->json(['success' => false, 'message' => $e->getMessage()]);
        // }

        // $ticket = $trade->getTicket();
        // $newBalance = $wallet->balance - $amount;

//         $transaction = Transaction::create([
//             'user_id' => Auth::id(),
//             'category' => 'trading_account',
//             'transaction_type' => 'fund_in',
//             'from_wallet_id' => $wallet->id,
//             'to_meta_login' => $tradingAccount->meta_login,
//             'transaction_number' => RunningNumberService::getID('transaction'),
//             'amount' => $amount,
//             'transaction_charges' => 0,
//             'transaction_amount' => $amount,
//             'old_wallet_amount' => $wallet->balance,
//             'new_wallet_amount' => $newBalance,
//             'status' => 'processing',
//             'ticket' => $ticket,
//         ]);

        // $wallet->balance = $newBalance;
        // $wallet->save();

        // // Check if the account exists
        // if ($tradingAccount) {
        //     // Redirect back with success message
        //     return back()->with('toast', [
        //         'title' => trans('public.toast_revoke_account_success'),
        //         'type' => 'success',
        //     ]);
        // }

//        $transactionData = [
//            'user_id' => 1,
//            'transaction_number' => 'TX1234567890',
//            'from_meta_login' => '123456',
//            'transaction_amount' => 1000.00,
//            'amount' => 1000.00,
//            'receiving_address' => 'dummy_address',
//            'created_at' => '2024-07-27 16:09:45',
//        ];
//
//        // Set notification data in the session
//        return redirect()->back()->with('notification', [
//            'details' => $transactionData,
//            'type' => 'deposit',
//        ]);

    }

}
