import './Achievments.scss'
import achievmentsImg from "../../img/achievments.png"

function Achievments() {
  return (
    <div className="achievments">
        <div className="container">
            <h1>Bizning yutuqlarimiz</h1>
            <div>
                <ul>
                    <li>
                        <h3>5072</h3>
                        <p>O‘quvchi assistiv uskunalardan foydalanish imkoniyatiga ega bo‘ldi</p>
                    </li>
                    <li>
                        <h3>1265</h3>
                        <p>Pedagogik xodim uskunalarni o‘quv jarayonida qo‘llamoqda</p>
                    </li>
                    <li>
                        <h3>5000</h3>
                        <p>Karta ehtiyojmand xotin-qizlarga berildi</p>
                    </li>
                    <li>
                        <h3>9600</h3>
                        <p>Raqamli eshitish moslamalari tarqatildi</p>
                    </li>
                </ul>
                <img src={achievmentsImg} alt="" />
            </div>
        </div>  
    </div>
  )
}

export default Achievments