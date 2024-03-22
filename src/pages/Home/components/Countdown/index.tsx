import { useState } from "react";
import { CountdownContainer, Separator } from "./styled";

interface CountdownProps {
  activeCycle: any;
}

export function Countdown({ activeCycle }: CountdownProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
