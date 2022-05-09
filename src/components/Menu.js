import './Menu.css';
import React, {useState} from 'react'
import { Pivot as Hamburger } from 'hamburger-react'



const Menu = () => {
    const [menuComponent, setMenu] = useState("")
    return (
            <div>
            <Hamburger rounded size={48} color={'white'} distance={'lg'} onToggle={toggled => {
                if (toggled) {
                    setMenu('Weenis')
                }
                else {
                    setMenu("")
                }
            }} />
                <h1>{menuComponent}</h1>
            </div>
    );
};
export default Menu;