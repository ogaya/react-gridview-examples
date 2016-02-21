import * as React from "react";
import {
    GridView,
    Sheet,
    CellPoint,
    CellRange,
    TEXT_ALIGN
} from "react-gridview";

const CALC_COLOR = "#DCEDC8";
const DATA_COLOR = "#FFF9C4";

function createSheet() {
    let sheet = Sheet.create();
    sheet = sheet
        .editCell(CellPoint.create(2, 2), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setText("a");
        })
        .editCell(CellPoint.create(3, 2), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setText("b");
        })
        .editCell(CellPoint.create(4, 2), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setText("(a+b)*2");
        })
        .editCell(CellPoint.create(1, 13), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setText("SUM");
        })
        .editCell(CellPoint.create(1, 14), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setText("AVG");
        });

    const range = CellRange.create(CellPoint.create(2, 3), CellPoint.create(3, 12));
    sheet = sheet.editCells(range, (cell, cellPoint) => {
        return cell
            .setTextAlign(TEXT_ALIGN.CENTER)
            .setBackground(DATA_COLOR)
            .setText(cellPoint.columnNo + cellPoint.rowNo);
    });

    const calcRange = CellRange.create(CellPoint.create(4, 3), CellPoint.create(4, 12));
    sheet = sheet.editCells(calcRange, (cell, cellPoint) => {
        return cell
            .setTextAlign(TEXT_ALIGN.CENTER)
            .setBackground(CALC_COLOR)
            .setText("=(B" + cellPoint.rowNo + "+C" + cellPoint.rowNo + ")*2");
    });
    
    sheet = sheet
        .editCell(CellPoint.create(2, 13), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setBackground(CALC_COLOR)
                .setText("=SUM(B3:B12)");
        })
        .editCell(CellPoint.create(2, 14), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setBackground(CALC_COLOR)
                .setText("=AVG(B3:B12)");
        })
        .editCell(CellPoint.create(3, 13), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setBackground(CALC_COLOR)
                .setText("=SUM(C3:C12)");
        })
        .editCell(CellPoint.create(3, 14), (cell) => {
            return cell
                .setTextAlign(TEXT_ALIGN.CENTER)
                .setBackground(CALC_COLOR)
                .setText("=AVG(C3:C12)");
        });
    
    sheet = sheet.setOnChangeCell((prevCell, nextCell) =>{
        if (isNaN(nextCell.value)){
            return prevCell;
        }
        if (isNaN(Number(prevCell.text))){
            return prevCell;
        }
        return nextCell;
    });
    
    return sheet;
}

export class Calculate extends React.Component<{}, {}>{
    render() {
        const sheet = createSheet();
        return (
            <GridView className="calculate" sheet={sheet} />
        );
    }
};
