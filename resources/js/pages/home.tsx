import { Head } from '@inertiajs/react';

type Projet ={
    id: number,
    name: string;
    area: number,
    money_collected: number,
    funding_goal: number,
    purchase_price_per_kilo: number;
    harvest_price_per_kilo: number;
    funding_deadline: string; 
}

export default function Welcome({projet}: {projet: Projet}) {
    return (
        <div>
            <h1>{projet.name}</h1>
        </div>
    );
}