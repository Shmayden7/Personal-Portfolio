import React from "react";
import CADLink from "./CADLink";
import CADNoLink from "./CADNoLink";

const CADProject = ({
   title,
   drive,
   service,
   imageSrc,
   url,
   icons,
   canClick,
}) => {
   if (canClick) {
      return (
         <CADLink
            title={title}
            drive={drive}
            service={service}
            imageSrc={imageSrc}
            url={url}
            icons={icons}
         />
      );
   } else {
      return (
         <CADNoLink
            title={title}
            drive={drive}
            service={service}
            imageSrc={imageSrc}
            icons={icons}
         />
      );
   }
};

export default CADProject;
