import React,{ useState, useEffect } from "react";
import axios from "axios";
import { PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, Boxdiv, Imagebox, Overlay, Overlayspan} from './style.js'

const Portfolio =() =>{

const [images, setImages] = useState([])

useEffect( () =>{
   axios.get ('js/data.json').then( res => {setImages(res.data.portfolio)})
               }, [])

const portimages = images.map ( (imageItem) => {
    return(
        <Boxdiv  key={imageItem.id}>
                    <Imagebox src={imageItem.image} alt="" />
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
        </Boxdiv>

    )
}
)


return(
    
       <PortfolioSection id="Portfolio">
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            
            <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box"> 
               {portimages}
            </div>
            
        </PortfolioSection>
        
   
)
}


export default Portfolio