import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import { Layout } from "./components/Layout.jsx";
import Coursecard from './components/Coursecard.jsx'
// import CoursePlayer from './components/TablinkSection.jsx';
// import OverviewSection from './components/pages/OverviewSection.jsx';
// import AttachmentSection from './components/pages/AttachmentSection.jsx';
// import DoubtsSection from './components/pages/DoubtsSection.jsx';
// import NotesSection from './components/pages/NotesSection.jsx';
// import RatingSection from './components/pages/RatingSection.jsx';
import Home from './components/Home.jsx';
import Videotag from './components/Video/Videotag.jsx';
import Profile from './components/Profile';
import SigninForm from './components/Video/SigninForm.jsx';
import TablinkSection from './components/Video/TablinkSection.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="/coursecard" element={<Coursecard/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path='videoplay' element={<Videotag/>}/>
    <Route path='/profile' element={<Profile/>}/>

    <Route path='SigninForm' element={<SigninForm/>}/>
<Route path='link' element={<TablinkSection/>}/>

   </Route>
     
  )    
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router ={router} />
  </StrictMode>,
)
