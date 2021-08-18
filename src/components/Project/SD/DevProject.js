import React from "react";
import SDLink from "./SDLink";
import SDNoLink from "./SDNoLink";

const DevProject = ({
   title,
   github,
   service,
   imageSrc,
   url,
   icons,
   canClick,
}) => {
   if (canClick) {
      return (
         <SDLink
            title={title}
            github={github}
            service={service}
            imageSrc={imageSrc}
            url={url}
            icons={icons}
         />
      );
   } else {
      return (
         <SDNoLink
            title={title}
            github={github}
            service={service}
            imageSrc={imageSrc}
            icons={icons}
         />
      );
   }
};

export default DevProject;
