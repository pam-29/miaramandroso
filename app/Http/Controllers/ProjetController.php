<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Projet;

class ProjetController extends Controller
{
    public function show(){
        $projet =  Projet::first();
        return Inertia::render('home', ['projet' => $projet]);
    }
}
