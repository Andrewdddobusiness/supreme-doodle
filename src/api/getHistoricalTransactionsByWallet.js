const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Gets all transactions for a wallet address and returns a JSON object
async function fetchTransactions() {
  // console.log(process.env.NEXT_PUBLIC_MORALIS_API_KEY);
  await Moralis.start({
    apiKey: "d1f0XyRfNrOG2MV2t5IzolNo9WlJb5wONtZ8f5fVQP81puqGcDL6XjMtoLqtcxCj",
    // ...and any other configuration
  });

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

  console.log(response.toJSON());
  return response.toJSON();
}

export default fetchTransactions;
