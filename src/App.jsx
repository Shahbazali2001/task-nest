// import Login from "./components/Auth/Login"
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
      <TaskListNumbers/>
      <TaskList/>
    </>
  )
}

export default App
