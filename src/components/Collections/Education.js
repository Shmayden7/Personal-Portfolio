import React from "react";
import Fade from "react-reveal/Fade";
import Waterloo from "../Project/Waterloo";
import Highschool from "../Project/Highschool";
import styled from "styled-components";

const Heading = styled.h1`
   font-family: "Montserrat", sans-serif;
   font-size: 5em;
   text-align: left;
`;

const Education = () => {
   return (
      <div>
         <Heading>
            <Fade bottom cascade>
               Education.
            </Fade>
         </Heading>
         <Fade bottom>
            <Waterloo
               title='BASc Biomedical Engineering, Honours, Co-Op'
               subtitle='University of Waterloo'
               bgPhoto='img/education/qnc.jpg'
               secondTitle='Biomedical Engineering is a multidisciplinary field that combines biology & engineering, to create solutions too problems in medicine and healthcare. Biomedical Engineering is one of, if not the most broad engineering fields. I take 6-7 courses per semester, some of which include data structures & algorithms, anatomy, numerical & applied calculus, the physics of medical imaging and many more. I will have 6 Co-Op opportunities throughout my undergrad. I intend on working jobs in software development, product design, and medicine to make my portfolio as diverse as possible.'
            />
         </Fade>
         <Fade bottom>
            <Highschool
               title='Oakville Trafalgar Highschool, Diploma'
               bgPhoto='img/education/relay.jpg'
               secondTitle=''
            />
         </Fade>
      </div>
   );
};
export default Education;
