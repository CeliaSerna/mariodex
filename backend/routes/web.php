<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PersonajeController;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/personajes/crear', 
[PersonajeController::class, 'create'])->name('personajes.create');

Route::get('/personajes', 
[PersonajeController::class, 'index'])->name('personajes.index');

Route::post('/personajes', 
[PersonajeController::class, 'store'])->name('personajes.store');

Route::delete('/personajes/{id}',
[PersonajeController::class, 'destroy']);
