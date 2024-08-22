<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssetMasterProfitDistribution extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'asset_master_id',
        'profit_distribution_date',
        'profit_distribution_percent',
    ];

    protected function casts(): array
    {
        return [
            'profit_distribution_date' => 'date',
        ];
    }
}
