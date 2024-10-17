import "./Navbar.scss"
import logo from '../../img/logo.png'
import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react"
import toggleImg from '../../img/navbar-toggle.svg'
import navbarBurger from '../../img/navbar-menu.svg'
import { useTranslation } from 'react-i18next';

function Navbar() {
  const {t,i18n}=useTranslation();
  const [language,setLanguage]=useState(localStorage.getItem("i18nextLng"))

  const [toggle,setToggle]=useState(false)
  const [hamburger,setHamburger]=useState(false)
  

  useEffect(()=>{
    i18n.changeLanguage(language)
  },[language])


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
            <NavLink to='/'>{t("aboutFond")}</NavLink>
            <div>
              <button onClick={()=>{toggle==false ? setToggle(true) : setToggle(false)}}>{t("ourProjects")} <img src={toggleImg} alt="" /></button>
              {toggle && 
                <div className="list">
                  <NavLink onClick={()=>{setToggle(false)}} to='/projects'>{t("projects")}</NavLink>
                  <NavLink onClick={()=>{setToggle(false)}} to='/events'>{t("events")}</NavLink>
                </div>
              }
            </div>
            <NavLink to='/media'>{t("media")}</NavLink>
          </li>
        </ul>
        <span>
          <a href="tel:+998901234567"><button>{t("charity")}</button></a>
          <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
            <option value="uz">O'zb</option>
            <option value="ru">Ru</option>
          </select>
        </span>
        <img onClick={()=>{hamburger ? setHamburger(false) : setHamburger(true)}} className="hamburger" src={navbarBurger} alt="" />
      </div>
    </div>
    {hamburger && 
      <div className={hamburger ? "navbar-mobile active" : "navbar-mobile"}>
        <div className="navbar-wrapper">
          <NavLink onClick={()=>{setHamburger(false)}} to='/'>{t("aboutFond")}</NavLink>
          <button onClick={()=>{toggle==false ? setToggle(true) : setToggle(false)}}>{t("ourProjects")}<img src={toggleImg} alt="" /></button>
          {toggle && 
            <div className="list">
              <NavLink onClick={()=>{setToggle(false);setHamburger(false)}} to='/projects'>{t("projects")}</NavLink>
              <NavLink onClick={()=>{setToggle(false);setHamburger(false)}} to='/events'>{t("events")}</NavLink>
            </div>
          }
          <NavLink onClick={()=>{setHamburger(false)}} to='/media'>{t("media")}</NavLink>
          <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
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