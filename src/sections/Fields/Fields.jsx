import './Fields.scss'
import fieldsImg from "../../img/fields.png"
import arrow from "../../img/arrow-right.svg"

function Fields() {
  return (
    <div className="fields">
        <div className="container">
            <h1>Biz qamrab olgan sohalar</h1>
            <div>
                <ul>
                    <li>
                        <h4>Atrof-muhit</h4>
                        <p className='mobile-text'>Yashil bog‘lar</p>
                        <p className='desktop-text'>Shahar bog‘larini, jamoat joylarini va tabiiy hududlarni barqarorlik talablarini hisobga olgan holda saqlash, tiklash va/yoki barpo etish, yashil o‘simliklarni muhofaza qilish va davolashni tashkil etish.</p>
                        <a href="#">
                            Batafsil
                            <img src={arrow} alt="" />
                        </a>
                    </li>
                    <li>
                        <h4>Ijtimoiy soha</h4>
                        <p className='mobile-text'>Yangi tug‘ilgan chaqaloqlar eshitish qobiliyatining universal skriningini joriy etish</p>
                        <p className='desktop-text'>Loyiha maqsadi — yangi tug‘ilgan chaqaloqlarning eshitish qobiliyatini skrining qilish natijalari to‘g‘risidagi ma’lumotlar to‘planadigan va tahlil qilinadigan yagona milliy platformani yaratish.</p>
                        <a href="#">
                            Batafsil
                            <img src={arrow} alt="" />
                        </a>
                    </li>
                    <li>
                        <h4>Xayriya tadbirlari</h4>
                        <p className='mobile-text'>Xavfsiz yordam</p>
                        <p className='desktop-text'>Koronavirus pandemiyasi bilan bog‘liq karantin davrida butun dunyo murakkab sinovlarga duch keldi. "Zamin" fondi "Xavfsiz yordam" xayriya loyihasi doirasida o‘ta og‘ir moliyaviy ahvolga tushib qolgan ayollarni qo‘llab-quvvatladi</p>
                        <a href="#">
                            Batafsil
                            <img src={arrow} alt="" />
                        </a>
                    </li>
                </ul>
                <img src={fieldsImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Fields