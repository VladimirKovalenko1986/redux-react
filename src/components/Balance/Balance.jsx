import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "../../redux/balanceSlice";
import { useState } from "react";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Balance: {balance}</p>
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(value))}>
        Withdrow credits
      </button>
    </div>
  );
}
