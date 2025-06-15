// import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/Others/Header";
import TaskListNumbers from "./components/Others/TaskListNumbers";
import TaskList from "./components/TaskList/TaskList";

function App() {
  

  return (
    <>
      <Header/>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <TaskListNumbers/>
      <TaskList/> */}
      <AdminDashboard/>
    </>
  )
}

export default App
