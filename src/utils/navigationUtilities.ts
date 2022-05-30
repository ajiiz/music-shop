import router from "next/router";

interface LinkProp {
  link: string;
}

export const goToLink = ({ link }: LinkProp): void => {
  router.push(link);
};
