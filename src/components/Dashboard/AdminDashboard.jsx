import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Admin Dashboard</h1>
        <form action="" className='flex flex-col gap-5 p-5'>
            <h3>Task Title</h3>
            <input type="text" placeholder='Enter task title'/>
            <h3>Task Description</h3>
            <textarea placeholder='Enter task description' cols={10} rows={5}></textarea>
            <h3>Date</h3>
            <input type="date"/>
            <h3>Assign To</h3>
            <input type="text" placeholder='Enter assignee name'/>
            <h3>Category</h3>
            <input type="text" placeholder='Design, Development or Testing etc.'/>
            <button>Create Task</button>
            
        </form>
    </div>
  )
}

export default AdminDashboard