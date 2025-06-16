// import React from 'react'

// const AdminDashboard = () => {
//   return (
//     <div className='flex flex-col justify-center items-center'>
//         <h1 className='text-2xl font-bold'>Admin Dashboard</h1>
//         <form action="" className='flex flex-col gap-5 p-5'>
//             <h3>Task Title</h3>
//             <input type="text" placeholder='Enter task title'/>
//             <h3>Task Description</h3>
//             <textarea placeholder='Enter task description' cols={10} rows={5}></textarea>
//             <h3>Date</h3>
//             <input type="date"/>
//             <h3>Assign To</h3>
//             <input type="text" placeholder='Enter assignee name'/>
//             <h3>Category</h3>
//             <input type="text" placeholder='Design, Development or Testing etc.'/>
//             <button>Create Task</button>
            
//         </form>
//     </div>
//   )
// }

// export default AdminDashboard

import React from 'react';
import { FiCalendar } from 'react-icons/fi';
const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      <form
        action=""
        className="bg-white shadow-lg rounded-2xl w-full max-w-xl px-8 py-10 flex flex-col gap-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            className="w-full px-4 py-2 text-gray-700 border border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Task Description</label>
          <textarea
            placeholder="Enter task description"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <div className="relative">
          <input
            type="date"
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          />
          <FiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-lg" />
          </div>
        </div>


        <div>
          <label className="block text-gray-700 font-medium mb-2">Assign To</label>
          <input
            type="text"
            placeholder="Enter assignee name"
            className="w-full px-4 py-2 text-gray-700 border border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <input
            type="text"
            placeholder="Design, Development or Testing etc."
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
