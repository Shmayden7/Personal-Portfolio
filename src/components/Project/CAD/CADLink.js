import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const ClickIcon = styled.img`
   color: white;
   height: 50px;
   width: 50px;
   margin: 2%;
   position: absolute;
`;

const SkillIcon = styled.img`
   height: 2em;
   width: 2em;
   margin-left: 1em;
   vertical-align: middle;
`;

const CADLink = ({ title, drive, service, imageSrc, url, icons, canClick }) => {
   return (
      <Fade bottom>
         <div className='project'>
            <ClickIcon src='img/icons/purple-click.png' />
            <a href={url}>
               <img src={imageSrc} />
            </a>
            <h1>
               {title}
               <a href={drive}>
                  <img src='img/icons/drive.png' />
               </a>
            </h1>
            <span>{service}</span>
            {icons.map((icon) => (
               <SkillIcon key={icon.key} href={icon.link} />
            ))}
         </div>
      </Fade>
   );
};

export default CADLink;
