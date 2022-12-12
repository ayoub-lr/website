import React, { Component } from "react";
import {SocialMedia, SocialFace, SocialIcon, Socialp, Span, Info2} from './style.js'
import axios from "axios";

class Media extends Component{

state = {
    social : []
}

componentDidMount(){
    axios.get('js/data.json').then(res => { this.setState ({ social : res.data.social})})
}

render(){

    const {social} = this.state;
    const sociallist = social.map( (socialitem) => {
     return(
        <SocialFace color={socialitem.id} key ={socialitem.id}>
        <SocialIcon className={socialitem.icon} />
        <Socialp>
            <Span>{socialitem.title}</Span>
            <Info2>{socialitem.body}</Info2>
        </Socialp>
    </SocialFace>

     )

    })
return(

    <SocialMedia>
            {sociallist}
     </SocialMedia>

)
}
}

export default Media