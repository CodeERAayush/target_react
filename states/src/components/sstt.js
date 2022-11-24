import './stateCss.css'
export default function sstt(){
    return(
        <div className="counter">
            <button className="counter--minus">–</button>
            <div className="counter--count">
                <h1>0</h1>
            </div>
            <button className="counter--plus">+</button>
        </div>
    )
}