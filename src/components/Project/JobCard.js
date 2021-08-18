import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const JobCard = (props) => (
   <div style={{ position: "absolute", top: 0 }} onClick={props.onClick}>
      <header style={styles.cardHeader} className='card-header-details'>
         <ProfilePicture
            imgSrc={props.imgSrc}
            borderColor={props.imgBorderColor}
         />
         <div>
            <h1 style={styles.headerName}>{props.position}</h1>
            <h3 style={styles.headerTitle}>
               <KeyboardArrowDownIcon
                  style={{
                     display: "inline",
                     verticalAlign: "middle",
                     marginBottom: "3px",
                  }}
               />
               {props.company}
            </h3>
         </div>
      </header>

      <div>
         <DetailsRow icon='img/job/calendar.png' title={props.date} />

         <DetailsRow icon='img/job/location.png' title={props.location} />

         <DetailsRow
            icon='img/job/skill.png'
            title={props.skills}
            summary={props.role}
         />
      </div>
   </div>
);
const ProfilePicture = ({ imgSrc }) => (
   <img
      style={{
         width: "80px",
         height: "80px",
         marginLeft: "5%",
      }}
      src={imgSrc}
   />
);

const DetailsRow = ({ icon, title, summary }) => {
   const renderSummary = () => {
      if (summary)
         return (
            <p
               style={{
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "#9ca1ae",
                  display: "block",
                  marginRight: 'auto 0', 
               }}
            >
               {summary}
            </p>
         );
      return null;
   };

   return (
      <div style={styles.detailsRow.row}>
         <img style={styles.detailsRow.icon} src={icon} />
         <div style={{ width: "80%" }}>
            <h2 style={styles.detailsRow.title}>{title}</h2>
            {renderSummary()}
         </div>
      </div>
   );
};

const styles = {
   cardHeader: {
      display: "flex",
      height: "125px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
   },
   headerName: {
      margin: 0,
      border: 0,
      padding: 0,
      fontWeight: 700,
      fontSize: "25px",
      textAlign: "right",
      color: "#9352ae",
   },
   headerTitle: {
      margin: "4px 0 0",
      fontWeight: 600,
      fontSize: "17px",
      opacity: 0.8,
      textAlign: "right",
      color: "#9ca1ae",
   },
   detailsRow: {
      row: {
         width: "90%",
         padding: "0 20px",
         display: "flex",
         alignItems: "center",
         margin: "0 30px 25px 0%",
         color: "#9352ae",
      },
      icon: {
         display: "inline",
         width: "25px",
         height: "30px",
         marginLeft: "8%",
         textAlign: "center",
         alignSelf: "flex-start",
         fontSize: "22px",
      },
      title: {
         display: "inline",
         fontWeight: 500,
         fontSize: "20px",
         margin: 0,
         fontStyle: "italic",
         textAlign: "center",
      },
   },
};
export default JobCard;
