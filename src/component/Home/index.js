import React from "react";
import { HomeSection, HomeInformation, HomeTitle, HomeDesc, HomeInfo, Span, Homebtn} from './style.js'


const Home =() =>{
return(
    <HomeSection>
    <div className="container">
        <HomeInformation>
            <HomeTitle>Ayoub Oulghrini</HomeTitle>
            <HomeInfo>Creative Director</HomeInfo>
            <HomeDesc>
                Iam a professional <Span>UX Designer</Span> and <Span>Front-End Developer</Span> creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </HomeDesc>
            <Homebtn>Let's Begin</Homebtn>
        </HomeInformation>
    </div>
</HomeSection>
)
}


export default Home