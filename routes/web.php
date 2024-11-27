<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('auth')->controller(Controllers\AuthController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
});

Route::get('/', function () {
    return Inertia::render('Dashboard/Index');
});
