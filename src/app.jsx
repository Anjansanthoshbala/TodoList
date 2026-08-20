import { useState } from "react"
import preactLogo from './assets/preact.svg'

import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './app.css'
import Demo1 from './components/Demo'

import Demo3 from './Demo2'
import Student1 from './components/Student'
import Regi1 from './components/Register'
import Arrow1 from './components/Arrow'
import Login1 from '../Login'
import Classc1 from './components/Classc1'
import Sample1, { Sample2, Sample3 } from './Sample'
import { Employee, Students1 } from './Students'
import { Condition2 } from './Condition'
import { Conditio1 } from './Conditio'
import { Condi1 } from './Condi';
import { Forms1 } from './components/Forms'
import { Assign1 } from './Assign'
import { Propc1 } from './Propc'
import { Propa1 } from './Propa'
import { Propassign1 } from './Propassign'
import { Todolist } from './Todo';
import { StudentData, Todolist1 } from './Todolist'
import { Assigntodo1 } from './Assigntodo'
import { Assignlogin1 } from './Assignlogin'
import { Event1, Event2, Event3 } from './Events'
import { Counter, Counter1, Counterno1, State1 } from './States'
import { Effects1 } from './Effects'
import { List1, Listrender2, Lsitrender1 } from './Listrender'
import { Listren1, Listrendere1, Listrendering1, Listrending3 } from './Listrendering2'
import { Todolist22, Todolist23, Todolist24, Todolist25 } from './components/PracticeSeeion/TodoList21'
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom'
import { Nav } from './Nav'
import { Gallery, Home1, Profile, Routing, Santhosh, Settings, Viewprofile } from './Home1.jsx'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from './pages/component/Navbar1.jsx'
import { Formhandling12 } from './components/PracticeSeeion/FormHandlinh2021.jsx'
import { Menu1, Viewprofile1 } from './menus.jsx'
export function App() {
  // const [count, setCount] = useState(0)
  return (<> 
       {/* <h1>Hello Everyone</h1> */}
      {/* <Demo1/>       
      <Demo3/>
      <Student1/>
      <College1/>
      <Regi1/> 
      <Sample1/>
      <Sample2/>
      <Sample3/>
      <Arrow1/>  
      <Login1/>
      <Classc1/>
      <Students1/>
      <Employee/>
      <Condition2/>
      <Conditio1/>
      <Condi1/>
      <Forms1/>  */}
       {/* <Assign1/> */}
      {/* <Propc1 name="Anjan" city="Bangalore"  age={20}/>
           <Propc1 name="Santhosh" city="Hyderabad"  age={20}/>
      <div style={{border:"2px solid black", margin:"10px"}}>
      <h1>Notification</h1>
      <Propa1 message="Success Message" bgc="green" />
      <Propa1 message="Danger Message" bgc="blue"/>
      <Propa1 message="Information Message" bgc="violet" />
      <Propa1 message="Complete Message" bgc="red" />
      </div>
      <div style={{border:"4px solid red", margin:"10px", backgroundColor:"black"}}>
        <h1 style={{color:"white", textAlign:"center"}}>Student Details</h1>
        <Propassign1 name="Anjan Santhosh" age={23} adress="Bangalore" phoneno="7569048004" bgc="blue"/>
        <Propassign1 name="Rahul" age={34} adress="Hyderabad" phoneno="9849627682" bgc="violet"/>
        <Propassign1 name="Jhon" age={37} adress="Ananthapur" phoneno={9857257745} bgc="pink" />
         </div> */}
         {/* <Todolist/>  */}
         {/* <Todolist1/>  */}
         {/* <StudentData/>  */}
         {/* <Assigntodo1/> */}
         {/* <Assignlogin1/> */}
         {/* <Event1/>
         <Event2/>
         <Event3/> */}
          {/* <State1/>
         <Counter/>
         <Effects1/>
         <Lsitrender1/>      
         <Listrender2/>
         <List1/>
         <Listrendering1/>
         <Listrending3/>
         <Listren1/>
         <Listrendere1/>
         <Counter1/>
         <Counterno1/> */}
         {/* <Todolist22/> 
         <Todolist23/> */}
         {/* <Todolist24/>
         <Todolist25/> */}
         {/* <Formhandling12/> */}
           {/* <BrowserRouter>
             <Nav/>
             <Routes>
                   <Route path="/" element={<Home1/>}/>
                   <Route path="/about" element={<About/>}/>
                   <Route path="/gallery" element={<Gallery/>}/>
                   <Route path="/routing" element={<Routing/>}/>
                   <Route path="/santhosh" element={<Santhosh/>}/>
                   <Route path="/profile" element={<Profile/>}>
                       <Route path="settings" element={<Settings/>}/>
                       <Route path="viewprofile" element={<Viewprofile/>}/>
                   </Route>
             </Routes>
         </BrowserRouter>   */}
           <BrowserRouter>
             <Link to="/">Menu</Link>
             <Routes>
              <Route path="/menu" element={<Menu1/>}>
                 <Route path="viewprofile" element={<Viewprofile1/>}/>
                
              </Route>
             </Routes>
          </BrowserRouter> 
         </>
  )
}
export default App;

