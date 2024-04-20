import {Component} from "react"
import "./index.css"
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { IoMdCart } from "react-icons/io";

import { CgProfile } from "react-icons/cg";
import Context from "../../context/Context";
import { HeaderList } from "./Styledcomponents";

class Header extends Component{

    render(){
        const {active}=this.props
        console.log(active)
        
        return <Context.Consumer>{value=>{
            const {tabId}=value
           
        return <nav className="header">
                 <ul className="header-ul">
            <Link to="/"><li className="header-logo">Karo abhayaas</li></Link>

            <li>
                <ul className="header-ul2">
                    <li><Link to="/register"><button type="button">Join us</button></Link></li>
            <Link to="/courses"><HeaderList active={"class"===tabId}>Classes</HeaderList></Link>
            <Link to="/products"><HeaderList active={"pro"===tabId}>Products</HeaderList></Link>
            <Link to="/about"><HeaderList active={"us"===tabId}>About us</HeaderList></Link>
            <Link to="/profile"><HeaderList className="Header-pro-card"><CgProfile className="Header-pro" /></HeaderList></Link>
            <Link to="/cart"><HeaderList><IoMdCart/></HeaderList></Link></ul>
            </li>

          </ul>
            </nav>}}</Context.Consumer>
    }
}

export default withRouter(Header)