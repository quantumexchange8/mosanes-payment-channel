<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class TradingAccount extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'balance' => 'decimal:2',
        'created_at' => 'datetime:Y-m-d',
    ];

    // Relations

    public function account_type(): BelongsTo
    {
        return $this->belongsTo(AccountType::class, 'account_type_id', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function asset_subscriptions(): HasMany
    {
        return $this->hasMany(AssetSubscription::class, 'meta_login', 'meta_login');
    }
}
