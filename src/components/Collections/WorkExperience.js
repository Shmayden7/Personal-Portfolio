import React from "react";
import Fade from "react-reveal/Fade";
import data from "../../yourdata";
import JobStack from "./JobStack";
import Card from "../Project/Card";
import JobCard from "../Project/JobCard";
import styled from "styled-components";

const Heading = styled.h1`
   font-family: "Montserrat", sans-serif;
   font-size: 5em;
   text-align: left;
   margin-left: 16.5%;
`;

const WorkExperience = () => {
   return (
      <>
         <Heading>
            <Fade bottom cascade>
               Experience.
            </Fade>
         </Heading>
         <div className='work-stack'>
            <JobStack
               height={500}
               width={500}
               background='white'
               hoverOffset={20}
            >
               {data.jobs1.map((job, i) => (
                  <Card key={i} background={job.background}>
                     <JobCard {...job} />
                  </Card>
               ))}
            </JobStack>
         </div>
         <div className='work-stack'>
            <JobStack
               height={500}
               width={500}
               background='white'
               hoverOffset={20}
            >
               {data.jobs2.map((job, i) => (
                  <Card key={i} background={job.background}>
                     <JobCard {...job} />
                  </Card>
               ))}
            </JobStack>
         </div>
      </>
   );
};

export default WorkExperience;
