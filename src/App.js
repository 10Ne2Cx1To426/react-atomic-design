import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
