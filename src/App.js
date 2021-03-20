import { PrimaryButton } from "./components/atoms/PrimaryButton";
import { SecondaryButton } from "./components/atoms/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
    </div>
  );
}
