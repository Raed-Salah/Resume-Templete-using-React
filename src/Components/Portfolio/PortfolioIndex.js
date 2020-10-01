import React, {useState, useEffect} from 'react';
import {PortfolioSection, PortfolioTitle, 
    PortfolioList, PortfolioItem, MyWorkPics, ImageWrap, Image} from './PortfolioStyle.js'
import axios from 'axios';

const Portfolio = () => {
  
    const [Images , setImages] = useState( [] );

    useEffect( () => {
        axios.get('js/data.json').then( res => { setImages(res.data.portfolio) })
        } , [])

    const portfolioImages = Images.map( (imageItem) => {
        return(
            <ImageWrap key={imageItem.id}> 
                <Image src={imageItem.image} alt="1" />
            </ImageWrap>
        )
    })    

    return(
        <PortfolioSection>
                <PortfolioTitle> My Portfolio </PortfolioTitle>
                <PortfolioList>
                    <PortfolioItem>All</PortfolioItem>
                    <PortfolioItem>HTML</PortfolioItem>
                    <PortfolioItem>Photoshop</PortfolioItem>
                    <PortfolioItem>Wordpress</PortfolioItem>
                    <PortfolioItem>Mobile</PortfolioItem>
                </PortfolioList>
                <MyWorkPics>
                    {portfolioImages}
                </MyWorkPics>
        </PortfolioSection>
    )
}

export default Portfolio;