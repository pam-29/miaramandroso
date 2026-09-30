<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    protected $fillable = [
        'name',
        'area',
        'money_collected',
        'funding_goal',
        'urchase_price_per_kilo',
        'harvest_price_per_kilo',
        'funding_deadline',
    ];
}
