import type { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getSession } from "next-auth/react";
import Signin from "styled/components/authorization/Signin";

export interface SigninProps {
  csrfToken: string | null;
}

const signIn: NextPage<SigninProps> = ({ csrfToken }) => {
  return <Signin csrfToken={csrfToken} />;
};

export default signIn;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const session = await getSession(context);

  if (session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {
      csrfToken: (await getCsrfToken(context)) || null
    }
  };
};
