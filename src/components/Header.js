import { NavLink } from "react-router-dom";

import styles from './Header.module.css';
import logo from '../assets/img3.png';
import arrow from '../assets/arrow.png';

const Header = () => {

    const activeStyle = {
        color: "#fff",
    };
    const inActiveStyle = {
        color: "rgb(156 163 175)",
    };

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.links}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <NavLink to={''} style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>Home</NavLink>
                    <NavLink to={'about'} style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>About Us</NavLink>
                    <p>FAQ</p>
                    <p>Roadmap</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>
                <div className={styles.btn}>
                    <p>Download Now</p>
                    <img className={styles.arrow} src={arrow} alt="arrow" />
                </div>
            </div>

            <div className={styles.mob_nav}>
                <div className={styles.overlay}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <label htmlFor="toggle"></label>
                </div>

                <input type="checkbox" id={styles.toggle} />
                <div className={styles.verticalNav}>
                    <NavLink to={''} style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>Home</NavLink>
                    <NavLink to={'about'} style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>About Us</NavLink>
                    <a>FAQ</a>
                    <a>Roadmap</a>
                    <a>Careers</a>
                    <a>Blog</a>
                </div>
            </div>
        </div>
    )
}

export default Header;