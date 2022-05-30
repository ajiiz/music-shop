import { Header } from "styled/elements/products-showcase/header/Header";
import { HeaderWrapper } from "styled/elements/products-showcase/header/HeaderWrapper";
import { Wrapper } from "styled/elements/shared/Wrapper";

type SectionHeaderProps = {
  text: string;
};

const SectionHeader = ({ text }: SectionHeaderProps) => {
  return (
    <HeaderWrapper>
      <Wrapper width={"75%"}>
        <Header>{text}</Header>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default SectionHeader;
