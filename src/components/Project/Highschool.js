import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
   width: 67%;
   position: relative;
   background-image: url(${(props) => props.bgPhoto});
   background-size: cover;
   border-radius: 8px;
   box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.6);
   display: flex;
   flex-direction: column;
   background-position: center center;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`;

const Content = styled.div`
   width: 80%;
   border-radius: 8px;
   margin-top: 15%;
   position: relative;
   top: 50px;
   color: white;
   background-color: white;
   padding: 20px;
   box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
`;

const Title = styled.span`
   font-size: 24px;
   font-weight: 800;
   display: block;
   color: #fd1822;
   margin-bottom: 1%;
`;

const Subtitle = styled.span`
   margin-right: 5%;
   font-size: 20px;
   font-weight: 800;
   display: inline;
   color: #9ca1ae;
`;

const Top = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row-reverse;
   width: 100%;
`;

const BtnRow = styled.div`
   margin-top: 15px;
   display: flex;
   justify-content: space-between;
   width: 100%;
   align-items: center;
`;

const Btn = styled.span`
   color: white;
   background-color: #9352ae;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 32px;
   width: 32px;
   border-radius: 16px;
   cursor: pointer;
`;

const Button = styled.a`
   font-weight: 600;
   text-decoration: none;
   letter-spacing: 1px;
   color: white;
   background-color: #9ca1ae;
   display: inline;
   align-items: center;
   justify-content: center;
   border-radius: 20px;
   margin: auto 4%;
   padding: 0.5% 4%;
   cursor: pointer;
   &:hover {
      background-color: #fd1822;
   }
`;

const SecondTitle = styled.span`
   font-size: 16px;
   color: #1f2126;
   display: block;
   font-weight: 400;
   margin-bottom: 2%;
`;

const HighschoolIcon = styled.img`
   height: 15%;
   width: 15%;
   text-align: right;
`;

const Highschool = ({ title, secondTitle, bgPhoto }) => (
   <Container bgPhoto={bgPhoto}>
      <Top>
         <HighschoolIcon src='img/education/devil.png' />
      </Top>

      {title && (
         <Content>
            {title && <Title>{title}</Title>}

            {secondTitle && (
               <BtnRow>
                  {secondTitle && <SecondTitle>{secondTitle}</SecondTitle>}
               </BtnRow>
            )}
            <Button href='https://drive.google.com/file/d/1TVjslA5XJGpfLN7is0itqMKNVmucx1Lw/view?usp=sharing'>
               Transcripts
            </Button>
            <Button href='https://ugradcalendar.uwaterloo.ca/page/ENG-Biomedical-Engineering'>
               Athletics
            </Button>
         </Content>
      )}
   </Container>
);

Highschool.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   iconName: PropTypes.string,
   iconSize: PropTypes.number,
   iconColor: PropTypes.string,
   bgPhoto: PropTypes.string,
   btnBg: PropTypes.string,
   btnColor: PropTypes.string,
   btnIcon: PropTypes.string,
   secondTitle: PropTypes.string,
   secondTitleColor: PropTypes.string,
   ratingAverage: PropTypes.oneOf([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]),
   totalReviews: PropTypes.number,
};

export default Highschool;
