import { useState, ChangeEvent } from "react";
import { SignupRequest } from "../../../../pages/api/auth/signup";
import { signup } from "../../../network/auth/signup";
import { goToLink } from "utils/navigationUtilities";
import { Input } from "styled/elements/authorization/Input";
import { Button } from "styled/elements/authorization/Button";
import { HeaderText } from "styled/elements/authorization/HeaderText";
import { Wrapper } from "styled/elements/authorization/Wrapper";
import { FormContainer } from "styled/elements/authorization/FormContainer";
import { Logo } from "styled/elements/shared/Logo";
import { Form } from "styled/elements/authorization/Form";
import { QuestionText } from "styled/elements/authorization/QuestionText";
import { Link } from "styled/elements/authorization/Link";
import { ImageWrapper } from "../shared/ImageWrapper";
import { StyledImage } from "../shared/StyledImage";
import BackgroundImage from "assets/vinyl-background.png";
import { InputLabel } from "styled/elements/authorization/InputLabel";

const Signup = () => {
  const [formData, setFormData] = useState<SignupRequest>({ firstName: "", lastName: "", phoneNumber: "", email: "", password: "" });

  const handleSignup = () => {
    signup(formData)
      .then(() => goToLink({ link: "/signin" }))
      .catch(error => console.error(error));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Wrapper>
      <FormContainer height={"85%"}>
        <Logo>VinylShop</Logo>
        <HeaderText>Sign up</HeaderText>
        <Form>
          <InputLabel>first name</InputLabel>
          <Input name="firstName" type="text" placeholder="first name" onChange={event => handleChange(event)} />
          <InputLabel>last name</InputLabel>
          <Input name="lastName" type="text" placeholder="last name" onChange={event => handleChange(event)} />
          <InputLabel>phone number</InputLabel>
          <Input name="phoneNumber" type="text" placeholder="phone number" onChange={event => handleChange(event)} />
          <InputLabel>email</InputLabel>
          <Input name="email" type="email" placeholder="email@domain.com" onChange={event => handleChange(event)} />
          <InputLabel>password</InputLabel>
          <Input name="password" type="password" placeholder="password" onChange={event => handleChange(event)} />
          <QuestionText>
            Already have an account? <Link onClick={() => goToLink({ link: "/signin" })}>Sign in</Link>
          </QuestionText>
          <Button type="submit" onClick={handleSignup}>
            register
          </Button>
        </Form>
      </FormContainer>
      <ImageWrapper width={"70%"} height={"100%"}>
        <StyledImage src={BackgroundImage} alt="vinyl-background" placeholder="blur" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Signup;
