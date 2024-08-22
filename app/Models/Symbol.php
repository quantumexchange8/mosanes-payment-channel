<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Symbol extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'symbol_group_id',
        'symbol_group_name',
        'meta_symbol_name',
        'meta_path',
        'meta_digits',
        'meta_contract_size',
        'meta_swap_long',
        'meta_swap_short',
        'meta_swap_3_day',
    ];
}
