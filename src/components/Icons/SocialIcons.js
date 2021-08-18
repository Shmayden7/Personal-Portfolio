import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styled from "styled-components";

const Link = styled.a`
   margin: 2em 2em;
`;

const SocialIcons = ({ links: { github, instagram, linkedin } }) => {
   return (
      <div>
         <Link href={github}>
            <GitHubIcon fontSize='large'/>
         </Link>
         <Link href={instagram}>
            <InstagramIcon fontSize='large'/>
         </Link>
         <Link href={linkedin}>
            <LinkedInIcon fontSize='large'/>
         </Link>
      </div>
   );
};
export default SocialIcons;
