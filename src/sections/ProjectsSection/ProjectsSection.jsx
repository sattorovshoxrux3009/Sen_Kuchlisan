import './ProjectsSection.scss'
import { NavLink } from 'react-router-dom'
import projects1 from '../../img/projects1.png'
import projects2 from '../../img/projects2.png'
import projects3 from '../../img/projects3.png'
import projectsLink from '../../img/projects-link.svg'
import { useTranslation } from 'react-i18next';

function Projects() {
    const {t}=useTranslation();

  return (
    <div className="projectsSection">
        <div className="container">
            <span>
                <h1>{t("proud")}</h1>
                <NavLink to="/projects">
                    <button>{t("allProjects")}</button>
                </NavLink>
            </span>
            <ul>
                <li>
                    <img src={projects1} alt="" />
                    <a href='#'>
                        <h4>{t("samarkand")}</h4>
                        <img src={projectsLink} alt="" />
                    </a>
                    <p>{t("samarkandText")}</p>
                </li>
                <li>
                    <img src={projects2} alt="" />
                    <a href='#'>
                        <h4>{t("nurafshan")}</h4>
                        <img src={projectsLink} alt="" />
                    </a>
                    <p>{t("nurafshanText")}</p>
                </li>
                <li>
                    <img src={projects3} alt="" />
                    <a href='#'>
                        <h4>18.09.2023</h4>
                        <img src={projectsLink} alt="" />
                    </a>
                    <p>{t("dateText")}</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects