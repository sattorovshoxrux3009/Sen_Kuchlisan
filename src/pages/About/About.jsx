import './About.scss'
import about from "../../img/about.png"
import aboutHand from "../../img/about11.svg"
import about1 from "../../img/about12.svg"
import about2 from "../../img/about22.svg"
import about3 from "../../img/about32.svg"
import aboutMobile from "../../img/about-mobile.png"

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>Biz haqimizda</h1>
        <p>Fondning maqsadi — mamlakatning barqaror rivojlanishiga va aholi turmush darajasini oshirishga ko‘maklashish.</p>
        <img src={about} alt=""  className='imgage'/>
        <img src={aboutMobile} alt="" className="mobile" />
        <ul>
          <li>
            <div>
              <img src={about1} alt="" className="topImg" />
              <img src={aboutHand} alt="" className="bottomImg" />
            </div>
            <h3>Atrof-muhit</h3>
          </li>
          <li>
          <div>
              <img src={about2} alt="" className="topImg" />
              <img src={aboutHand} alt="" className="bottomImg" />
            </div>
            <h3>Ijtimoiy soha</h3>
          </li>
          <li>
            <div>
              <img src={about3} alt="" className="topImg" />
              <img src={aboutHand} alt="" className="bottomImg" />
            </div>
            <h3>Xayriya tadbirlari</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About