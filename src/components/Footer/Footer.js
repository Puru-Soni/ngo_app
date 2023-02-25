import React from "react";
import {
	TiSocialTwitterCircular,
	TiSocialLinkedinCircular,
	TiSocialFacebookCircular,
} from "react-icons/ti";
import { MdCopyright } from "react-icons/md";
import { DownFooterStyled, FooterListStyles, FooterStyles } from "./Footer.styled";
import logo from "../../misc/logo.png";
import Button from "@mui/material/Button";
import { IconContext } from "react-icons";

const footerTable = [
	{
		header: "Navigation",
		subText: ["text1", "text2", "text3", "text4"],
	},
	{
		header: "Services",
		subText: ["text1", "text2", "text3", "text4"],
	},
	{
		header: "Legal",
		subText: ["text1", "text2", "text3", "text4"],
	},
	{
		header: "Support",
		subText: ["text1", "text2", "text3", "text4"],
	},
];

const Footer = () => {
	return (
		<DownFooterStyled>
			<FooterListStyles>
				<div className="footer--header">
					<h1 className="footer-heading">
						Ayude a empoderar a los jovenes de jPuerto Rico!
					</h1>
					<div className="footer--buttons">
						<Button variant="outlined">Outlined</Button>
						<Button variant="contained">Contained</Button>
					</div>
				</div>
				<div className="footer--list-container">
					{footerTable.map((header) => (
						<ul className="footer--list-lists">
							<li key={header.header} className="footer--list-heading">
								{header.header}
							</li>
							{header.subText.map((el) => (
								<li className="footer--list-child" key={el}>
									{el}
								</li>
							))}
						</ul>
					))}
				</div>
			</FooterListStyles>

			<FooterStyles>
				<hr className="footer-divider" />
				<div className="footer-social">
					<div className="footer-logo">
						<img src={logo} alt="footer-logo" />
					</div>
					<div className="footer-copyright">
						<p>
							<MdCopyright /> 2023 Impacto Juventud. Todos los derechos
							reservados.
						</p>
					</div>
					<div className="footer-socialIcons">
						<IconContext.Provider value={{ size: "29px", className: 'react-icons'}}>
							<div>
								<TiSocialFacebookCircular />
								<TiSocialTwitterCircular />
								<TiSocialLinkedinCircular />
							</div>
						</IconContext.Provider>
					</div>
				</div>
			</FooterStyles>
		</DownFooterStyled>
	);
};

export default Footer;