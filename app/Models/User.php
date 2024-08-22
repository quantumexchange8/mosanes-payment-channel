<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class User extends Authenticatable implements HasMedia, MustVerifyEmail
{
    use HasFactory, Notifiable, InteractsWithMedia, LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function setReferralId(): void
    {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $randomString = 'MOS';

        $length = 10 - strlen($randomString);

        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }

        $this->referral_code = $randomString;
        $this->save();
    }

    public function getChildrenIds(): array
    {
        return User::query()->where('hierarchyList', 'like', '%-' . $this->id . '-%')
            ->pluck('id')
            ->toArray();
    }

    public function assignedGroup($group_id): void
    {
        GroupHasUser::updateOrCreate(
            ['user_id' => $this->id],
            ['group_id' => $group_id]
        );
    }

    // Relations
    public function groupHasUser(): HasOne
    {
        return $this->hasOne(GroupHasUser::class, 'user_id');
    }

    public function directChildren(): HasMany
    {
        return $this->hasMany(User::class, 'upline_id', 'id');
    }

    public function upline(): BelongsTo
    {
        return $this->belongsTo(User::class, 'upline_id', 'id');
    }

    public function paymentAccounts(): HasMany
    {
        return $this->hasMany(PaymentAccount::class, 'user_id', 'id');
    }

    public function rebate_wallet(): HasOne
    {
        return $this->hasOne(Wallet::class, 'user_id', 'id')->where('type', 'rebate_wallet');
    }

    public function tradingAccounts(): HasMany
    {
        return $this->hasMany(TradingAccount::class, 'user_id', 'id');
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'user_id', 'id');
    }

    public function rebateAllocations(): HasMany
    {
        return $this->hasMany(RebateAllocation::class, 'user_id', 'id');
    }

    // Logs
    public function getActivitylogOptions(): LogOptions
    {
        $user = $this->fresh();

        return LogOptions::defaults()
            ->useLogName('user')
            ->logOnly([
                'id',
                'name',
                'username',
                'email_verified_at',
                'email',
                'password',
                'dial_code',
                'phone',
                'phone_number',
                'dob',
                'address',
                'city_id',
                'state_id',
                'country_id',
                'nationality',
                'register_ip',
                'last_login_ip',
                'upline_id',
                'hierarchyList',
                'referral_code',
                'id_number',
                'kyc_status',
                'kyc_approved_at',
                'kyc_approval_description',
                'gender',
                'ct_user_id',
                'role',
                'status',
                'remarks',
                'rebate_amount',
                'remember_token',
            ])
            ->setDescriptionForEvent(function (string $eventName) use ($user) {
                $actorName = Auth::user() ? Auth::user()->name : 'System';
                return "$actorName has $eventName user with ID: $user->id";
            })
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }
}
