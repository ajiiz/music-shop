import { User } from "@prisma/client";
import { deleteUser } from "network/deleteUser";
import { getUsers } from "network/getUsers";
import { updateUser } from "network/updateUser";
import { useEffect, useState } from "react";
import { customSelectStyles, StyledSelect } from "styled/elements/products-showcase/inputs/StyledSelect";
import { Button } from "styled/elements/shared/Button";
import { ElementData } from "styled/elements/shared/ElementData";
import { ElementDataWrapper } from "styled/elements/shared/ElementDataWrapper";
import { ElementsContainer } from "styled/elements/shared/ElementsContainer";
import { goToLink } from "utils/navigationUtilities";
import { OptionType, roleOptions } from "../products-showcase/ProductsTypes";
import SectionHeader from "../shared/SectionHeader";
import Snackbar from "@material-ui/core/Snackbar";
import { StyledAlert } from "styled/elements/shared/StyledAlert";
import { ButtonWrapper } from "styled/elements/shared/ButtonWrapper";
import { getAllOrderList } from "network/getAllOrderList";

const AdminSection = () => {
  const [options, setOptions] = useState<OptionType[]>();
  const [users, setUsers] = useState<User[]>();
  const [currentUser, setCurrentUser] = useState<User>();
  const [isUserDeleted, setIsUserDeleted] = useState(false);
  const [isDeletionError, setIsDeletionError] = useState(false);
  const [isAccountUpdated, setIsAccountUpdated] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data.users);
      const dataAsOptions: OptionType[] = [];
      for (const user of data.users) {
        dataAsOptions.push({ value: user.email, label: user.email });
      }
      setOptions(dataAsOptions);
      setCurrentUser(data.users[0]);
    } catch (error) {
      console.error(error);
      goToLink({ link: "/" });
    }
  };

  const handleUserChange = (newValue: unknown) => {
    if (!users) return;
    const user = users?.filter(user => user.email === (newValue as OptionType).value)[0];
    if (!user) return;
    setCurrentUser(user);
  };

  const handleRoleChange = async (newValue: unknown) => {
    if (!currentUser) return;
    try {
      const newUser = { ...currentUser, role: (newValue as OptionType).value };
      await updateUser({ user: newUser });
      await fetchUsers();
      setIsAccountUpdated(true);
      setCurrentUser(newUser);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsereDelete = async () => {
    if (!currentUser) return;
    try {
      await deleteUser({ user: currentUser });
      await fetchUsers();
      setIsUserDeleted(true);
    } catch (error) {
      console.error(error);
      setIsDeletionError(true);
    }
  };

  const handleUserDeleted = () => {
    setIsUserDeleted(false);
  };

  const handleDeletionError = () => {
    setIsDeletionError(false);
  };

  const handleIsAccountUpdated = () => {
    setIsAccountUpdated(false);
  };

  const handleCreateReport = async () => {
    try {
      const data = await getAllOrderList();
      const csvString = [["Id", "Full price", "Date", "Products Data", "Status"], ...data.orderList.map(item => [item.id, item.fullPrice, item.date, item.productsData, item.status])]
        .map(e => e.join(","))
        .join("\n");
      const url = window.URL.createObjectURL(new Blob([csvString]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionHeader text={"Admin section"} />
      <ElementsContainer minHeight={"40vh"}>
        <ElementDataWrapper width={"75%"}>
          <ElementData width={"33%"} mobileWidth={"33%"}>
            account
          </ElementData>
          <ElementData width={"33%"} mobileWidth={"33%"}>
            role
          </ElementData>
          <ElementData width={"33%"} mobileWidth={"33%"}>
            manage
          </ElementData>
        </ElementDataWrapper>
        <ElementDataWrapper width={"75%"} borderTop="none">
          <ElementData width={"33%"} mobileWidth={"33%"}>
            {currentUser && (
              <StyledSelect
                width={"100%"}
                options={options}
                value={{ value: currentUser.email, label: currentUser.email }}
                placeholder="Filter by"
                styles={customSelectStyles}
                onChange={handleUserChange}
              />
            )}
          </ElementData>
          <ElementData width={"33%"} mobileWidth={"33%"}>
            {currentUser && (
              <StyledSelect
                width={"100%"}
                options={roleOptions}
                placeholder="Filter by"
                styles={customSelectStyles}
                value={{ value: currentUser.role, label: currentUser.role }}
                onChange={handleRoleChange}
              />
            )}
          </ElementData>
          <ElementData width={"33%"} mobileWidth={"33%"}>
            <Button onClick={handleUsereDelete}>delete</Button>
          </ElementData>
        </ElementDataWrapper>
        <ElementDataWrapper width={"75%"} borderTop="none">
          <ButtonWrapper>
            <Button onClick={handleCreateReport}>Create order report</Button>
          </ButtonWrapper>
        </ElementDataWrapper>
      </ElementsContainer>
      <Snackbar open={isUserDeleted} autoHideDuration={3000} onClose={handleUserDeleted}>
        <StyledAlert onClose={handleUserDeleted} severity="success">
          Account has been deleted!
        </StyledAlert>
      </Snackbar>
      <Snackbar open={isDeletionError} autoHideDuration={3000} onClose={handleDeletionError}>
        <StyledAlert onClose={handleDeletionError} severity="error">
          Account cannot be deleted!
        </StyledAlert>
      </Snackbar>
      <Snackbar open={isAccountUpdated} autoHideDuration={3000} onClose={handleIsAccountUpdated}>
        <StyledAlert onClose={handleIsAccountUpdated} severity="success">
          Account has been updated!
        </StyledAlert>
      </Snackbar>
    </>
  );
};

export default AdminSection;
