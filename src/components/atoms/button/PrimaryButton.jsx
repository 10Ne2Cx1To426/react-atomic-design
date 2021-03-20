import styled from "styled-components";
import { Basebutton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(Basebutton)`
  background-color: #40514e;
`;
