import * as React from "react";
import {GridView, Sheet} from "react-gridview";

interface IState {
    sheet: Sheet;
}

export function download(json, filename) {
    const j = JSON.stringify(json);
    const blob = new Blob([j], { type: "application/json" });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
        return;
    }
    const objectURL = (window.URL || (window as any).webkitURL).createObjectURL(blob);
    const a: any = document.createElement('a');
    const e: any = document.createEvent('MouseEvent');

    a.download = filename;
    a.href = objectURL;

    e.initEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}

export class SaveAndLoad extends React.Component<{}, IState>{

    constructor(props, context) {
        super(props, context);

        this.state = {
            sheet: Sheet.create()
        };
    }

    private onChangeSheet(prevSheet: Sheet, nextSheet: Sheet) {
        this.setState({
            sheet: nextSheet
        });
        return prevSheet;
    }
    
    private onSave(){
        download(this.state.sheet.toMinJS(), "gridview.json");
    }

    private onLoad(e) {
        const file = e.target.files;
        const reader = new FileReader();
        reader.readAsText(file[0]);

        reader.onload = (ev) => {
            const json = JSON.parse(reader.result);
            const sheet = Sheet.fromJS(json);
            this.setState({
                sheet: sheet
            });
        }
    }

    render() {
        return (
            <div>
                <div className="sl-menu">
                    <input type="button" onClick={this.onSave.bind(this)} value="download"/>
                    <input type="file" onChange={this.onLoad.bind(this)}/>
                </div>
                <GridView className="save-and-load" 
                    sheet={this.state.sheet}
                    onChangeSheet={this.onChangeSheet.bind(this)}/>
            </div>
        );
    }
};
