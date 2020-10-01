import React, { Component } from 'react';
import {WorkSection, WorkTitle, Part, Icon, PartTitle, Line, Paragragh} from "./WorkStyle.js"
import axios from 'axios';

class Work extends Component {
    state = {
        works : [] 
    }

    componentDidMount(){
        axios.get("js/data.json").then( 
            res => { this.setState( {works : res.data.works}) }
            );
    }
    
    render(){

        const {works} = this.state;
        const worklist = works.map( (workItem) => {
            return(
                <Part first = {workItem.id} key={workItem.id}>
                        <Icon className={workItem.icon_name}></Icon>
                        <PartTitle> {workItem.title} </PartTitle>
                        <Line/>
                        <Paragragh> {workItem.body} </Paragragh>
                </Part>
            )
        }) 

        return(
            <WorkSection>
                <div className="container">
                    <WorkTitle> My Work </WorkTitle>
                    {worklist}
                </div>
            </WorkSection>
        )
    }
}
export default Work;