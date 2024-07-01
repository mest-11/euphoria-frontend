import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LogIn from "./pages/logIn";
import Landing from "./pages/landing";

const router =createBrowserRouter (
  [
    {
      path: "/",
      element: <Landing/>
    },
    {
      path: "login",
      element: <LogIn />

    
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