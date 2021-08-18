import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import SocialIcons from "./Icons/SocialIcons";
import styled from "styled-components";

const Header = styled.h1`
   font-family: "Montserrat", sans-serif;
   font-size: 5em;
   text-align: left;
`;

const Email = styled.a`
   color: black;
   font-size: 2em;
`;

const Footer = styled.span`
   position: relative;
   top: 2em;
   padding: 1em;
`;

const Contact = () => {
   return (
      <div>
         <Header>
            <Fade bottom cascade>
               Contact.
            </Fade>
         </Header>
         <Fade bottom>
            <div className='contact-content'>
               <h1>
                  Let’s Make Something<br></br>
                  <span className='amazing-color'>Truly Amazing!</span>
               </h1>
               <Email href={`mailto:${data.contactEmail}`}>
                  {data.contactEmail}
               </Email>
               <SocialIcons links={data.social} />
            </div>
         </Fade>

         <Footer>
            Made With ❤ by Ayden Cauchi, Design Inspired By Nike
         </Footer>
      </div>
   );
};

export default Contact;
