import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { NavActive } from "../../types/props";
import Logo from "../Logo/Logo";
import SearchIcon from "../icons/SearchIcon/SearchIcon";

const Nav: React.FC<{ active: NavActive }> = ({ active }) => {
    return ( 
        <nav className={styles.root}>
            <div className={styles.logoRoot}>
                <Logo className={styles.logo}/>
                <div className={styles.logoCaption}>Todoizer</div>
            </div>
            <div className={styles.links}>
                <Link
                    className={styles.link}
                    to={"/"}
                >
                    <SearchIcon className={styles.icon}/>
                    <div>About us</div>
                </Link>
                <Link
                    className={styles.link}
                    to={"/todo"}
                >
                    Todo app
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
