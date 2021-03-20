import { PrimaryButton } from "../atoms/button/PrimaryButton";
import styled from "styled-components";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SConainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SConainer>
  );
};

const SConainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
