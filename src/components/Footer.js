import React from "react";
import styled from 'styled-components';
import about from '../images/about.png'
import services from '../images/services.png'
import contact from '../images/contact.png'
import sm from '../images/sm.png'
import paw from '../images/paw-hand6.png'

const Box = styled.div`
  // padding: 40px 40px;
  background: #8e3a00;
  border-right: 60px solid #161616;
  border-left: 60px solid #161616;
  border-bottom: 30px solid #161616;
  // position: absolute;
  bottom: 0;
  padding: 30px 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    /* background: red; */
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 100px;
  background: #fcfffb;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Row = styled.div`
  display: grid;
  margin: 30px;
  grid-template-columns: repeat(auto-fill,
                         minmax(185px, 1fr));
  grid-gap: 50px;
`;

const FooterLink = styled.a`
  color: #615346;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
      color: black;
      font-weight: bold;
      transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 18px;
  color: #615346;
  margin-bottom: 30px;
  font-weight: bold;
`;

const Footer = () => {
return (
	<Box>
  <div className='logo-and-title'>
    <img className='pplogo' src={paw} alt='PawPatron App'/>
    <p className='footer-text'>Discover the world's cutest pets and pet needs from PawPatron and support us in providing forever homes for the fur babies</p>
  </div>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
      <div className='footer-about-icon-div'>
        <img className='footer-icon' src={about} alt='About Us'/>
      </div>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
      <div className='footer-services-icon-div'>
        <img className='footer-services-icon' src={services} alt='Services'/>
      </div>
			<FooterLink href="#">Adopt</FooterLink>
			<FooterLink href="#">Find Home</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
      <div className='footer-contact-icon-div'>
        <img className='footer-icon' src={contact} alt='Contact Us'/>
      </div>
			<FooterLink href="#">Hyderabad</FooterLink>
      <FooterLink href="#">Bengaluru</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
      <div className='footer-sm-icon-div'>
        <img className='footer-icon' src={sm} alt='Social Media'/>
      </div>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
    <p className='tnc'>@2022 All Rights Reserved. PawPatron is a prototype that encourages pet safety and adpoting them to families through authorised sellers registered with the State Animal Welfare Board of respective states.<br/>
    <span className='tnc-ul'>Cookie Preferences</span>, <span className='tnc-ul'>Privacy</span> and <span className='tnc-ul'>Terms</span>.</p>
	</Container>
	</Box>
);
};
export default Footer;
