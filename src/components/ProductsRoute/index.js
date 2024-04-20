import {Component} from "react"
import Header from "../Header"
import Footer from "../Footer"
import Context from "../../context/Context"
import "./index.css"
import Head from "../Head"

class ProductsRoute extends Component{

  

    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="pro"){
            changeTab("pro")}
            console.log('proroute')
            return <div>
                <Head />
            <Header />
            <div className="pro-card">
            products</div>
            <Footer />
        </div>
        }}
    </Context.Consumer>
        
    }
}

export default ProductsRoute