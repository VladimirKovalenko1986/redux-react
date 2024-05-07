import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

export default function App() {
  const lang = useSelector((state) => state.locale.lang);
  return (
    <div>
      <div>
        <h1>Vanile Redux</h1>
        <Balance />
        <LangSwitcher />
        <p>Selected leng: {lang}</p>
      </div>
    </div>
  );
}
