<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssetSubscription extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'meta_login',
        'asset_master_id',
        'investment_amount',
        'top_up_amount',
        'investment_periods',
        'status',
        'cumulative_profit_distributions',
        'cumulative_earnings',
        'remarks',
        'matured_at',
        'revoked_at',
    ];

    protected function casts(): array
    {
        return [
            'matured_at' => 'datetime',
            'revoked_at' => 'datetime',
        ];
    }

    // Relations
    public function asset_master(): BelongsTo
    {
        return $this->belongsTo(AssetMaster::class, 'asset_master_id', 'id');
    }
}
