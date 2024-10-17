import './App.scss'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

// Pages
import Home from "./pages/Home/Home.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Events from "./pages/Events/Events.jsx"
import About from "./pages/About/About.jsx"
import Media from './pages/Media/Media.jsx'

// Layout
import RootLayout from "./layout/RootLayout.jsx"

function App() {
  const routes=createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='/projects' index element={<Projects/>}/>
        <Route path='/events' index element={<Events/>}/>
        <Route path='/about' index element={<About/>}/>
        <Route path='/media' index element={<Media/>}/>
      </Route>
    )
  )
  return (
    <> 
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
