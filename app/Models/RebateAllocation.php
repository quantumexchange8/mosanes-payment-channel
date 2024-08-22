<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class RebateAllocation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'account_type_id',
        'symbol_group_id',
        'amount',
        'edited_by',
    ];

    // Relations
    public function user(): belongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function symbol_group(): belongsTo
    {
        return $this->belongsTo(SymbolGroup::class, 'symbol_group_id', 'id');
    }

    public function account_type(): belongsTo
    {
        return $this->belongsTo(AccountType::class, 'account_type_id', 'id');
    }
}
