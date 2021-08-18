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

const SDButtons = ({ data, displayNumber, seeMore, seeLess }) => {
   if ((displayNumber === 2)) {
      return (
         <BlackButton onClick={() => seeMore()}>
            See More.
         </BlackButton>
      );
   } else if (displayNumber >= data.devProjects.length) {
      return (
         <BlackButton onClick={() => seeLess()}>
            See Less.
         </BlackButton>
      );
   } else {
      return (
         <>
            <BlackButton onClick={() => seeMore()}>
               See More.
            </BlackButton>
            <BlackButton onClick={() => seeLess()}>
               See Less.
            </BlackButton>
         </>
      );
   }
};
export default SDButtons;
