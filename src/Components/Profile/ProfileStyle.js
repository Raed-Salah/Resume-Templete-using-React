import styled from 'styled-components';

export const ProfileSection = styled.div`
    height: 400px;
    overflow: hidden;
`

export const Heading1 = styled.h1`
    font-size: 45px;
    margin-bottom: 10px;
`

export const ProfileInfo = styled.div`
    width: 50%;
    float: left;
`

export const InfoList = styled.ul`
    list-style: none;
    overflow: hidden;
    padding: 0px;
`

export const InfoItem = styled.li`
    margin: 0px 10px 10px 0px;
`

export const ItemName = styled.span`
    font-weight: bold;
    width: 15%;
    float: left;
`

export const ItemValue = styled.span`
    margin-left: 20px;
    width: 30%;
`

export const Skills = styled.div`
    width: 50%;
    float: left;
`

export const Paragragh = styled.p`

`

export const SkillItem = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const SkillName = styled.span`
    float: left;
`

export const SkillPercentage = styled.span`
    float: right;
    margin-right: 200px;
`

export const GraghLine = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const Percent = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width : ${ props => (props.percent === 1 ) ? "70%" : (props.percent === 2 ) ? "90%"  : "60%" }
`


/* .profileSection{
    height: 400px;
    overflow: hidden;
}

h1{
    font-size: 45px;
    margin-bottom: 10px;
}

.profileSection .Profile_info{
    width: 50%;
    float: left;
}

.profileSection .Profile_info .info_list{
    list-style: none;
    overflow: hidden;
    padding: 0px;
}

.profileSection .Profile_info .info_list .info-item{
    margin: 0px 10px 10px 0px;
}

.profileSection .Profile_info .info_list .info-item .item_name{
    font-weight: bold;
    width: 15%;
    float: left;
}

.profileSection .Profile_info .info_list .info-item .itemValue{
    margin-left: 20px;
    width: 30%;
}

.profileSection .skills{
    width: 50%;
    float: left;
}

.skills .skill_item{
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
}

.skills .skill_item .skillName{
    float: left;
}

.skills .skill_item .skill_percentage{
    float: right;
    margin-right: 200px;
}

.skills .skill_item .graph_line{
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
}

.skills .skill_item .graph_line span{
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
}

.skills .skill_item .graph_line span.percent1{ width:70%}
.skills .skill_item .graph_line span.percent2{ width:60%}
.skills .skill_item .graph_line span.percent3{ width:80%}
 */
