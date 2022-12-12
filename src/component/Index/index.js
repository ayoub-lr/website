import React ,{Component} from "react";
import Home from './../Home'
import Work from './../Work'
import Portfolio from './../Portfolio'
import Profile from './../Profile'
import About from './../About'
import Media from './../Media'
import Contact from './../Contact'


class Index extends Component{
    render(){
    return(
    <div> 
       <Home/>
       <Work/>
       <Portfolio/>
       <Profile />
       <About />
       <Media/>
       <Contact/>
    </div>
)
}
}


export default Index