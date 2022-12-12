import React from "react";
import { Creative , CreativeInfo, InfoTitle, InfoTitleSpan, Infodir, InfoDesc, InfoDesca} from "./style.js"


const About =() =>{
return(
    
    <Creative>
            <div className="container" id="about">
                <CreativeInfo>
                    <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                    <Infodir>Creative Director</Infodir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDesca href="#">explicabo</InfoDesca> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo >
            </div>
        </Creative>
)
}


export default About