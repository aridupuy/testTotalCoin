<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::put('/button', "\App\Http\Controllers\ButtonController@create");
Route::get('/button/', "\App\Http\Controllers\ButtonController@getAll");
Route::get('/button/{id}', "\App\Http\Controllers\ButtonController@get");
Route::post('/button/{id}', "\App\Http\Controllers\ButtonController@add");
Route::delete('/button/{id}', "\App\Http\Controllers\ButtonController@delete");
