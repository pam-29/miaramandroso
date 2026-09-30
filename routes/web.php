<?php

use App\Http\Controllers\ProjetController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProjetController::class, 'show'])->name('home');
