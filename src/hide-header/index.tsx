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
    return Sheet
        .create()
        .editColumnHeader((columnHeader)=>{
            return columnHeader.setVisible(false);
        })
        .editRowHeader((rowHeader)=>{
            return rowHeader.setVisible(false);
        });
}

export class HideHeader extends React.Component<{}, {}>{
    render() {
        const sheet = createSheet();
        return (
            <GridView className="hide-header" sheet={sheet} />
        );
    }
};
