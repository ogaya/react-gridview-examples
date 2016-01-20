import * as React from "react";
import {
    GridView,
    Sheet,
    CellPoint,
    CellRange,
    TEXT_ALIGN,
    VERTICAL_ALIGN
} from "react-gridview";

export class EditCell extends React.Component<{}, {}>{
    render() {
        let sheet = Sheet.create()
            .editCell(CellPoint.create(2, 3), (cell) => {
                return cell
                    .setValue(5)
                    .setTextAlign(TEXT_ALIGN.CENTER);
            })
            .editCell(CellPoint.create(3, 3), (cell) => {
                return cell
                    .setValue(6)
                    .setTextAlign(TEXT_ALIGN.CENTER);
            });
        const range = CellRange.create(CellPoint.create(2, 4), CellPoint.create(3, 12));
        sheet = sheet.editCells(range, (cell, cellPoint) => {
                return cell
                    .setValue(cellPoint.columnNo + cellPoint.rowNo)
                    .setTextAlign(TEXT_ALIGN.CENTER);
            });

        return (
            <GridView className="edit-cell" sheet={sheet} />
        );
    }
};
