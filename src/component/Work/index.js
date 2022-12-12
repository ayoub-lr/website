import React ,{Component} from "react";
import { WorkSection, WorkTitle, span, WorkPart, Icon, PartTitle, WorkLine, PartDesc} from "./style.js"
import axios from "axios";



class Work extends Component{

state ={
    works : []
}

componentDidMount (){
    axios.get('js/data.json').then( res => { this.setState({works : res.data.works}) })
}

render(){

    const {works} = this.state;
    const Worklist = works.map( (workItem) => {  
    return(
        <WorkPart first={workItem.id}  key={workItem.id}  >
        <Icon className={workItem.icon_name}></Icon>
        <PartTitle>{workItem.title}</PartTitle>
        <WorkLine />
        <PartDesc>
           {workItem.body}
        </PartDesc>
    </WorkPart>
    )

    }  )

return(
   
         <WorkSection>
            <div className="container" id="work">
                <WorkTitle><span>My</span> Work</WorkTitle>
               {Worklist}
            </div>
        </WorkSection>
   
)
}
}


export default Work