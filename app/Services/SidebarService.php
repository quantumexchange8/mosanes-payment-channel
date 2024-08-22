<?php

namespace App\Services;

use App\Models\CommissionPayout;
use App\Models\MasterRequest;
use App\Models\Subscriber;
use App\Models\Subscription;
use App\Models\SubscriptionRenewalRequest;
use App\Models\SwitchMaster;
use App\Models\Transaction;
use App\Models\User;

class SidebarService {
    public function getPendingCommissionCount(): int
    {
        return CommissionPayout::where('status', 'processing')->count();
    }

    public function getPendingWithdrawalCount(): int
    {
        return Transaction::where('category', 'wallet')
            ->where('transaction_type', 'withdrawal')
            ->where('status', 'processing')
            ->count();
    }

    // public function getPendingMasterCount(): int
    // {
    //     $authUser = \Auth::user();

    //     $query = MasterRequest::query()
    //         ->where('status', 'Pending');

    //     if (!empty($authUser) && $authUser->hasRole('admin') && $authUser->leader_status == 1) {
    //         $childrenIds = $authUser->getChildrenIds();
    //         $childrenIds[] = $authUser->id;
    //         $query->whereIn('user_id', $childrenIds);
    //     } elseif (!empty($authUser) && $authUser->hasRole('super-admin')) {
    //         // Super-admin logic, no need to apply whereIn
    //     } elseif (!empty($authUser) && !empty($authUser->getFirstLeader()) && $authUser->getFirstLeader()->hasRole('admin')) {
    //         $childrenIds = $authUser->getFirstLeader()->getChildrenIds();
    //         $query->whereIn('user_id', $childrenIds);
    //     } else {
    //         // No applicable conditions, set whereIn to empty array
    //         $query->whereIn('user_id', []);
    //     }

    //     return $query->count();
    // }

    // public function getPendingSubscriberRequestCount(): int
    // {
    //     $authUser = \Auth::user();
    //     $subscriber = Subscriber::where('status', 'Pending');

    //     if (!empty($authUser) && $authUser->hasRole('admin') && $authUser->leader_status == 1) {
    //         $childrenIds = $authUser->getChildrenIds();
    //         $childrenIds[] = $authUser->id;
    //         $subscriber->whereIn('user_id', $childrenIds);
    //     } elseif (!empty($authUser) && $authUser->hasRole('super-admin')) {
    //         // Super-admin logic, no need to apply whereIn
    //     } elseif (!empty($authUser) && !empty($authUser->getFirstLeader()) && $authUser->getFirstLeader()->hasRole('admin')) {
    //         $childrenIds = $authUser->getFirstLeader()->getChildrenIds();
    //         $subscriber->whereIn('user_id', $childrenIds);
    //     } else {
    //         // No applicable conditions, set whereIn to empty array
    //         $subscriber->whereIn('user_id', []);
    //     }

    //     return $subscriber->count();
    // }

    // public function getPendingRenewalCount(): int
    // {
    //     $authUser = \Auth::user();
    //     $subscription_renewal = SubscriptionRenewalRequest::where('status', 'Pending');
    //     if (!empty($authUser) && $authUser->hasRole('admin') && $authUser->leader_status == 1) {
    //         $childrenIds = $authUser->getChildrenIds();
    //         $childrenIds[] = $authUser->id;
    //         $subscription_renewal->whereIn('user_id', $childrenIds);
    //     } elseif (!empty($authUser) && $authUser->hasRole('super-admin')) {
    //         // Super-admin logic, no need to apply whereIn
    //     } elseif (!empty($authUser) && !empty($authUser->getFirstLeader()) && $authUser->getFirstLeader()->hasRole('admin')) {
    //         $childrenIds = $authUser->getFirstLeader()->getChildrenIds();
    //         $subscription_renewal->whereIn('user_id', $childrenIds);
    //     } else {
    //         // No applicable conditions, set whereIn to empty array
    //         $subscription_renewal->whereIn('user_id', []);
    //     }

    //     return $subscription_renewal->count();
    // }

    // public function getPendingSwitchMasterCount(): int
    // {
    //     $authUser = \Auth::user();
    //     $switch_master = SwitchMaster::where('status', 'Pending');
    //     if (!empty($authUser) && $authUser->hasRole('admin') && $authUser->leader_status == 1) {
    //         $childrenIds = $authUser->getChildrenIds();
    //         $childrenIds[] = $authUser->id;
    //         $switch_master->whereIn('user_id', $childrenIds);
    //     } elseif (!empty($authUser) && $authUser->hasRole('super-admin')) {
    //         // Super-admin logic, no need to apply whereIn
    //     } elseif (!empty($authUser) && !empty($authUser->getFirstLeader()) && $authUser->getFirstLeader()->hasRole('admin')) {
    //         $childrenIds = $authUser->getFirstLeader()->getChildrenIds();
    //         $switch_master->whereIn('user_id', $childrenIds);
    //     } else {
    //         // No applicable conditions, set whereIn to empty array
    //         $switch_master->whereIn('user_id', []);
    //     }

    //     return $switch_master->count();
    // }
}
