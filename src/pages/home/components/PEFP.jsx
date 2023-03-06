import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPEFP } from '../../../redux/slice/formSlice'

function PEFP() {
    const dispatch = useDispatch()
    const {text} = useSelector(state=>state.form.PEFP)
  return (
    <div className="bg-white p-5 space-y-5">
                <p className='text-xl font-medium'>Politically Exposed Foreign Person Determination (PEFP)</p>
                <div className="flex w-full gap-10 ">
                    <div className=" flex flex-col justify-evenly"><p>Yes</p><p>No</p></div>
                    <div className=" space-y-3">
                        <p>I/We, my spouse, parents, children, brothers or sisters or my spouse’s mother or father is or has been, in or on behalf of a foreign country: a head of state or government, a member of the executive council of gov-
                            ernment or a member of a legislature; a deputy minister or equivalent; an ambassador or an ambassador’s attaché or counsellor; a military general (or higher rank); a president of a state owned company or bank; a
                            head ofa government agency; a judge; or a leader or president of a political party in a legislature? If YES, please specify Name, Position Held, and Relationship to you:</p>
                        <input onChange={e=>{dispatch(setPEFP({type:'text',value:e.target.value}))}} type="text" className='w-full h-12 border outline-none' name="" id="" />
                    </div>
                </div>
                <div className="">
                    <p className='text-xl font-medium'>Third Party Declaration</p>
                    <div className="flex w-full">
                        <p className='w-1/2'>Is this investment being purchased on behalf of a third party?</p>
                        <div className="w-1/2 flex gap-10">
                            <div className=""><label htmlFor="">Yes</label> <input type="checkbox" name="" id="" /></div>
                            <div className=""><label htmlFor="">No</label> <input type="checkbox" name="" id="" /></div>
                            <p>If YES, please complete the following:</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex w-full gap-5 h-12">
                        <div className="w-1/3 h-full flex justify-between items-center">
                            <p className='w-1/3'>Name</p>
                            <input className='w-2/3 h-full border outline-none' type="text" name="" id="" />
                        </div>
                        <div className="w-1/3 h-full flex justify-between items-center">
                            <p className='w-1/3'>Birth Date</p>
                            <div className="w-2/3  flex gap-3 items-center">
                                <input className='w-full' type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex justify-between items-center">
                            <p className='w-1/3'>Relationship</p>
                            <input className='w-2/3 h-full border outline-none' type="text" name="" id="" />
                        </div>
                    </div>

                    <div className="flex w-full gap-5 h-12">
                        <div className="w-1/3 h-full flex justify-between items-center">
                            <p className='w-1/3'>Occupation</p>
                            <input className='w-2/3 h-full border outline-none' type="text" name="" id="" />
                        </div>
                        
                        <div className="w-2/3 h-full flex justify-between items-center">
                            <p className='w-1/6'>Address</p>
                            <input className='w-5/6 h-full border outline-none' type="text" name="" id="" />
                        </div>
                    </div>
                    
                </div>
            </div>
  )
}

export default PEFP