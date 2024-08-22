<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssetMasterUserFavourite extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'asset_master_id',
    ];
}
