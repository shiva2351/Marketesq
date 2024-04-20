import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css"
import Context from "../../context/Context";
import Head from "../Head";

class Home extends Component{
    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="no"){
            changeTab("no")}
            return <div>
            <Head />
            <Header />
            <div className="home-div">
                <div className="home-div2">
.
                </div>
                <div>
                    <h1>Top Students</h1>
                    <ul className="home-ul">
                        <li className="home-li">.</li>
                        <li  className="home-li">.</li>
                        <li  className="home-li">.</li>
                        <li  className="home-li">.</li>
                    </ul>
                </div>
                <div>
                    <h1>Reviews</h1>
                    <ul className="home-ul2">
                        <li className="home-li2"><h1 className="home-name">student name</h1> <hr/><p>some review submitted by the user about the company</p></li>
                        <li className="home-li2"><h1 className="home-name">student name</h1> <hr/><p>some review submitted by the user about the company</p></li>
                        <li className="home-li2"><h1 className="home-name">student name</h1> <hr/><p>some review submitted by the user about the company</p></li>
                        <li className="home-li2"><h1 className="home-name">student name</h1> <hr/><p>some review submitted by the user about the company</p></li>
                        <li className="home-li2"><h1 className="home-name">student name</h1> <hr/><p>some review submitted by the user about the company</p></li>
                        <li className="home-li2"><h1 className="home-name">student name</h1> <hr/><p>some review submitted by the user about the company</p></li>
                        <li className="home-li2"><h1 className="home-name">student name</h1> <hr/><p>some review submitted by the user about the company</p></li>
                        </ul>
                </div>
            </div>
            <Footer /></div>
        }}
    </Context.Consumer>
         
    }
}

export default Home