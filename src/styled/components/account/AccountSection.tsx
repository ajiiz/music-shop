import { useEffect, useState } from "react";
import { getUser } from "network/getUser";
import SectionHeader from "../shared/SectionHeader";
import AccountInputs from "./AccountInputs";
import { User } from "@prisma/client";

const AccountSection = () => {
  const [account, setAccount] = useState<User | undefined>();

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    try {
      const data = await getUser();
      const user = { ...data.user, password: "" };
      setAccount(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionHeader text={"Account settings"} />
      {account && <AccountInputs account={account} fetchAccount={fetchAccount} />}
    </>
  );
};

export default AccountSection;
