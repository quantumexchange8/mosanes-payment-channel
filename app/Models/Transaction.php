<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'category',
        'transaction_type',
        'from_wallet_id',
        'to_wallet_id',
        'from_meta_login',
        'to_meta_login',
        'ticket',
        'transaction_number',
        'payment_account_id',
        'from_wallet_address',
        'to_wallet_address',
        'txn_hash',
        'amount',
        'transaction_charges',
        'transaction_amount',
        'old_wallet_amount',
        'new_wallet_amount',
        'status',
        'comment',
        'remarks',
        'approved_at',
        'handle_by',
    ];

    protected function casts(): array
    {
        return [
            'approved_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function from_wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class, 'from_wallet_id', 'id');
    }

    public function to_wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class, 'to_wallet_id', 'id');
    }

    public function from_meta_login(): BelongsTo
    {
        return $this->belongsTo(TradingAccount::class, 'from_meta_login', 'meta_login');
    }

    public function to_meta_login(): BelongsTo
    {
        return $this->belongsTo(TradingAccount::class, 'to_meta_login', 'meta_login');
    }

    public function payment_account(): BelongsTo
    {
        return $this->belongsTo(PaymentAccount::class, 'payment_account_id', 'id');
    }
}
