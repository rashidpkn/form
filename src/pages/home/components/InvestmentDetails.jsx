import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInvestment } from '../../../redux/slice/formSlice'

function InvestmentDetails() {
    const dispatch = useDispatch()
    const {GICType,principalAmount,rate,team,issueDate,maturityDate} = useSelector(state=>state.form.investment)
    return (
        <div className="space-y-3">
            <p className='text-xl font-medium text-blue-700'>INVESTMENT DETAILS</p>
            <div className="flex h-full">
                <div className="h-full w-4/5 bg-white  space-y-3 pt-5">
                    <div className="w-full flex items-center px-5">
                        <p className='w-1/6'>GIC Type</p>
                        <input onChange={e=>dispatch(setInvestment({value:e.target.value,type:'GICType'}))} value={GICType} className='w-5/6 h-12 pl-5 border outline-none' type="text" />
                    </div>

                    <div className="w-full flex items-center px-5">
                        <p className='w-1/6'>Principal Amount</p>
                        <div className="w-5/6 h-12 flex gap-3">

                            <input onChange={e=>dispatch(setInvestment({value:e.target.value,type:'principalAmount'}))} value={principalAmount} className="w-1/5 border h-full pl-3" />
                            <div className="w-1/5 h-full flex items-center"><p>Rate</p></div>
                            <input onChange={e=>dispatch(setInvestment({value:e.target.value,type:'rate'}))} value={rate} className="w-1/5 border h-full pl-3" />
                            <div className="w-2/5  h-full flex gap-3">
                                <div className="w-1/5 h-full flex items-center"><p>Term</p></div>
                                <input onChange={e=>{dispatch(setInvestment({type:'team',value:{years:e.target.value,days:team.days}}))}} className="w-1/5 h-full border pl-2" />
                                <div className="w-1/5 h-full flex items-center"><p>Years</p></div>
                                <input onChange={e=>{dispatch(setInvestment({type:'team',value:{years:team.years,days:e.target.value}}))}} className="w-1/5 h-full border pl-2" />
                                <div className="w-1/5 h-full flex items-center"><p>Days</p></div>
                            </div>
                        </div>
                        {/* <input className='w-5/6 h-12 pl-5 border outline-none' type="text" /> */}
                    </div>


                    <div className="w-full flex items-center px-5">
                        <p className='w-1/6'>Issue Date</p>
                        <div className='w-5/6 h-12 flex gap-3' type="text" >
                            <div className="w-1/5  flex gap-3 items-center">
                                <input onChange={e=>dispatch(setInvestment({value:e.target.value,type:'issueDate'}))} value={issueDate} className='w-full' type="date" name="" id="" />
                            </div>
                            <div className="w-1/5 flex items-center"><p>Maturity Date</p></div>
                            <div className="w-1/5  flex gap-3 items-center">
                                <input onChange={e=>dispatch(setInvestment({value:e.target.value,type:'maturityDate'}))} value={maturityDate} className='w-full' type="date" name="" id="" />
                            </div>
                            <div className="w-2/5 p-1"><p className='text-xs'>When the maturity date falls on a non business day, the
                                maturity date may be amended to the next business day.</p></div>
                        </div>
                    </div>
                    <div className="h-12 w-full bg-gray-500"></div>
                </div>
                <div className="h-auto w-1/5 bg-blue-500 p-5 space-y-5">
                    <p>Interest Frequency</p>
                    <div className="space-y-2">
                        <div className=""><input onClick={()=>dispatch(setInvestment({type:'interestFrequency',value:'Annual'}))}          type="radio" name="frequency" id="" /> <label htmlFor="">Annual</label></div>
                        <div className=""><input onClick={()=>dispatch(setInvestment({type:'interestFrequency',value:'Compound Annual'}))} type="radio" name="frequency" id="" /> <label htmlFor="">Compound Annual</label></div>
                        <div className=""><input onClick={()=>dispatch(setInvestment({type:'interestFrequency',value:'Semi-Annual'}))}     type="radio" name="frequency" id="" /> <label htmlFor="">Semi-Annual</label></div>
                        <div className=""><input onClick={()=>dispatch(setInvestment({type:'interestFrequency',value:'Monthly'}))}         type="radio" name="frequency" id="" /> <label htmlFor="">Monthly</label></div>
                        <div className=""><input onClick={()=>dispatch(setInvestment({type:'interestFrequency',value:'Quarterly'}))}       type="radio" name="frequency" id="" /> <label htmlFor="">Quarterly</label></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentDetails