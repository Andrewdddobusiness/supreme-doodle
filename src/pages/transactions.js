import TransactionDigraph from "../components/transactionDigraph";
import TransactionTable from "../components/transactionTable";

export default function TransactionsPage() {
  const transactions = {
    total: "2000",
    page: "2",
    page_size: "100",
    result: [
      {
        hash: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
        nonce: 326595425,
        transaction_index: 25,
        from_address: "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
        to_address: "0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef",
        value: 650000000000000000,
        gas: 6721975,
        gas_price: 20000000000,
        input: "string",
        receipt_cumulative_gas_used: 1340925,
        receipt_gas_used: 1340925,
        receipt_contract_address: "0x1d6a4cf64b52f6c73f201839aded7379ce58059c",
        receipt_root: "string",
        receipt_status: 1,
        block_timestamp: "2021-04-02T10:07:54.000Z",
        block_number: 12526958,
        block_hash:
          "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",
      },
    ],
  };

  return (
    <div>
      <TransactionDigraph transactions={transactions} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}
