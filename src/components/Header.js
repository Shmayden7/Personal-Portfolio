import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import styled from 'styled-components';

const HeaderTitle = styled.p`
   position: relative;
   font-family: "Montserrat", sans-serif;
   font-size: 3em;
   text-align: center;
   top: 2em;
`;

const BlackButton = styled.button`
   color: white;
   background: black;
   border: 0px;
   padding: 1em 3em;
   margin: 3em 2em;
   transition: all 0.2s ease-out;
   -webkit-transition: all 0.2s ease-out;
   -moz-transition: all 0.2s ease-out;
   -ms-transition: all 0.2s ease-out;
   -o-transition: all 0.2s ease-out;
`;

const Header = () => {
   return (
      <div>
         <h1 className='heading-background'>CREATE</h1>
         <header>
            <h1>
               <Fade bottom cascade>
                  No, this site is not mobile friendly, Working on that right
                  now.
               </Fade>
            </h1>
         </header>
         <Fade bottom>
            <HeaderTitle>
               {data.headerTagline[0]}
               <br></br>
               <span className='amazing-color'>{data.headerTagline[1]}</span>
               <br></br>
               {data.headerTagline[2]}
               <br></br>
               <a
                  href={`mailto:${data.contactEmail}`}
                  rel='noopener noreferrer'
               >
                  <BlackButton>Contact.</BlackButton>
               </a>
               <a
                  href='https://drive.google.com/file/d/1j0h2ew7xdCby3S8CsESPnDXeGBQRf1GS/view?usp=sharing'
                  rel='noopener noreferrer'
               >
                  <BlackButton>Resume.</BlackButton>
               </a>
               <img className='mouse-icon' src='img/icons/mouse.png' />
            </HeaderTitle>
         </Fade>
      </div>
   );
};

export default Header;
