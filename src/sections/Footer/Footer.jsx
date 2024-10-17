import "./Footer.scss"
import logo from "../../img/logoFooter.png"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li>
            <h2>Fond haqida</h2>
            <NavLink to='/about'>Biz haqimizda</NavLink>
          </li>
          <li>
            <h2>Bizning loyihalar</h2>
            <NavLink to='/events'>Tadbirlar</NavLink>
            <NavLink to="/projects">Loyihalar</NavLink>
          </li>
          <li>
            <h2>Media</h2>
            <NavLink to="/media">Media</NavLink>
          </li>
        </ul>
        <hr />
        <div>
          <span>
            <img src={logo} alt="" />
            <h1 className="Montserrat">Sen kuchlisan</h1>
          </span>
          <p>© 2024 Sen kuchlisan.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer