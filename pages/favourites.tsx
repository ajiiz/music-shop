import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Navbar from "styled/components/navbar/Navbar";

const Favourites: NextPage = () => {
  return (
    <>
      <Navbar />
      <p>Favourites</p>
    </>
  );
};

export default Favourites;

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
