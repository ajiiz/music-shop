import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import AdminSection from "styled/components/admin-panel/AdminSection";
import Navbar from "styled/components/navbar/Navbar";

const AdminPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <AdminSection />
    </>
  );
};

export default AdminPage;

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

  if (session.user?.role !== "admin") {
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
