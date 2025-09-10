import { useState } from 'react';
import {navbarStyles} from '../assets/dummystyles'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);




    return (
        <nav className={navbarStyles.nav(scrolled)} >

        </nav>
    );
};

export default Navbar;