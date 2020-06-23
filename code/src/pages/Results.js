import React from 'react'
import { GenderChart } from 'components/charts/GenderChart'
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/card-style.css'
import { AgeChart } from 'components/charts/AgeChart'
import { SummaryCard } from 'components/SummaryCard'
import { DropDown } from 'components/DropDown';



export const Results  = () => {
    return (
    
    <div>
        
        <article className="page-wrapper">
        <DropDown />
            <section className="card-wrapper">
                <section className="card">
                    <h1>Results</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                </section>
                <section className="image-card">
                <SummaryCard
                    title="Resultat"
                    numParticipants="- xxxxxxx deltagare"
                    numCompanies="- 5 företag"
                    >
                    </SummaryCard>
                </section>
            </section>
            <article>
            <section className="card-wrapper">
                <section className="card">
                    <h1>Könsfördelning</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                </section>
                <section className="image-card">
                    <GenderChart />
                </section>
            </section>
            <section className="card-wrapper">
                <section className="card">
                    <h1>Results</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                </section>
                <section className="image-card">
                    <AgeChart />
                </section>
            </section>
            <section className="card-wrapper">
            <section className="card">
                    <h1>Results</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                </section>
                <section className="image-card">
                    <CategoryChart />
                </section>
            </section>
            </article>
        </article>
    </div>
    )
}