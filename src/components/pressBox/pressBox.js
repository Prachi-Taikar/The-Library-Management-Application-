import PressBoxItem from "../pressBoxItem/pressBoxItem";

function PressBox() {
    return (
        <div className="press-box">
            <p className="press-boxes__title press-heading ">IN THE PRESS</p>
            <div className="press-box__container container">

            <PressBoxItem />
            <PressBoxItem />
            <PressBoxItem />
            <PressBoxItem />

            </div>
        </div>
    )
}

export default PressBox;