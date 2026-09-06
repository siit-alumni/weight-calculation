
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Navbar.css'

export default function Navbar() {
    const { t } = useTranslation();
    return (
        <nav className="navbar">
            {/* <div className="navbar-logo">
                <NavLink to="/">Logo</NavLink>
            </div> */}

            <div className="navbar-menu">
                <NavLink
                    to="/selectUser"
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    {t("usersList.selectUserIcon")}
                </NavLink>

                <NavLink
                    to="/usersList"
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    {t("selectUser.userListButton")}
                </NavLink>

                <NavLink
                    to="/foodTable"
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    {t("foodTable.title")}
                </NavLink>
            </div>
        </nav>
    )
}



