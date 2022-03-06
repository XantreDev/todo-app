import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { NavActive } from "../../types/props";
import Logo from "../Logo/Logo";

const Nav: React.FC<{ active: NavActive }> = ({ active }) => {
    return ( 
        <nav className={styles.root}>
            <div>
                
                <Logo className={styles.logo}/>
                
            </div>
            <div className={styles.links}>
                <Link
                    className={styles.link}
                    to={"/"}
                >
                    Главная
                </Link>
                <Link
                    className={styles.link}
                    to={"/todo"}
                >
                    Список дел
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
