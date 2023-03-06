import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPrimary } from '../../../redux/slice/formSlice'

function PrimaryApplicant() {
    const dispatch = useDispatch()
    const {title,lastName,firstName,address,city,prov,postCode,sin,birthDay,country,citizenship,USTin } = useSelector(state=>state.form.primary)
    return (
        <div className="w-1/2 h-full space-y-3">
            <p className='text-xl font-medium text-blue-700'>PRIMARY APPLICANT</p>
            <div className="bg-white p-5 space-y-3">
                <div className="flex">
                    <p className='w-1/5'>Title</p>
                    <div className="space-x-3">
                        <input onClick={e=>dispatch(setPrimary({type:'title',value:'Mr' }))}      value={title} type="radio" name="title" id='Mr' /><label htmlFor="Mr">Mr</label>
                        <input onClick={e=>dispatch(setPrimary({type:'title',value:'Mrs'}))}      value={title} type="radio" name="title" id='Mrs' /><label htmlFor="Mrs">Mrs</label>
                        <input onClick={e=>dispatch(setPrimary({type:'title',value:'Dr' }))}      value={title} type="radio" name="title" id='Dr' /><label htmlFor="Dr">Dr</label>
                        <input onClick={e=>dispatch(setPrimary({type:'title',value:'Others'}))}   value={title} type="radio" name="title" id='Others' /><label htmlFor="Others">Others</label>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className='w-1/5 '>Last Name</p>
                    <input onChange={e=>dispatch(setPrimary({type:'lastName',value:e.target.value}))} value={lastName} type="text" className='w-4/5 h-12 border outline-none pl-5 bg-slate-300' />
                </div>
                <div className="flex items-center">
                    <p className='w-1/5 '>First Name</p>
                    <input onChange={e=>dispatch(setPrimary({type:'firstName',value:e.target.value}))} value={firstName} type="text" className='w-4/5 h-12 border outline-none pl-5 bg-slate-300' />
                </div>
                <div className="flex items-center">
                    <p className='w-1/5 '>Address</p>
                    <input onChange={e=>dispatch(setPrimary({type:'address',value:e.target.value}))} value={address} type="text" className='w-4/5 h-12 border outline-none pl-5 bg-slate-300' />
                </div>
                <div className="flex items-center">
                    <p className='w-1/5 '></p>
                    <div className="w-4/5 flex gap-3">
                        <input onChange={e=>dispatch(setPrimary({type:'city',value:e.target.value}))}     value={city}     placeholder='CITY' type="text" className='w-2/5 h-12 border outline-none pl-5 bg-slate-300' />
                        <input onChange={e=>dispatch(setPrimary({type:'prov',value:e.target.value}))}     value={prov}     placeholder='PROV' type="text" className='w-1/5 h-12 border outline-none pl-5 bg-slate-300' />
                        <input onChange={e=>dispatch(setPrimary({type:'postCode',value:e.target.value}))} value={postCode} placeholder='POSTAL CODE' type="text" className='w-2/5 h-12 border outline-none pl-5 bg-slate-300' />
                    </div>
                </div>
                <div className="flex items-center">
                    <p className='w-1/5 '>S.I.N.</p>
                    <div className="w-4/5 flex gap-3 items-center">
                        <input onChange={e=>dispatch(setPrimary({type:'sin',value:e.target.value}))} value={sin} type="text" className='w-2/5 h-12 border outline-none pl-5 bg-slate-300' />
                        <div className="w-1/5 h-12 flex items-center">
                            <p>Birth Date</p>
                        </div>
                        <div className="w-2/5 h-12 flex gap-2 items-center">
                            {/* <input className='h-12 w-1/5 border outline-none p-1 bg-slate-300' type="text" />
                            <input className='h-12 w-1/5 border outline-none p-1 bg-slate-300' type="text" />
                            <input className='h-12 w-3/5 border outline-none p-1 bg-slate-300' type="text" /> */}
                            <input type="date" onChange={e=>dispatch(setPrimary({type:'birthDay',value:e.target.value}))} value={birthDay} name="" id="" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className='w-1/5 '>Country</p>
                    <div className="w-4/5 flex gap-3">
                        <input onChange={e=>dispatch(setPrimary({type:'country',value:e.target.value}))} value={country} type="text" className='w-2/5 h-12 border outline-none pl-5 bg-slate-300' />
                        <div className="w-1/5 h-12 flex items-center">
                            <p>Citizenship</p>
                        </div>
                        <input onChange={e=>dispatch(setPrimary({type:'citizenship',value:e.target.value}))} value={citizenship} type="text" className='w-2/5 h-12 border outline-none pl-5 bg-slate-300' />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <p className='w-1/4 '>Are you a U.S. person for tax puposes?</p>
                    <div className="space-x-5">
                        <label htmlFor="">Yes</label> <input onClick={()=>dispatch(setPrimary({type:'USPerson',value:'Yes'}))}  type={'radio'} name="us Person" id="" />
                        <label htmlFor="">No</label> <input  onClick={()=>dispatch(setPrimary({type:'USPerson',value:'No'}))} type={'radio'} name="us Person" id="" />
                    </div>
                    <input onChange={e=>dispatch(setPrimary({type:'USTin',value:e.target.value}))} value={USTin} placeholder='US TIN' type="text" className='w-2/5 h-12 border outline-none pl-5 bg-slate-300' />
                </div>


            </div>
        </div>
    )
}

export default PrimaryApplicant