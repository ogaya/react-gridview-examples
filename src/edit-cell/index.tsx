import * as React from "react";
import {
    GridView,
    Sheet,
    CellPoint,
    CellRange,
    TEXT_ALIGN,
    VERTICAL_ALIGN,
    BORDER_POSITION
} from "react-gridview";

function createSheet() {
    // Sheet is an Immutable Record
    let sheet = Sheet.create();

    // edit cells
    const range = CellRange.create(CellPoint.create(3, 3), CellPoint.create(6, 12));
    sheet = sheet.editCells(range, (cell, cellPoint) => {
        return cell
            .setValue(cellPoint.columnNo + cellPoint.rowNo)
            .setTextAlign(TEXT_ALIGN.CENTER);
    });

    // merge Cells
    sheet = sheet
        .mergeRange(CellRange.create(3, 2, 4, 2))
        .mergeRange(CellRange.create(5, 2, 6, 2))
        .mergeRange(CellRange.create(2, 3, 2, 12))
        .editCell(CellPoint.create(3, 2), (cell) => {
            return cell
                .setValue("merge1")
                .setBackground("#B3E5FC")
                .setTextAlign(TEXT_ALIGN.CENTER);
        })
        .editCell(CellPoint.create(5, 2), (cell) => {
            return cell
                .setValue("merge2")
                .setBackground("#A5D6A7")
                .setTextAlign(TEXT_ALIGN.CENTER);
        })
        .editCell(CellPoint.create(2, 3), (cell) => {
            return cell
                .setValue("merge3")
                .setBackground("#FFCC80")
                .setTextAlign(TEXT_ALIGN.CENTER);
        });

    return sheet;
}

export class EditCell extends React.Component<{}, {}>{
    render() {
        const sheet = createSheet();
        return (
            <GridView className="edit-cell" sheet={sheet} />
        );
    }
};
