import styled from 'styled-components';

export const  SocialSection = styled.div`
    height: auto;
    overflow: hidden
`

export const SocialMedia = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background-color : ${ props => (props.item === 1 ) ? "#3b5998" : "" };
    background-color : ${ props => (props.item === 2 ) ? "#498cbf" : "" };
    background-color : ${ props => (props.item === 3 ) ? "#cc2127" : "" };
`

export const IconSocial = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`

export const TitleSocial = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    // color: #fff;
`

export const Paragragh = styled.p`
    margin: 0px;
`


/* .SocialMedia {
    height: auto;
    overflow: hidden
}

.SocialMedia .Social {
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px
}

.SocialMedia .Facebook{
    background-color: #3b5998;
    overflow: hidden;
}

.SocialMedia .Twitter {
    background: #498cbf;
}

.SocialMedia .Pin {
    background: #cc2127;
}

.IconSocial{
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
}

.TitleSocial {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
}

.TitleSocial p {
    margin: 0px;
}
 */
