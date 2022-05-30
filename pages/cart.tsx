import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import CartSection from "styled/components/cart/CartSection";
import Navbar from "styled/components/navbar/Navbar";

const Cart: NextPage = () => {
  return (
    <>
      <Navbar />
      <CartSection />
    </>
  );
};

export default Cart;

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
