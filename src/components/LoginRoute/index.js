import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Header from "../Header"
import Head from "../Head"
import Context from "../../context/Context"



const LoginRoute =()=>{
    const submitForm=(event)=>{
        event.preventDefault()
        console.log("form submited")
    }
    return <Context.Consumer>
    {(value)=>{
        const {changeTab,tabId}=value 
        if (tabId!=="join"){
        changeTab("join")}
        return <div><Head /><Header/>
    <div className="Register-card">
        <form  className="Register-form" onSubmit={submitForm}>
            <input className="Register-input" type="text" placeholder="USER" />
            <input  className="Register-input" type="text" placeholder="PASSWORD" />
            <button className="Register-button" type="submit">LOGIN</button>
            <p>Don't have an account? <Link to="/Register"><span>Register</span></Link></p>
        </form>
    </div>
    </div>
}}
</Context.Consumer>
}

export default LoginRoute