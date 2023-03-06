import React from 'react'

function Declaration() {
  return (
    <div className="space-y-3">
                <p className='text-xl font-medium text-blue-700'>DECLARATION & SIGNATURES</p>
                <div className=" p-5">
                    <div className="flex h-full gap-10">
                        <div className="w-1/2 h-full bg-gray-500 text-white p-5">
                            <p className='text-justify'>
                                I/we confirm that the information provided is true and accurate. I/we acknowledge that the de-
                                tails of the investment have been fully explained and acknowledge receipt of a signed copy of this
                                application with the investment details and the relating terms and conditions; and I/we agree to
                                be bound by such terms and conditions.
                            </p>
                        </div>
                        <div className="w-1/2 h-auto flex justify-end items-end p-5">
                            <div className="flex w-full gap-5">
                                <input className='w-1/2 h-12 border-b border-black bg-transparent outline-none' type="text" />
                                <input className='w-1/2 h-12 border-b border-black bg-transparent outline-none' type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-500 text-white p-5 text-justify">
                        <p>AGENT DECLARATION
                            It is agreed that funds received by the Agent from the Client(s) are held in trust by the Agent for the Client(s).1, as an Agent and authorized representative of the deposit broker, have
                            taken reasonable measures and certify that I i) have no reason to believe that the Client(s) is acting on behalf of a third party, or if so, have provided the required third party information, ii) believe the correct PEFP
                            determination has been made in respect of the Client(s), iii) cash has not been accepted as a source of funds for this investment, iv) I have fully explained the terms and conditions of this investment and v) I have
                            advised the client(s) listed above of all required disclosures, including as per the Deposit Type Instruments Regulations.</p>
                    </div>
                    <div className="flex gap-10  h-24 mt-5">
                        <div className="h-full w-1/2 flex gap-3">
                            <div className="w-1/2 h-full border-black flex flex-col justify-center gap-3">
                                <input type="text" className='w-full border-b border-black bg-transparent' placeholder='Signature of Agent' />
                                <div className="h-1/2 w-full flex items-center gap-5">
                                    <p className='w-1/5'>Name</p>
                                    <input className='h-12 border outline-none w-4/5' type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="w-1/2 h-full border-black space-y-5">
                                <div className="w-full h-1/2 flex items-center gap-5"><p className='w-1/5'>Agency</p><input className='w-4/5 h-full' type="text" /></div>
                                <div className="w-full h-1/2 flex items-center gap-5"><p className='w-1/5'>Date</p><input className='w-4/5 h-full outline-none bg-transparent' type="date" /></div>
                            </div>
                        </div>
                        <div className="h-full w-1/2 flex gap-5">
                            <div className="w-1/5 h-full  border-black flex items-center"><p>Instructions</p></div>
                            <input type={'text'} className="pl-5 w-4/5 h-full border border-black" />
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Declaration