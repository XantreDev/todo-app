import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { NavActive } from "../../types/props";

const Nav: React.FC<{ active: NavActive }> = ({ active }) => {
    return ( 
        <nav className="navbar is-primary" >
        {/* //     <div className="navbar-menu is-size-5 "> */}
                <Link
                    className={
                        (active === NavActive.index ? "has-background-info " : "") +
                        "is-hoverable navbar-item mx-5 has-text-white"
                    }
                    to={"/"}
                >
                    Главная
                </Link>
                <Link
                    className={
                        (active === NavActive.todo ? "has-background-info " : "") +
                        "is-hoverable navbar-item has-text-white"
                    }
                    to={"/todo"}
                >
                    Список дел
                </Link>
        {/* //     </div> */}
        </nav>
    );
};

export default Nav;
