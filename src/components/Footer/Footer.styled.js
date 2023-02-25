import styled from "styled-components";

export const DownFooterStyled = styled.div`
	padding: 90px 180px 124px 180px;
`;

export const FooterStyles = styled.div`
	font-size: 14px;
	font-weight: 400;
	line-height: 14px;
	letter-spacing: 0px;
	text-align: center;

	.footer-social {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.footer-divider {
		background: #0f528b;
		opacity: 0.1;
	}

	.footer-copyright p,
	.footer-socialIcons {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;

export const FooterListStyles = styled.div`
	.footer--header{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.footer-heading {
		width: 32rem;
		margin-top: 0;
		margin-bottom: 50px;
	}

	.footer--list-container {
		margin-top: 80px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		justify-items: center;
		text-align: left;
		gap: calc(100%/5);

		ul {
			padding: 0;

			.footer--list-child {
				opacity: 0.8;
				color: #0a142f;
				font-weight: 400;
				line-height: 30px;
			}

			.footer--list-heading {
				font-size: 15px;
				font-weight: 700;
			}

			list-style: none;
		}
	}

	.footer--buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}
`;
