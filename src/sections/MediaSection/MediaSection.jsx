import "./MediaSection.scss"
import media1 from "../../img/media1.png"
import media2 from "../../img/media2.png"
import media3 from "../../img/media3.png"
import media4 from "../../img/media4.png"
import media5 from "../../img/media5.png"
import mediaIcon from "../../img/media-next.svg"
import { NavLink } from "react-router-dom"

function Media() {
  return (
    <div className="mediaSection">
        <div className="container">
            <span>
                <h1>Media</h1>
                <NavLink to="/media">Barchasini ko’rish <img src={mediaIcon} alt="" /></NavLink>
            </span>
            <ul>
                <li>
                    <img src={media1} alt="" />
                </li>
                <li>
                    <img src={media2} alt="" />
                </li>
                <li>
                    <img src={media3} alt="" />
                </li>
                <li>
                    <img src={media4} alt="" />
                </li>
                <li>
                    <img src={media5} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Media