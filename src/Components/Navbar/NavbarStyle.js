import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavbarSection = styled.div`
    padding-top: 10px;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`
export const Logo = styled.div`
    width: 50%;
    float: left;
`
export const Logo_text = styled.h2`
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
`
export const Ul_List = styled.ul`
    width: auto;
    float: left;
    list-style: none;
    margin-top: 5px;
`
export const List_Item = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    
    :hover {
        color: #eb5424
    }
`
// Another easy way to copy "style" from element to another::
// export const StyledLink = Anchor;

export const StyledLink = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    
    :hover {
        color: #eb5424
    }
`

/* .navbar {
    padding-top: 10px;
    overflow: hidden;
    background: #e0fff9;
    position: relative;
    border-bottom: 1px solid #000
}

.navbar .logo {
    width: 50%;
    float: left;
}

.navbar .logo .logo_text{
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.navbar .ul_list {
    width: auto;
    float: left;
    list-style: none;
    margin-top: 5px;
}

.navbar .ul_list .list_item {
    display: inline-block;
}

.navbar .ul_list .list_item a {
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
}

.navbar .ul_list .list_item a:hover {
    color: #eb5424
} */