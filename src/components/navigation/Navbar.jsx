import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { SidebarData } from './SidebarData';

const Navbar = () => {
   const [sidebar, setSidebar] = useState(false);
 
   const showSidebar = () => setSidebar(!sidebar);

   return (
				<>
					<div className="navbar">
						<Link to="#" className="menu__bars">
							<div
								className={sidebar ? "menu-btn close" : "menu-btn"}
								onClick={showSidebar}
							>
								<div className="btn-line"></div>
								<div className="btn-line"></div>
								<div className="btn-line"></div>
							</div>
						</Link>
					</div>
					<nav className={sidebar ? "nav__menu active" : "nav__menu"}>
						<ul className="nav__menu__items" onClick={showSidebar}>
							{SidebarData.map((item, index) => {
								return (
									<li key={index} className={item.cName}>
										<Link to={item.path}>
											<span>{item.title}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</>
			);
}

export default Navbar
