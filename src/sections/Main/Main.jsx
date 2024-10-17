import './Main.scss'
import { NavLink } from 'react-router-dom'
import nextImg from '../../img/next.svg'
import { useTranslation } from 'react-i18next';

function Main() {
  const {t}=useTranslation();
  return (
   <div className="main">
    <div className="container">
        <h1><span>{t("oncology")}</span> {t("socialProject")}</h1>
        <NavLink to='/about'>
            <img src={nextImg} alt="" />
            <h3>{t("aboutUs")}</h3>
        </NavLink>
    </div>
   </div>
  )
}

export default Main