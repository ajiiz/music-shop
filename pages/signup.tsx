import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Signup from "styled/components/authorization/Signup";

const signIn: NextPage = () => {
  return <Signup />;
};

export default signIn;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    };
  }

  return {
    props: {}
  };
};
