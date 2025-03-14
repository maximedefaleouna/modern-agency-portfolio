import "./Sidebar.css"
import { Link } from "react-scroll";
import { navRoutes } from "../../data";
import { FaTimes } from "react-icons/fa";
import { cssPerfectShape } from "../../util";
function Sidebar({ open, onClose }) {
    return (
        <div className={`sidebar ${open && "active"}`}>
            <div className="top">
                <div className="close-btn" onClick={onClose} style={{ ...cssPerfectShape(40, 40) }}>
                    <FaTimes />
                </div>
            </div>
            <div className="middle">
                {
                    navRoutes.map((route, index) => (
                        <Link to={route.id} key={index}
                            spy={true} activeClass="active"
                            smooth={true} offset={-50}
                            className="route" >{route.name}</Link>

                    ))
                }
            </div>
        </div>



    );
}

export default Sidebar;