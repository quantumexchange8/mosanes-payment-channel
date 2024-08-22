<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

Route::get('locale/{locale}', function ($locale) {
    App::setLocale($locale);
    Session::put("locale", $locale);

    return redirect()->back();
});

Route::get('/', function () {
    return redirect(route('login'));
});

Route::middleware(['auth','verified'])->group(function () {
    /**
     * ==============================
     *          Dashboard
     * ==============================
     */
    Route::prefix('dashboard')->group(function() {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/getLiveAccount', [DashboardController::class, 'getLiveAccount'])->name('dashboard.getLiveAccount');
        Route::post('/deposit_to_account', [DashboardController::class, 'deposit_to_account'])->name('dashboard.deposit_to_account');
    });

});

require __DIR__.'/auth.php';
