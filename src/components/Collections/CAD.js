import React, { useState } from "react";
import CADProject from "../Project/CAD/CADProject";
import Fade from "react-reveal/Fade";
import data from "../../yourdata";
import CADButtons from "../Buttons/CADButtons";
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

const CAD = () => {
   const [displayNumber, setDisplayNumber] = useState(4);

   const seeMore = () => {
      if (data.swProjects.length > displayNumber) {
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
               C.A.D.
            </Fade>
         </Heading>
         <WorkContent>
            {data.swProjects.slice(0, displayNumber).map((project) => (
               <CADProject
                  key={project.id}
                  title={project.title}
                  drive={project.drive}
                  service={project.service}
                  imageSrc={project.imageSrc}
                  url={project.url}
                  icons={project.icons}
                  canClick={project.canClick}
               />
            ))}
         </WorkContent>
         <CADButtons
            displayNumber={displayNumber}
            data={data}
            seeMore={seeMore}
            seeLess={seeLess}
         />
      </div>
   );
};

export default CAD;
