<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class GroupHasUser extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'group_id',
        'user_id',
    ];

    // Relations
    public function group(): belongsTo
    {
        return $this->belongsTo(Group::class, 'group_id', 'id');
    }
}
