import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex justify-flex-start items-center flex-nowrap gap-5 h-[300px] w-[100%] mx-2 py-4  mt-10 overflow-x-auto'>
        <div className='flex-shrink-0 h-full  w-[300px] bg-red-400 rounded-xl'>
            <div className='flex flex-row justify-between items-center p-5'>
                <h3 className='bg-red-600 p-1 rounded-md'>
                    High
                </h3>

                <h4 className=''>
                    15-June-2025
                </h4>
            </div>
        </div>

        
    </div>
  )
}

export default TaskList