import './Menu.css';
import React, {useState} from 'react'
import { Pivot as Hamburger } from 'hamburger-react'



const Menu = () => {
    const [menuComponent, setMenu] = useState(<div></div>)
    return (
            <div>
                {menuComponent}
            <Hamburger rounded size={48} color={'#36454F'} distance={'lg'} onToggle={toggled => {
                if (toggled) {
                    setMenu(<div class={"Menubar"}>
                        <div class={"Divider"}></div>
                        <ul>
                            <li><a href={'/'}>Home</a></li>
                            <li><a href={'/About'}>About</a></li>
                            <li><a href={'/Experience'}>Experience</a></li>
                            <li><a href={'/Portfolio'}>Portfolio</a></li>
                            <li><a href={'/Interests'}>Intersts</a></li>
                            <li><a href={'/Socials'}>Socials</a></li>
                        </ul>
                    </div>)
                }
                else {
                    setMenu(<div class={"Nobar"}></div>)
                }
            }} />
            </div>
    );
};
export default Menu;