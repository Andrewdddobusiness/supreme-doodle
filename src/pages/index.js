const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

import fetchTransactions from "../api/getHistoricalTransactionsByWallet";
import React, { useState, useEffect } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [moralisResponse, setMoralisResponse] = useState("");

  const handleButtonClick = async () => {
    setIsLoading(true);
    fetchTransactions()
      .then((response) => {
        setMoralisResponse(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Transactions"}
      </button>
      <p>{JSON.stringify(moralisResponse)}</p>
    </div>
  );
}

export default Home;
