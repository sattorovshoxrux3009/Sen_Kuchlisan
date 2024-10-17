import "./Footer.scss"
import logo from "../../img/logoFooter.png"
import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t}=useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li>
            <h2>{t("aboutFond")}</h2>
            <NavLink to='/about'>{t("aboutUs")}</NavLink>
          </li>
          <li>
            <h2>{t("ourProjects")}</h2>
            <NavLink to='/events'>{t("events")}</NavLink>
            <NavLink to="/projects">{t("projects")}</NavLink>
          </li>
          <li>
            <h2>{t("media")}</h2>
            <NavLink to="/media">{t("media")}</NavLink>
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