import React from 'react';
import {AboutSection, AboutPart, Heading2, Title, TitleSpan} from "./AboutStyle.js"

const About = () => {
    return(
        <AboutSection>
            <div className="container">
                <AboutPart>
                    <Title> This is  <TitleSpan>Me</TitleSpan> </Title>
                    <Heading2> Front-end Developer </Heading2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
                        repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
                        repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                </AboutPart>
            </div>
        </AboutSection>
    )
}

export default About;