import { Table, TableBody, TableContainer } from "@material-ui/core";
import React from "react";

import { Type } from "../../../Models/Type";

import { TableHeadAdmin } from "../TableHead";
import { AddType } from "./AddType";
import { TableRowType } from "./TableRowType";

interface AjoutActionsProps {
  /**
   * Liste des données, actions ou contreIndications
   */
  datas: Type[];

  /**
   * label du composant
   */
  label: string;

  /**
   * Permet de transmettre les nouvelles données au composant parent
   */
  handleChange: (value: Type[]) => void;
}
export const EditableTableActionsContreIndic = (props: AjoutActionsProps) => {
  /**
   * Destructuring des props
   */
  const { label, handleChange, datas } = props;

  /**
   * libellés du tableau
   */
  const libellesTypes: string[] = ["Texte", "Type"];

  /**
   * supprimer une data (action ou contreindication)
   * @param deleteIndex index de la data
   */
  function removeData(deleteIndex: number) {
    const newDatas = [...datas];
    newDatas.splice(deleteIndex, 1);
    handleChange(newDatas);
  }

  /**
   * Met à jour la liste des types
   * @param _data Action ou ContreIndication
   * @param updateIndex index de la data pour la modifier
   */
  function updateData(_data: Type, updateIndex: number) {
    const newDatas = [...datas];
    newDatas.splice(updateIndex, 1, _data);
    handleChange(newDatas);
  }

  /**
   * Ajoute une action ou contre indication
   * @param newData Action ou contre indication à ajouter
   */
  function addData(newData: Type) {
    let newDatas: Type[];
    if (!datas) {
      newDatas = [];
      newDatas.push(newData);
    } else {
      newDatas = [...datas, newData];
    }
    handleChange(newDatas);
  }

  return (
    <>
      {label}
      <TableContainer>
        <Table aria-label="simple table">
          <TableHeadAdmin libelles={libellesTypes} />

          <TableBody>
            {datas?.map((_data: Type, indexData: number) => (
              <TableRowType
                label={label}
                key={indexData}
                data={_data}
                index={indexData}
                handleRemove={(deleteIndex) => removeData(deleteIndex)}
                handleUpdate={(data: Type, indexUpdate: number) =>
                  updateData(data, indexUpdate)
                }
              />
            ))}
          </TableBody>
          <AddType
            handleChange={(newData: Type) => addData(newData)}
            label={label}
          />
        </Table>
      </TableContainer>
    </>
  );
};
