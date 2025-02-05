import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LogIn from "./pages/logIn";
import Landing from "./pages/landing";
import DashBoard from "./pages/dashboard";
import ManageEvent from "./pages/manageEvent";
import SearchDisplay from "./pages/searchDisplay";
import CreateEvent from "./pages/createEvent";
import Events from "./pages/eventsDisplay/events";
import './App.css'


const router =createBrowserRouter (
  [
    {
      path: "/",
      element: <Landing/>
    },
    {
      path: "login",
      element: <LogIn />  
    },
    {
      path: "dashboard",
      element: <DashBoard/>
    },
    {
      path: "login",
      element: <LogIn/>
    },
    {
      path: "manage/event",
      element: <ManageEvent/>
    },
    {
      path: "search/display",
      element: <SearchDisplay/>
    },
    {
      path: "create/event",
      element: <CreateEvent/>
    },
    {
      path: "all/events",
      element: <Events/>
    }

    

  ]);  


function App(){
  return (
    <>
    <RouterProvider router={router}/>
      </>
      )
}
  
 


export default App