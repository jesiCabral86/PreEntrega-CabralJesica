import "./NavBar.css";
import './CartWidget';
import './Button';

export function NavBar (){
    return(
        <nav className="navbar">
        <img src="./img/logoMuebles.png"></img>
        <button text="Sillas"></button>
        <button text="Sillones"></button>
        <button text="Mesas"></button>
        <CartWidget items={9}></CartWidget>
    </nav>
    );
}