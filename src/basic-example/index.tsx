import * as React from "react";
import {GridView} from "react-gridview";

import "./index.css";

export class BasicExample extends React.Component<{}, {}>{
    render() {
        return (
            <GridView className="basic-example" />
        );
    }
};
