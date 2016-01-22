import * as React from "react";
import {
    GridView,
    Sheet,
    CellPoint,
    CellRange,
    BORDER_POSITION,
    Border
} from "react-gridview";

function createSheet() {
    // Sheet is an Immutable Record
    let sheet = Sheet.create();

    sheet = sheet
        .editBorders(CellRange.create(2, 2, 2, 12), BORDER_POSITION.LEFT, 
            (border) => {
                return border
                    .setWeight(2)
                    .setColor("#333");
            })
        .editBorders(CellRange.create(6, 2, 6, 12), BORDER_POSITION.RIGHT,
            (border) => {
                return border
                    .setWeight(2)
                    .setColor("#333");
            })
        .editBorders(CellRange.create(2, 2, 6, 2), BORDER_POSITION.TOP,
            (border) => {
                return border
                    .setWeight(2)
                    .setColor("#333");
            })
        .editBorders(CellRange.create(2, 12, 6, 12), BORDER_POSITION.BOTTOM,
            (border) => {
                return border
                    .setWeight(2)
                    .setColor("#333");
            })
        .editBorders(CellRange.create(2, 2, 6, 2), BORDER_POSITION.BOTTOM,
            (border) => {
                return border
                    .setWeight(1)
                    .setColors(["#333", "#FFF", "#333"]);
            })
        .editBorders(CellRange.create(2, 3, 6, 11), BORDER_POSITION.BOTTOM,
            (border) => {
                return border
                    .setWeight(1)
                    .setColor("#333")
                    .setDash([2, 2]);
            });

    return sheet;
}

export class EditBorder extends React.Component<{}, {}>{
    render() {
        const sheet = createSheet();
        return (
            <GridView className="edit-cell" sheet={sheet} />
        );
    }
};
