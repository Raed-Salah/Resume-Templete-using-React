import React, {Component} from 'react';
import {ProfileSection, ProfileInfo, Heading1, InfoList, InfoItem, ItemName,
    ItemValue, Skills,Paragragh, SkillItem, SkillName, SkillPercentage, GraghLine,
    Percent, Percent2, Percent3} from './ProfileStyle.js';
import axios from 'axios';

class Profile extends Component {
    state = {
        skills : []
    }

    componentDidMount(){
        axios.get('js/data.json').then( 
            res => { this.setState( {skills : res.data.profile} ) }
        );
    }

    render(){

        const {skills} = this.state;
        const skillList = skills.map( (skillItem) => {
            return(
                <SkillItem key={skillItem.id}>
                    <SkillName> {skillItem.skill} </SkillName>
                    <SkillPercentage> {skillItem.percentage} </SkillPercentage>
                    <GraghLine>
                        <Percent  percent = {skillItem.id}></Percent>
                    </GraghLine>
               </SkillItem>
            )
        } )

        return(
            <ProfileSection>
                <div className="container">
                   
                    <ProfileInfo>
                        <Heading1> My Profile </Heading1>
                        <InfoList>
                            <InfoItem>
                                 <ItemName>Name</ItemName>
                                 <ItemValue>Raed Salah</ItemValue>
                            </InfoItem>
                            <InfoItem>
                                <ItemName>Birthday</ItemName> 
                                <ItemValue>23-7-1994 </ItemValue>
                            </InfoItem>
                            <InfoItem>
                                <ItemName>Address</ItemName> 
                                <ItemValue>Giza, faisal, Al Tawabek</ItemValue> 
                            </InfoItem>
                            <InfoItem> 
                                <ItemName>Phone</ItemName> 
                                <ItemValue> 01021385146 </ItemValue> 
                            </InfoItem>
                            <InfoItem> 
                                <ItemName>Email</ItemName>
                                <ItemValue>raedsalah414@gmail.com</ItemValue> 
                            </InfoItem>                        
                            <InfoItem>
                                <ItemName>LinkedIn</ItemName>
                                <ItemValue> Linkedin/In/raed-salah</ItemValue> 
                            </InfoItem>
                        </InfoList>
                    </ProfileInfo>
                   
                    <Skills>
                        <Heading1> Some Skills </Heading1>
                        <Paragragh>
                            I have many skills to be an amazing front-end developer, I have hope that i'll be
                            and I've confident in Allah. 
                        </Paragragh>

                        {skillList}
                        
                    </Skills>
                </div>
            </ProfileSection>
        )
    }
    }

export default Profile;