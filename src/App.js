import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import ValidationError from "./components/forms/ValidationError";
import { MINIMUM_NAME_CHARACTERS, PASSPORT_REGEX, SKILLS, DEFAULT_VALUES } from "./constants/registration";
import "./App.css";

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name").min(MINIMUM_NAME_CHARACTERS, `Your name must at be at least ${MINIMUM_NAME_CHARACTERS} characters`),
	email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
	password: yup.string().required("Please enter your password").matches(PASSPORT_REGEX, "Your password is not valid"),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

function App() {
	const [submitted, setSubmitted] = useState(false);

	const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
		// you would normally do a POST or PUT request here
		// set submitted to true so that the Alert displays
		setSubmitted(true);
		// we need to provide a default values object to clear the React Select value
		// https://react-hook-form.com/api/#reset
		reset(DEFAULT_VALUES);
	}

	console.log(errors);

	return (
		<Container>
			<h1>Registration</h1>
			{/* if submitted is true display the Alert */}
			{submitted && <Alert variant="success">Your registration was successful</Alert>}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Control placeholder="Name" {...register("name")} />
					<Form.Text className="text-muted">At least {MINIMUM_NAME_CHARACTERS} characters</Form.Text>
					{errors.name && <ValidationError>{errors.name.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Form.Control placeholder="Email" {...register("email")} />
					{errors.email && <ValidationError>{errors.email.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Form.Control type="password" placeholder="Password" {...register("password")} />
					<Form.Text className="text-muted">At least 8 characters, with 1 number and 1 special character</Form.Text>
					{errors.password && <ValidationError>{errors.password.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Form.Control type="password" placeholder="Confirm password" {...register("confirmPassword")} />
					{errors.confirmPassword && <ValidationError>{errors.confirmPassword.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Controller
                        name="skills"
                        control={control}
                        render={({field}) => <Select isMulti options={SKILLS} {...field } />}
                    />
				</Form.Group>

				<Button variant="info" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;
