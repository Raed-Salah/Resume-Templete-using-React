import React from 'react';
import { NavbarSection, Logo, Logo_text, Ul_List, List_Item, Anchor,StyledLink } from './NavbarStyle.js'


const Navbar = () => {
    return(
        <NavbarSection>

            <div className="container">

                <Logo>
                    <Logo_text>Raed Salah</Logo_text> 
                </Logo>
                
                <Ul_List>
                    <List_Item><StyledLink to="/">Home</StyledLink></List_Item>
                    <List_Item><Anchor href="#">Work</Anchor></List_Item>
                    <List_Item><Anchor href="#">Portfolio</Anchor></List_Item>
                    <List_Item><Anchor href="#">Resume</Anchor></List_Item>
                    <List_Item><Anchor href="#">About</Anchor></List_Item>
                    <List_Item><StyledLink to="/contact">Contact</StyledLink></List_Item>
                </Ul_List>
            </div>
        </NavbarSection>
    )
}

export default Navbar;