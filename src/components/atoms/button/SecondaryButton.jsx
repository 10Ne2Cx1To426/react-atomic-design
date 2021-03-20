import styled from "styled-components";
import { Basebutton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(Basebutton)`
  background-color: #11999e;
`;
