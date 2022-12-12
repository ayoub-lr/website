import React, { Component } from "react";
import { ProfileSkills, ProfileSection, ProfileList, ProfileItem, Span, Spanweb, Skills, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, SpanSp1, SpanSp2, SpanSp3, ProfileTitle, SkillsTitle, ProfileTitleSpan, SkillsTitleSpan} from "./style.js";
import axios from "axios";



class Profile extends Component {

    state = {
        skills : []
    }

    componentDidMount(){
        axios.get('js/data.json').then( res => {this.setState({skills : res.data.skills})})
    }

render(){
       
    const {skills} = this.state;
    const listskills = skills.map((skillItem) => {
        return(
            <Bar key={skillItem.id}>
            <BarTitle>{skillItem.title}</BarTitle>
            <BarPerc>{skillItem.prec}</BarPerc>
            <BarParent>
                <SpanSp1 prst={skillItem.prec}></SpanSp1>
            </BarParent>
        </Bar>
        )
    })


return(

    <ProfileSkills>
    <div className="container" id="Resume">
        <ProfileSection>
            <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
            <ProfileList>
                <ProfileItem>
                    <Span>Name</Span>
                    AYOUB OULGHRINI
                </ProfileItem>
                <ProfileItem>
                    <Span>Birthday</Span>
                    28/03/1996
                </ProfileItem>
                <ProfileItem>
                    <Span>Address</Span>
                   M'hamid Marrakesh
                </ProfileItem>
                <ProfileItem>
                    <Span>Phone</Span>
                    +212 616455180
                </ProfileItem>
                <ProfileItem>
                    <Span>Email</Span>
                    ayoub.oulghrini@gmail.com
                </ProfileItem>
                <ProfileItem>
                    <Span>Website 1</Span>
                    <Spanweb>www.digitalsell.net</Spanweb>
                </ProfileItem>
                <ProfileItem>
                    <Span>Website 2</Span>
                    <Spanweb>www.iptv-premium4you.net</Spanweb>
                </ProfileItem>
                <ProfileItem>
                    <Span>Website 3</Span>
                    <Spanweb>www.digitalwebwiki.com</Spanweb>
                </ProfileItem>
            </ProfileList>
        </ProfileSection>

    <Skills>
    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
    <SkillsDesc>
    My Skills by percentage :
    </SkillsDesc>

    {listskills}

</Skills>
</div>
</ProfileSkills>

)
}
}

export default Profile