import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import styled from "styled-components";

const Image = styled.img`
   margin-top: 0.5em;
   height: 30em;
   width: 50em;
`;

const Me =styled.img`

`;

const About = () => {
   return (
      <div className='about'>
         <div className='about-content'>
            <h1>
               <Fade bottom cascade>
                  About Me.
               </Fade>
            </h1>
            <Fade bottom>
               <p>Hi! I’m Ayden Cauchi, a 19 year old second year Biomedical Engineering student, studying at the University of Waterloo. I’d describe myself as a <span className='amazing-color'>hard working, passionate, competitive individual,</span> who enjoys going on outdoor adventures and spending time at the cottage with family. My favourite sports are hockey, football and competitive swimming. In ten years time, I want to have a challenging, intresting, and fufilling carrier that allows to help others, travel around the world, and of course, make a lot of money.</p>
            </Fade>
            <Image src={data.footballImage} alt='football image' />
         </div>
         <Image src={data.aboutImage} alt='about image' />
      </div>
   );
};

export default About;
