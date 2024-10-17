import './Main.scss'
import { NavLink } from 'react-router-dom'
import nextImg from '../../img/next.svg'

function Main() {
  return (
   <div className="main">
    <div className="container">
        <h1><span>Onkologiya</span> bilan kurashayotgan bolalar uchun ijtimoiy loyiha</h1>
        <NavLink to='/about'>
            <img src={nextImg} alt="" />
            <h3>Biz haqimizda</h3>
        </NavLink>
    </div>
   </div>
  )
}

export default Main