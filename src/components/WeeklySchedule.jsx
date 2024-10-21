import React from 'react'

const WeeklySchedule = () => {
  return (
    <div className='bg-stone-200 w-full p-6'>
        <h2 className='py-3'>WEEKLY SCHEDULE</h2>

        <div className='flex flex-col justify-center items-center md:flex-row md:justify-start'>
        <div className='bg-gray-600 p-5 w-[300px] rounded-md mx-auto text-center'>
            <div className='bg-white rounded-md p-3 mx-2 mb-3'>
                <h2>WED</h2>
                <p>1h</p>
            </div>
            <div className='text-center'>
                <h1>Prayers & Bible Study</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, asperiores.</p>
            </div>
        </div>
        <div className='bg-gray-600 p-5 w-[300px] rounded-md mx-auto mt-3'>
            <div className='bg-white rounded-md p-3 mx-2 mb-3 text-center'>
                <h2>SAT</h2>
                <p>1h</p>
            </div>
            <div className='text-center'>
                <h1>Prayers & Bible Study</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, asperiores.</p>
            </div>
        </div>
        <div className='bg-gray-600 p-5 w-[300px] rounded-md mx-auto mt-3'>
            <div className='bg-white rounded-md p-3 mx-2 mb-3 text-center'>
                <h2>SAT</h2>
                <p>1h</p>
            </div>
            <div className='text-center'>
                <h1>Prayers & Bible Study</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, asperiores.</p>
            </div>
        </div>
        
        </div>

    </div>
  )
}

export default WeeklySchedule
