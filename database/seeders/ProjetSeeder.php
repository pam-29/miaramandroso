<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Projet;

class ProjetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Projet::create([
            'name'=>'Projet maïs',
            'area'=>35,
            'money_collected'=>3000000,
            'funding_goal'=>4200000,
            'purchase_price_per_kilo'=>1200,
            'harvest_price_per_kilo'=>1500,
            'funding_deadline'=>'2027-02-28',
        ]);
    }
}
