import './ProjectsSection.scss'
import { NavLink } from 'react-router-dom'
import projects1 from '../../img/projects1.png'
import projects2 from '../../img/projects2.png'
import projects3 from '../../img/projects3.png'
import projectsLink from '../../img/projects-link.svg'

function Projects() {
  return (
    <div className="projectsSection">
        <div className="container">
            <span>
                <h1>Biz faxrlanadigan loyihalar</h1>
                <NavLink to="/projects">
                    <button>Barcha loyihalar</button>
                </NavLink>
            </span>
            <ul>
                <li>
                    <img src={projects1} alt="" />
                    <a href='#'>
                        <h4>Samarqand 2023</h4>
                        <img src={projectsLink} alt="" />
                    </a>
                    <p>Gematologik va ankologik kasalliklar bilan kurashayotgan bolajonlar tomonidan chizilgan rasmlar ko’rgazmasi</p>
                </li>
                <li>
                    <img src={projects2} alt="" />
                    <a href='#'>
                        <h4>Nurafshon tadbiri</h4>
                        <img src={projectsLink} alt="" />
                    </a>
                    <p>Gematologik va ankologik kasalliklar bilan kurashayotgan bolajonlar tomonidan chizilgan rasmlar ko’rgazmasi</p>
                </li>
                <li>
                    <img src={projects3} alt="" />
                    <a href='#'>
                        <h4>18.09.2023</h4>
                        <img src={projectsLink} alt="" />
                    </a>
                    <p>Gematologik va ankologik kasalliklar bilan kurashayotgan bolajonlar tomonidan chizilgan rasmlar ko’rgazmasi</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects