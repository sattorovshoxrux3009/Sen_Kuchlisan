import "./Navbar.scss"
import logo from '../../img/logo.png'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import toggleImg from '../../img/navbar-toggle.svg'
import navbarBurger from '../../img/navbar-menu.svg'

function Navbar() {

  const [toggle,setToggle]=useState(false)
  const [hamburger,setHamburger]=useState(false)

  return (
    <>
    <div className="navbar">
      <div className="container">
        <ul>
          <li>
            <img src={logo} alt="" />
            <h1>Sen kuchlisan</h1>
          </li>
          <li>
            <NavLink to='/'>Fond haqida</NavLink>
            <div>
              <button onClick={()=>{toggle==false ? setToggle(true) : setToggle(false)}}>Bizning loyihalar <img src={toggleImg} alt="" /></button>
              {toggle && 
                <div className="list">
                  <NavLink onClick={()=>{setToggle(false)}} to='/projects'>Loyihalar</NavLink>
                  <NavLink onClick={()=>{setToggle(false)}} to='/events'>Tadbirlar</NavLink>
                </div>
              }
            </div>
            <NavLink to='/media'>Media</NavLink>
          </li>
        </ul>
        <span>
          <a href="tel:+998901234567"><button>Hayriya qilish</button></a>
          <select name="" id="">
            <option value="uz">O'zb</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </span>
        <img onClick={()=>{hamburger ? setHamburger(false) : setHamburger(true)}} className="hamburger" src={navbarBurger} alt="" />
      </div>
    </div>
    {hamburger && 
      <div className={hamburger ? "navbar-mobile active" : "navbar-mobile"}>
        <div className="navbar-wrapper">
          <NavLink onClick={()=>{setHamburger(false)}} to='/'>Fond haqida</NavLink>
          <button onClick={()=>{toggle==false ? setToggle(true) : setToggle(false)}}>Bizning loyihalar <img src={toggleImg} alt="" /></button>
          {toggle && 
            <div className="list">
              <NavLink onClick={()=>{setToggle(false);setHamburger(false)}} to='/projects'>Loyihalar</NavLink>
              <NavLink onClick={()=>{setToggle(false);setHamburger(false)}} to='/events'>Tadbirlar</NavLink>
            </div>
          }
          <NavLink onClick={()=>{setHamburger(false)}} to='/media'>Media</NavLink>
          <select name="" id="">
            <option value="uz">O'zb</option>
            <option value="ru">Ru</option>
          </select>
        </div>
      </div>
    }
    </>
  )
}

export default Navbar