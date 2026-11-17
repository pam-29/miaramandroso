import '../../css/projectCard.css'

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

function daysRemaining(funding_deadline:string): number{
    const dayDate= Date.now();
    const deadline= new Date(funding_deadline).getTime();

    const msLeft= deadline - dayDate;
    const daysLeft = msLeft / (1000 * 60 * 60 * 24);

    return Math.ceil(daysLeft);
}

function fundingPercentage(money_collected: number, funding_goal: number): number{
    if(funding_goal <= 0){
        return 0;
    } 

    const percentage = Math.floor((money_collected * 100)/funding_goal);

    return Math.min(percentage, 100);
}

export default function ProjectCard({projet}: Readonly<{projet: Projet}>) {
    const daysLeft = daysRemaining(projet.funding_deadline);
    const percentage = fundingPercentage(projet.money_collected, projet.funding_goal);

    return (
        <div>
            <h1>{projet.name}</h1>

            {daysLeft <= 0 ? <p>La date limite est passée mais vous pouvez toujours contribuer</p> : <p>{daysLeft} jours</p>}

            <p>{percentage} %</p>
            <div className='outerBoxPercentage'>
                <div style={{width: `${percentage}%`}} className='innerBoxPercentage'></div>
            </div>

        </div>
    );
}