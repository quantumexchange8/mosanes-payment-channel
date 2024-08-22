<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TradeRebateSummary extends Model
{
    use SoftDeletes;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function upline_user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'upline_user_id', 'id');
    }

    public function symbolGroup(): belongsTo
    {
        return $this->belongsTo(SymbolGroup::class, 'symbol_group', 'id');
    }

}
