<?php

namespace App\Services\Data;

use App\Models\TradingUser;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class CreateTradingUser
{
    public function execute(User $user, $data, $accountType, $remarks = null): TradingUser
    {
        return $this->storeNewUser($user, $data, $accountType, $remarks);
    }

    public function storeNewUser(User $user, $data, $accountType, $remarks = null): TradingUser
    {
        $tradingUser = new TradingUser();
        $tradingUser->user_id = $user->id;
        $tradingUser->meta_login = $data['login'];
        $tradingUser->meta_group = $data['groupName'];
        $tradingUser->registration = $data['registrationTimestamp'];
        $tradingUser->last_access = $data['lastUpdateTimestamp'];
        $tradingUser->balance = $data['balance'] / 100;
        $tradingUser->credit = $data['nonWithdrawableBonus'] / 100;
        $tradingUser->remarks = $remarks;
        $tradingUser->account_type_id = $accountType;
        DB::transaction(function () use ($tradingUser) {
            $tradingUser->save();
        });

        return $tradingUser;
    }
}
