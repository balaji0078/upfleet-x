import React from "react";
import { NavLink } from 'react-router-dom';
import car from '../../assets/images/car.png'
import {ReactComponent as HomeIcon} from '../../assets/images/svg/home.svg'
import {ReactComponent as Bookingicon} from '../../assets/images/svg/booking.svg'
import {ReactComponent as ProfileIcon} from '../../assets/images/svg/profile.svg'
import _ from 'lodash'

export const Header = (props) => {
	let menuList = [
		{
			title : "Home",
			to : "/",
			icon : <HomeIcon />
		},
		{
			title : "About",
			to : "/about",
			icon : <HomeIcon />
		},
		{
			title : "Packages",
			to : "/packages",
			icon : <HomeIcon />
		},
		{
			title : "Bookings",
			to : "/bookings",
			icon : <Bookingicon />
		},		
		{
			title : "Profile",
			to : "/profile",
			icon : <ProfileIcon />
		}
	]
    return (
		<div className="Header-container">
			 <nav className="navbar sticky-top navbar-expand navbar-light my-auto p-0">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src={car} alt="" className="d-inline-block align-text-top me-2" />
						<span>{props.data.website_name}</span>
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					{/* className="collapse navbar-collapse" id="navbarNavDropdown" */}
					<div className="d-none d-lg-block d-xl-block">
						<ul className="navbar-nav ms-auto">
							{menuList.map(({to, title, icon}, index) => (
								<li className="nav-item active">
									<NavLink className="nav-link" to={to}>
									{icon}
										<span className="ms-2">{title}</span>
									</NavLink>
								</li>
								)	
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>       
    )
}
