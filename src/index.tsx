import * as React from "react";
import * as  ReactDOM from "react-dom";
import {Range} from "immutable";

import "./index.css";

interface State {
    hash: string;
}

class Main extends React.Component<{}, State>{
    state: State = {
        hash: location.hash
    };
    componentDidMount() {
        window.onhashchange = () => {
            this.setState({ hash: location.hash });
        };
    }
    render() {
        return (
            <div>
                sss
            </div>
        );
    }
};

ReactDOM.render(
    <Main />,
    document.getElementById("main")
);
