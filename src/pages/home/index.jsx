import React from 'react'
import Declaration from './components/Declaration'
import InvestmentDetails from './components/InvestmentDetails'
import Left from './components/Left'
import PEFP from './components/PEFP'
import PrimaryApplicant from './components/PrimaryApplicant'
import RegistrationInformation from './components/RegistrationInformation'
import Right from './components/Right'
import SecondaryApplicant from './components/SecondaryApplicant'

function Home() {
    return (
        <form className='p-[5%] bg-slate-200 w-full space-y-10'>
            <div className="flex">
                <PrimaryApplicant />
                <SecondaryApplicant />
            </div>
            <RegistrationInformation />
            <InvestmentDetails />
            <PEFP />
            <Declaration />
            <div className="h-[1px] w-full bg-black"></div>
            <div className="flex gap-10">
                <Left />
                <Right/>
            </div>
        </form>
    )
}

export default Home