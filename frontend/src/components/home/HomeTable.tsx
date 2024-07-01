import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  operation: number,
  cpf: number,
  client: string,
  status: string,
  detail: string
) {
  return { operation, cpf, client, status, detail };
}

const rows = [
  createData(1, 159, "Ayush", "pending", "Link1"),
  createData(2, 237, "Bharat", "processing", "Link2"),
  createData(3, 262, "Vansh", "paid", "Link3"),
  createData(4, 305, "Diya", "under review", "Link4"),
  createData(5, 356, "Rushikesh", "processing", "Link5"),
  createData(6, 356, "Rajni", "pending", "Link6"),
];

export const HomeTable = () => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "#A7E6FF";
      case "under review":
        return "#3ABEF9";
      case "pending":
        return "#3572EF";
      case "paid":
        return "#050C9C";
      default:
        return "inherit";
    }
  };
  return (
    <div className="border border-slate-300 rounded w-full h-full bg-pink-200">
      <TableContainer component={Paper}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 14 }} className="uppercase">
                Operations
              </TableCell>
              <TableCell
                style={{ fontSize: 14 }}
                className="uppercase"
                align="left"
              >
                CPF/CNPJ
              </TableCell>
              <TableCell
                style={{ fontSize: 14 }}
                className="uppercase"
                align="left"
              >
                Client
              </TableCell>
              <TableCell
                style={{ fontSize: 14 }}
                className="uppercase"
                align="left"
              >
                Status
              </TableCell>
              <TableCell
                style={{ fontSize: 14 }}
                className="uppercase"
                align="left"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.operation}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ fontSize: 14 }} component="th" scope="row">
                  {row.operation}
                </TableCell>
                <TableCell style={{ fontSize: 14 }} align="left">
                  {row.cpf}
                </TableCell>
                <TableCell style={{ fontSize: 14 }} align="left">
                  {row.client}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: 14,
                    color: "white",
                  }}
                  align="left"
                  className="uppercase"
                >
                  <span
                    style={{
                      backgroundColor: getStatusColor(row.status),
                      fontSize: 14
                    }}
                    className="rounded-md p-1"
                  >
                    {row.status}
                  </span>
                </TableCell>
                <TableCell style={{ fontSize: 14 }} align="left">
                  {row.detail}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
