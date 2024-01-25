import { BsFillBasket2Fill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-10">
            <div className="d-flex align-center">
                <h1>Сyber mango</h1>
                <p>магазин электротехники</p>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <BsFillBasket2Fill width={18} height={18} className="white" />
                    {/* <span>0₽</span> */}
                </li>
                <li>
                    <IoIosContact className="white" />
                </li>
            </ul>
        </header>
    );
}

export default Header;