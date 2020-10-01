import React from 'react';
import {HomeSection , HomeInfo, Title, SubTitle, Paragragh, ParaSpan, HomeButton} from  "./HomeStyle.js";

const Home = () => {
    return(
        <HomeSection>
            <div className="container">
                <HomeInfo>
                     <Title> Raed Salah </Title>
                     <SubTitle className="sub-title">Front End Developer </SubTitle>
                     <Paragragh className="paragragh">Meticulous, Creative and self-starting <ParaSpan>Front-End Developer</ParaSpan>, Passionate about usability and Highly skilled in HTML 5/CSS 3/JavaScript/React and very-good knowledge of Photoshop. Have strong communication skills and creative problem-solving abilities</Paragragh>
                     <HomeButton className="home-btn">Let's Develop</HomeButton>
                </HomeInfo>
            </div>
        </HomeSection>
    )
}

export default Home;