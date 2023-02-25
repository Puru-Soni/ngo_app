import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FooterFormStyles } from "./Contact.styled";
import { MuiTelInput } from "mui-tel-input";

const FormData = [
	{
		label: "Your Name",
	},
	{
		label: "Your Email",
	},
	{
		label: "Your Phone",
		numberAttr: { inputMode: "numeric", pattern: "[0-9]*" },
	},
];

const Contact = () => {
	const [phone, setPhone] = React.useState("+91");
	const handleChange = (newPhone) => {
		setPhone(newPhone);
	};

	return (
		<FooterFormStyles>
			<form className="form">
				<Box
					className="form-items"
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="outlined-multiline-static"
						label="Your Name"
						variant="outlined"
						required
					/>
					<TextField
						id="outlined-multiline-static"
						label="Your Email"
						variant="outlined"
						required
					/>
					<MuiTelInput value={phone} onChange={handleChange} />
					<TextField
						id="outlined-multiline-static"
						label="Your Message"
						variant="outlined"
						multiline
						maxRows={4}
						required
					/>
				</Box>
			</form>
		</FooterFormStyles>
	);
};

export default Contact;
