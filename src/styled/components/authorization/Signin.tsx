import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { StyledImage } from "styled/components/shared/StyledImage";
import { FormContainer } from "styled/elements/authorization/FormContainer";
import { Wrapper } from "styled/elements/authorization/Wrapper";
import { ImageWrapper } from "styled/components/shared/ImageWrapper";
import { Input } from "styled/elements/authorization/Input";
import { Form } from "styled/elements/authorization/Form";
import { Button } from "styled/elements/authorization/Button";
import { InputLabel } from "styled/elements/authorization/InputLabel";
import { HeaderText } from "styled/elements/authorization/HeaderText";
import { Logo } from "styled/elements/shared/Logo";
import { QuestionText } from "styled/elements/authorization/QuestionText";
import { Link } from "styled/elements/authorization/Link";
import { goToLink } from "utils/navigationUtilities";
import { SigninProps } from "../../../../pages/signin";
import BackgroundImage from "assets/vinyl-background.png";

const Signin = ({ csrfToken }: SigninProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: `${window.location.origin}/`
    });
  };

  return (
    <Wrapper>
      <FormContainer>
        <Logo>VinylShop</Logo>
        <HeaderText>Sign in</HeaderText>
        <Form onSubmit={event => login(event)}>
          <Input name="csrfToken" type="hidden" defaultValue={csrfToken ?? ""} />
          <InputLabel>email</InputLabel>
          <Input name="email" placeholder="email@domain.com" type="email" onChange={event => setEmail(event.target.value as string)} />
          <InputLabel>password</InputLabel>
          <Input name="password" placeholder="password" type="password" onChange={event => setPassword(event.target.value as string)} />
          <QuestionText>
            Don&apos;t have an account? <Link onClick={() => goToLink({ link: "/signup" })}>Sign up</Link>
          </QuestionText>
          <Button type="submit">login</Button>
        </Form>
      </FormContainer>
      <ImageWrapper width={"70%"} height={"100%"}>
        <StyledImage src={BackgroundImage} alt="vinyl-background" placeholder="blur" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Signin;
