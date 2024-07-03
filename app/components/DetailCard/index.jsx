import React from 'react'

function DetailCard({heading, detail}) {
  return (
    <div className='flex flex-col'>
        <p className="font-extralight text-7xl">{heading}</p>
      <div className="text-justify font-extralight text-3xl py-8">
        {detail}
      </div>
      <div className='w-full h-[2px] bg-gray-300 my-4'></div>
    </div>
  )
}

export default DetailCard