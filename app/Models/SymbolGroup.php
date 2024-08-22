<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SymbolGroup extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'display',
        'name',
    ];
}
