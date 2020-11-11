import { TableRow, TableHead, TableCell } from "@material-ui/core";
import React from "react";

interface TableHeadProps {
  libelles: string[];
}
export const TableHeadAdmin = (props: TableHeadProps) => {
  const { libelles } = props;

  return (
    <TableHead>
      <TableRow>
        {libelles.map((libelle: string, index: number) => (
          <TableCell key={index}>
            <b>{libelle}</b>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
