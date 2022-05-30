import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Navbar from "styled/components/navbar/Navbar";
import OrderHistorySection from "styled/components/order-history/OrderHistorySection";

const OrderHistory: NextPage = () => {
  return (
    <>
      <Navbar />
      <OrderHistorySection />
    </>
  );
};

export default OrderHistory;

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
