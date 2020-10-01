import React, { Component } from 'react';
import { SocialSection, SocialMedia, IconSocial, TitleSocial, Paragragh} from './SocialStyle.js'
import axios from 'axios';

class Social extends Component{

    state = {
        social :[]
    }

    componentDidMount(){
        axios.get('js/data.json').then(
            res => { this.setState ( {social : res.data.social} )}
        )
    }

    render(){

        const {social} = this.state;
        const socialList = social.map( (socialItem) => {
                return(
                    <SocialMedia item={socialItem.id} key={socialItem.id}>
                    <IconSocial className={socialItem.icon_name}></IconSocial>
                    <TitleSocial>
                        <Paragragh>{socialItem.title}</Paragragh>
                        <Paragragh>{socialItem.body}</Paragragh>
                    </TitleSocial>
                </SocialMedia>
                )
        })

        return(
            <SocialSection>
                
                  {socialList}
            
            </SocialSection>
        )
    }
}
export default Social;