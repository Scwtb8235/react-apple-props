import React, { Component } from 'react'
import logo from "../../commonResource/images/icons/logo-sm.png"
import search from "../../commonResource/images/icons/search-icon-sm.png"
import cart from "../../commonResource/images/icons/cart-sm.png"
import props_header from "./Headerprops"
import Headerprops from './Headerprops'

class Header extends Component {
render() {
    return (
    <div>
        <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
		☰
			</button>
			<a className="navbar-brand mx-auto" href="Link"><img src={logo} alt=""/></a>

			<div className="navbar-collapse collapse">
			<ul className="navbar-nav nav-justified w-100 nav-fill">						
						<Headerprops name="mac" link="mac"/>
						<Headerprops name="iPhone" link= "/iPhone"/>
						<Headerprops name="iPad" link= "/iPad"/>
						<Headerprops name="watch" link= "/watch"/>
						<Headerprops name="tv" link= "/tv"/>
						<Headerprops name="music" link= "/music"/>
						<Headerprops name="support" link= "/support"/>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} alt="" /></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}alt="" /></a></li>
			</ul>
			</div>
			</nav>
		</div>
	</div>
    </div>
    )
}
}
export default Header