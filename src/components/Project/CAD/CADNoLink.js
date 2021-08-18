import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const SkillIcon = styled.img`
   height: 2em;
   width: 2em;
   margin-left: 1em;
   vertical-align: middle;
`;

const CADNoLink = ({ title, drive, service, imageSrc, icons }) => {
   return (
      <Fade bottom>
         <div className='project'>
            <a>
               <img src={imageSrc}/>
            </a>
            <h1>{title}<a href={drive}><img src='img/icons/drive.png'/></a></h1>
            <span>{service}</span>
            {icons.map((icon) => (
               <SkillIcon key={icon.key} href={icon.link}/>
            ))}
         </div>
      </Fade>
   );
};

export default CADNoLink;
