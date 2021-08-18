import React from "react";
import styled from "styled-components";

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

const ContactButtons = ({ link: { url, name } }) => {
   return (
      <BlackButton>
         <a href={url}>
            {name}
         </a>
      </BlackButton>
   );
};
export default ContactButtons;
