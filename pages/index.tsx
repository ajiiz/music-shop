import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Navbar from "styled/components/navbar/Navbar";
import ProductsSection from "styled/components/products-showcase/ProductsSection";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <ProductsSection />
    </>
  );
};

export default Home;

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
