import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import { Layout } from "./components/Layout.jsx";
import Coursecards from './components/Coursecards.jsx'

import CourseHome from './components/CourseHome.jsx';
import Videotag from './components/Video/Videotag.jsx';
import Profile from './components/Profile';
import SigninForm from './components/SigninForm.jsx';

import TablinkSection from './components/Video/TablinkSection.jsx'
import Home from './components/Landingpage/Home.jsx';
import Coursedetail from './components/Coursedetail.jsx';
import Section from './components/Landingpage/Section.jsx';
import ForgotPasswordForm from './components/ForgotPasswordForm.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import LoginStudent from './components/pages/LoginStudent.jsx';
import LoginTeacher from './components/pages/LoginTeacher.jsx';
// import CoursesList from './components/Courses/CoursesList.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path="/coursecard" element={<Coursecards/>}/>
    <Route path="coursedetails" element={<CourseHome/>}/>


    <Route path="/coursedetail/:courseid" element={<Coursedetail/>}/>
    <Route path='section' element={<Section/>}/>

    <Route path='videoplay' element={<Videotag/>}/>
    <Route path='/profile' element={<Profile/>}/>

    <Route path='SigninForm' element={<SigninForm/>}/>
    <Route path='link' element={<TablinkSection/>}/>

    <Route path='ForgotPasswordForm' element={<ForgotPasswordForm/>}/>
    <Route path='checkout' element={<CheckoutForm/>}/>    

     <Route path='LoginStudent' element={<LoginStudent/>}/>
     <Route path='LoginTeacher' element={<LoginTeacher/>}/>
    {/* <Route path='CourseList' element={<CoursesList/>}/> */}

    </Route>
     
  )    
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router ={router} />
  </StrictMode>,
)
