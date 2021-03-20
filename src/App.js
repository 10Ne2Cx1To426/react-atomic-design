import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

const user = {
  name: "taeyong",
  image: "https://source.unsplash.com/brFsZ7qszSY",
  email: "ppp@gmail.com",
  phone: "000-0000-0000",
  company: {
    name: "tCompany"
  },
  website: "sss.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>検索</PrimaryButton>
        <SecondaryButton>テスト</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
