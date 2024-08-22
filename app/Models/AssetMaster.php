<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class AssetMaster extends Model implements HasMedia
{
    use SoftDeletes, InteractsWithMedia;

    protected $fillable = [
        'asset_name',
        'trader_name',
        'category',
        'type',
        'started_at',
        'total_investors',
        'total_fund',
        'minimum_investment',
        'minimum_investment_period',
        'performance_fee',
        'total_gain',
        'monthly_gain',
        'latest_profit',
        'profit_generation_mode',
        'expected_gain_profit',
        'edited_by',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
        ];
    }

    // Relations
    public function asset_subscriptions(): HasMany
    {
        return $this->hasMany(AssetSubscription::class, 'asset_master_id', 'id');
    }

    public function asset_user_favourites(): HasMany
    {
        return $this->hasMany(AssetMasterUserFavourite::class, 'asset_master_id', 'id');
    }
}
