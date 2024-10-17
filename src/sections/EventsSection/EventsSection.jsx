import './EventsSection.scss'
import { NavLink } from 'react-router-dom'
import linkImg from "../../img/projects-link.svg"
import events1 from "../../img/events1.png"
import events2 from "../../img/events2.png"
import events3 from "../../img/events3.png"

function Events() {
  return (
    <div className="eventsSection">
        <div className="container">
            <span>
                <h1>Tadbirlar</h1>
                <NavLink to="/events">
                    <button>Barcha tadbirlar</button>
                </NavLink>
            </span>
            <ul>
                <li>
                    <img src={events1} alt="" />
                    <a href="#">
                        <h4>Volalar onkologiyasi va gemotologitasi bo’yicha...</h4>
                        <img src={linkImg} alt="" />
                    </a>
                    <p>Videoni tomosha qilish</p>
                </li>
                <li>
                    <img src={events2} alt="" />
                    <a href="#">
                        <h4>"Chelsea Community Hospital School"...</h4>
                        <img src={linkImg} alt="" />
                    </a>
                    <p>"Mehrli maktab" loyihasi doirasida "Chelsea" jamoatchilik gospital maktabi uzoq muddat davolanuvchi bolalar bilan metodik ishlash...</p>
                </li>
                <li>
                    <img src={events3} alt="" />
                    <a href="#">
                        <h4>"Atmosfera havosining ifloslanishi monitoringini...</h4>
                        <img src={linkImg} alt="" />
                    </a>
                    <p>"Atmosfera havosining ifloslanishi monitoringini avtomatlashtirish" loyihasini amalga oshirish doirasida Toshkent, Nurafshon va Qarshida...</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Events