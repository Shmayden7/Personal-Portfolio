import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Nav = styled.nav`
   position: relative;
   left: 18em;
   top: 9em;
   z-index: 100;
`;

const NavElement = styled.li`
   display: inline-block;
   cursor: pointer;
`;

const NavLink = styled(Link)`
   text-decoration: none;
   color: black;
   padding: 1em;
   opacity: 1;
   transition: all 0.3s ease-in-out;
   -webkit-transition: all 0.3s ease-in-out;
   -moz-transition: all 0.3s ease-in-out;
   -ms-transition: all 0.3s ease-in-out;
   -o-transition: all 0.3s ease-in-out;
`;

const Navbar = () => {
   const scrollToTop = () => {
      scroll.scrollToTop();
   };
   return (
      <div>
         <Fade bottom cascade>
            <Nav>
               <ul>
                  <NavElement>
                     <NavLink
                        className='link'
                        activeClass='active'
                        to='About'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        About.
                     </NavLink>
                  </NavElement>
                  <NavElement>
                     <NavLink
                        className='link'
                        activeClass='active'
                        to='SD'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Software Dev.
                     </NavLink>
                  </NavElement>
                  <NavElement>
                     <NavLink
                        className='link'
                        activeClass='active'
                        to='CAD'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        CAD.
                     </NavLink>
                  </NavElement>
                  <NavElement>
                     <NavLink
                        className='link'
                        activeClass='active'
                        to='WorkExperience'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Experience.
                     </NavLink>
                  </NavElement>
                  <NavElement>
                     <NavLink
                        className='link'
                        activeClass='active'
                        to='Education'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Education.
                     </NavLink>
                  </NavElement>
                  <NavElement>
                     <NavLink
                        className='link'
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Contact.
                     </NavLink>
                  </NavElement>
               </ul>
            </Nav>
         </Fade>
      </div>
   );
};

export default Navbar;
