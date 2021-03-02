import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ValidationError from "./components/forms/ValidationError";
import { MINIMUM_NAME_CHARACTERS, PASSPORT_REGEX, SKILLS } from "./constants/registration";
import "./App.css";

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name").min(MINIMUM_NAME_CHARACTERS, `Your name must at be at least ${MINIMUM_NAME_CHARACTERS} characters`),
	email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
	password: yup.string().required("Please enter your password").matches(PASSPORT_REGEX, "Your password is not valid"),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

function App() {
	const { register, handleSubmit, errors, control } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

	return (
		<Container>
			<h1>Registration</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Control name="name" placeholder="Name" ref={register} />
					<Form.Text className="text-muted">At least {MINIMUM_NAME_CHARACTERS} characters</Form.Text>
					{errors.name && <ValidationError>{errors.name.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Form.Control name="email" placeholder="Email" ref={register} />
					{errors.email && <ValidationError>{errors.email.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Form.Control name="password" type="text" placeholder="Password" ref={register} />
					<Form.Text className="text-muted">At least 8 characters, with 1 number and 1 special character</Form.Text>
					{errors.password && <ValidationError>{errors.password.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Form.Control name="confirmPassword" type="password" placeholder="Confirm password" ref={register} />
					{errors.confirmPassword && <ValidationError>{errors.confirmPassword.message}</ValidationError>}
				</Form.Group>

				<Form.Group>
					<Controller as={Select} name="skills" options={SKILLS} isMulti control={control} />
				</Form.Group>

				<Button variant="info" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;
