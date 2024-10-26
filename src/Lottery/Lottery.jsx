import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "../Ticket/Ticket";
export default function Lottery({ n= 3, winCondition }) {
  let [ticekt, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticekt);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <>
    <div>
      <p className="condition">
      the game simultaneously checks if the sum of the digits is equal to 15.
      If the sum of the ticket's digits is equal to 15, then the user wins the Lottery.
      </p>
      <hr />
      <div>
        <h1>Lottery</h1>
        <Ticket ticket={ticekt} />
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations, you won"}</h3>
      </div>
      </div>
    </>
  );
}
