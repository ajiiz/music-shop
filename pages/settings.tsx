import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import AccountSection from "styled/components/account/AccountSection";
import Navbar from "styled/components/navbar/Navbar";

const Settings: NextPage = () => {
  return (
    <>
      <Navbar />
      <AccountSection />
    </>
  );
};

export default Settings;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin"
      }
    };
  }

  return {
    props: {}
  };
};
