import { Table, Container } from "@nextui-org/react";

export default function TransactionTable({ transactions }) {
  return (
    <div>
      <Container lg gap={2}>
        <Table
          headerLined
          shadow={false}
          aria-label="Wallet Transactions"
          fixed
          css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
        >
          <Table.Header>
            <Table.Column width={"50%"}>HASH</Table.Column>
            <Table.Column width={"25%"}>FROM</Table.Column>
            <Table.Column width={"25%"}>TO</Table.Column>
          </Table.Header>
          <Table.Body>
            {transactions.result.map((transaction) => (
              <Table.Row key={transaction.hash}>
                <Table.Cell>{transaction.hash}</Table.Cell>
                <Table.Cell>{transaction.from_address}</Table.Cell>
                <Table.Cell>{transaction.to_address}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={Number(transactions.page_size)}
            rows={Number(transactions.total)}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </Container>
    </div>
  );
}
