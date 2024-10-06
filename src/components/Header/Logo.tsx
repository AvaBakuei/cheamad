import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export function Logo() {
    return (
        <NavLink to="/">
            <img
                src={logo}
                alt="Background"
                className="w-[82px] h-[46px] object-cover"
            />
        </NavLink>
    );
}
