import React, { useState } from "react";
import DevProject from '../Project/SD/DevProject';
import Fade from "react-reveal/Fade";
import data from "../../yourdata";
import SDButtons from '../Buttons/SDButtons';
import styled from "styled-components";

const Heading = styled.h1`
   font-family: "Montserrat", sans-serif;
   font-size: 5em;
   text-align: left;
`;

const WorkContent = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 2em;
`;

const SoftwareDev = () => {
   const [displayNumber, setDisplayNumber] = useState(4);

   const seeMore = () => {
      if (data.devProjects.length > displayNumber) {
         setDisplayNumber(displayNumber + 2);
      }
   };

   const seeLess = () => {
      if (displayNumber > 2) {
         setDisplayNumber(displayNumber - 2);
      }
   };

   return (
      <div>
         <Heading>
            <Fade bottom cascade>
               Software Development.
            </Fade>
         </Heading>
         <WorkContent>
            {data.devProjects.slice(0, displayNumber).map((project) => (
               <DevProject
                  key={project.id}
                  title={project.title}
                  github={project.github}
                  service={project.service}
                  imageSrc={project.imageSrc}
                  url={project.url}
                  icons={project.icons}
                  canClick={project.canClick}
               ></DevProject>
            ))}
         </WorkContent>
         <SDButtons
            displayNumber={displayNumber}
            data={data}
            seeMore={seeMore}
            seeLess={seeLess}
         />
      </div>
   );
};

export default SoftwareDev;
