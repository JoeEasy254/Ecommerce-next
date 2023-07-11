import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
  {
    orderId: 1,
    price: 40000,
    items: 3,
    customer: "James wanyoike",
    status: "active",
    created: "1/2/2023",
  },
  {
    orderId: 2,
    price: 40000,
    items: 3,
    customer: "James wanyoike",
    status: "active",
    created: "1/2/2023",
  },
  {
    orderId: 3,
    price: 40000,
    items: 3,
    customer: "James wanyoike",
    status: "active",
    created: "1/2/2023",
  },
  {
    orderId: 4,
    price: 40000,
    items: 3,
    customer: "James wanyoike",
    status: "active",
    created: "1/2/2023",
  },
  {
    orderId: 5,
    price: 40000,
    items: 3,
    customer: "James wanyoike",
    status: "active",
    created: "1/2/2023",
  },
  {
    orderId: 6,
    price: 40000,
    items: 3,
    customer: "James wanyoike",
    status: "active",
    created: "1/2/2023",
  },
  {
    orderId: 7,
    price: 40000,
    items: 3,
    customer: "James wanyoike",
    status: "active",
    created: "1/2/2023",
  },
];

export default function OrdersInfo() {
  return (
    <Card>
      <Title className="text-center">List Of My Orders</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>orderId</TableHeaderCell>
            <TableHeaderCell>created</TableHeaderCell>
            <TableHeaderCell>customer</TableHeaderCell>
            <TableHeaderCell>price</TableHeaderCell>

            <TableHeaderCell>items</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.orderId}>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.created}</TableCell>
              <TableCell>
                <Text>{item.customer}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.price}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.items}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald">{item.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
