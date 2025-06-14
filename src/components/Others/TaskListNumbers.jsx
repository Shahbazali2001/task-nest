import React from 'react'

const TaskListNumbers = () => {
  return (
    <>
        <div className='flex justify-between items-center gap-5 p-2 w-screen mt-10'>

            <div className='h-40 w-[45%] bg-red-500 flex flex-col justify-center items-center rounded-xl'>
                <h1 className='text-2xl font-bold'>0</h1>
                <h2 className='text-xl'>New Task</h2>
            </div>
            
            <div className='h-40 w-[45%] bg-blue-500 flex flex-col justify-center items-center rounded-xl'>
                <h1 className='text-2xl font-bold'>0</h1>
                <h2 className='text-xl'>New Task</h2>
            </div>

            <div className='h-40 w-[45%] bg-green-500 flex flex-col justify-center items-center rounded-xl'>
                <h1 className='text-2xl font-bold'>0</h1>
                <h2 className='text-xl'>New Task</h2>
            </div>
            
            <div className='h-40 w-[45%] bg-yellow-500 flex flex-col justify-center items-center rounded-xl'>
                <h1 className='text-2xl font-bold'>0</h1>
                <h2 className='text-xl'>New Task</h2>
            </div>



        </div>

    </>
  )
}

export default TaskListNumbers