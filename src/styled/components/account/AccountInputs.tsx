import { ChangeEvent, FormEvent, useState } from "react";
import { updateUser } from "network/updateUser";
import { User } from "@prisma/client";
import { Button } from "styled/elements/authorization/Button";
import { Form } from "styled/elements/account/Form";
import { Input } from "styled/elements/authorization/Input";
import { InputLabel } from "styled/elements/authorization/InputLabel";
import { InputsWrapper } from "styled/elements/account/InputsWrapper";
import Snackbar from "@material-ui/core/Snackbar";
import { StyledAlert } from "styled/elements/shared/StyledAlert";

type AccountInputsProps = {
  account: User;
  fetchAccount: () => Promise<void>;
};

const AccountInputs = ({ account, fetchAccount }: AccountInputsProps) => {
  const [formData, setFormData] = useState(account);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateUser({ user: formData });
      await fetchAccount();
      setIsUserUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserUpdated = () => {
    setIsUserUpdated(false);
  };

  return (
    <>
      <InputsWrapper>
        <Form onSubmit={handleUpdateUser}>
          <InputLabel>first name</InputLabel>
          <Input name="firstName" type="text" placeholder="first name" value={formData.firstName} onChange={event => handleChange(event)} />
          <InputLabel>last name</InputLabel>
          <Input name="lastName" type="text" placeholder="last name" value={formData.lastName} onChange={event => handleChange(event)} />
          <InputLabel>phone number</InputLabel>
          <Input name="phoneNumber" type="text" placeholder="phone number" value={formData.phoneNumber} onChange={event => handleChange(event)} />
          <InputLabel>new password</InputLabel>
          <Input name="password" type="password" placeholder="password" value={formData.password} onChange={event => handleChange(event)} />
          <Button type="submit">save</Button>
        </Form>
      </InputsWrapper>
      <Snackbar open={isUserUpdated} autoHideDuration={3000} onClose={handleUserUpdated}>
        <StyledAlert onClose={handleUserUpdated} severity="success">
          Your account has been updated!
        </StyledAlert>
      </Snackbar>
    </>
  );
};

export default AccountInputs;
