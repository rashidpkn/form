import React from 'react'

function RegistrationInformation() {
  return (
    <div className="space-y-5">
                <p className='text-xl font-medium text-blue-700'>REGISTRATION INFORMATION</p>
                <div className="flex bg-white items-center h-20 justify-between px-5">
                    <div className=""><p>Joint Tenants with Right of Survivorship (“And”)</p></div>
                    <div className=""><p>Tenants In Common (provide ownership percentages)</p></div>
                    <div className="flex items-center gap-5">
                        <p>Other</p>
                        <input className='h-12 border outline-none' type="text" /></div>
                </div>
            </div>
  )
}

export default RegistrationInformation