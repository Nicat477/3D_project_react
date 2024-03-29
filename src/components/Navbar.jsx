import React,{ useState,useEffect } from "react"
import {Link} from 'react-router-dom'
import { navLinks } from "../constants"
import {logo,menu,close} from '../assets'
import { styles } from "../style"
const Navbar = () => {
  const[active,setActive]=useState('')
  const [toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex fixed top-0 z-20 bg-primary items-center py-5`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className="flex items-center gap-2" onClick={()=>{setActive("")
      window.scrollTo(0,0)}}>
        <img src={logo} className="w-9 h-9 object-contain"/>
        <p className="text-white text-[18px] font-bold cursor-pointer">Adrian <span className="sm:block hidden">Javascript</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active===link.title ? 'text-white':'text-secondary'} hover:text-white font-medium cursor-pointer text-[18px]`} onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="items-center justify-end flex sm:hidden flex-1">
          <img src={toggle ? close :menu} className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
