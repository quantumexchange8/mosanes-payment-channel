<?php

namespace App\Services\Data;

use App\Models\TradingAccount;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class CreateTradingAccount
{
    public function execute(User $user, $data, $accountType): TradingAccount
    {
        return $this->storeNewAccount($user, $data, $accountType);
    }

    public function storeNewAccount(User $user, $data, $accountType): TradingAccount
    {
        $tradingAccount = new TradingAccount();
        $tradingAccount->user_id = $user->id;
        $tradingAccount->meta_login = $data['login'];
        $tradingAccount->currency_digits = $data['moneyDigits'];
        $tradingAccount->balance = $data['balance'] / 100;
        $tradingAccount->credit = $data['nonWithdrawableBonus'] / 100;
        $tradingAccount->margin_leverage = $data['leverageInCents'] / 100;
        $tradingAccount->equity = $data['equity'] / 100;
        $tradingAccount->account_type_id = $accountType;
        DB::transaction(function () use ($tradingAccount) {
            $tradingAccount->save();
        });

        return $tradingAccount;
    }
}
