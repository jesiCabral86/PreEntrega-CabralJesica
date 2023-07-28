import "./NavBar.css";
import {CartWidget} from './CartWidget.jsx';
import {Button} from './Button';

export function NavBar (){
    return(
        <nav className="navbar">
        <img src="./img/logoMuebles.png"></img>
        <Button text="Sillas"></Button>
        <Button text="Sillones"></Button>
        <Button text="Mesas"></Button>
        <CartWidget items={9}></CartWidget>
    </nav>
    );
}