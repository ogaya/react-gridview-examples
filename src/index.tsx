import * as React from "react";
import * as  ReactDOM from "react-dom";
import {Range} from "immutable";
import "./index.css";

const Nav = require("react-bootstrap").Nav;
const Navbar = require("react-bootstrap").Navbar;
const NavItem = require("react-bootstrap").NavItem;
const NavDropdown = require("react-bootstrap").NavDropdown;
const MenuItem = require("react-bootstrap").MenuItem;

const Grid = require("react-bootstrap").Grid;
const Col = require("react-bootstrap").Col;
const Row = require("react-bootstrap").Row;

const Input = require("react-bootstrap").Input;

const Tab = require("react-bootstrap").Tab;
const Tabs = require("react-bootstrap").Tabs;

import {BasicExample} from "./basic-example";
import "./basic-example/index.css";
const BasicExampleSrc = require("!raw!./basic-example/index");
const BasicExampleCss = require("!raw!./basic-example/index.css");

import {EditCell} from "./edit-cell";
import "./edit-cell/index.css";
const EditCellSrc = require("!raw!./edit-cell/index");
const EditCellCss = require("!raw!./edit-cell/index.css");

import {EditBorder} from "./edit-border";
import "./edit-border/index.css";
const EditBorderSrc = require("!raw!./edit-border/index");
const EditBorderCss = require("!raw!./edit-border/index.css");


interface State {
    hash: string;
}

const BASIC_EXAMPLE_HASH = "#basic-example";
const EDIT_CELL_HASH = "#edit-cell";
const EDIT_BORDER_HASH = "#edit-border";


function pickDemo(hash:string){
    switch(hash){
        case BASIC_EXAMPLE_HASH:
            return <BasicExample/>;
        case EDIT_CELL_HASH:
            return <EditCell/>;
        case EDIT_BORDER_HASH:
            return <EditBorder/>;
        default:
            return <div/>;
    }
}

function pickSrc(hash:string){
    switch(hash){
        case BASIC_EXAMPLE_HASH:
            return BasicExampleSrc;
        case EDIT_CELL_HASH:
            return EditCellSrc;
        case EDIT_BORDER_HASH:
            return EditBorderSrc;
        default:
            return "";
    }
}

function pickCss(hash:string){
    switch(hash){
        case BASIC_EXAMPLE_HASH:
            return BasicExampleCss;
        case EDIT_CELL_HASH:
            return EditCellCss;
        case EDIT_BORDER_HASH:
            return EditBorderCss;
        default:
            return "";
    }
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
        const hash = this.state.hash;
        return (
            <div>
                <Navbar inverse={true} fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-GridView Examples</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="https://github.com/ogaya/react-gridview-examples">GitHub</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid className="page">
                    <Col xs={12} md={2}>
                        <Nav bsStyle="pills" stacked activeKey={hash}>
                            <NavItem eventKey={BASIC_EXAMPLE_HASH} href={BASIC_EXAMPLE_HASH}>Basic Example</NavItem>
                            <NavItem eventKey={EDIT_CELL_HASH} href={EDIT_CELL_HASH}>Edit Cell</NavItem>
                            <NavItem eventKey={EDIT_BORDER_HASH} href={EDIT_BORDER_HASH}>Edit border</NavItem>
                            <NavItem eventKey={"#hide-header"} href="#hide-header">Hide Header</NavItem>
                        </Nav>
                    </Col>
                    <Col xs={12} md={8}>
                        <Tabs defaultActiveKey={1} animation={false}>
                            <Tab tabClassName="ctab" className="tab-com" title="demo" eventKey={1}>
                                {pickDemo(hash)}
                            </Tab>
                            <Tab tabClassName="ctab" className="tab-com"  title=".tsx" eventKey={2}>
                                <textarea className="code-text" readOnly={true} value={pickSrc(hash)}/>
                            </Tab>
                            <Tab tabClassName="ctab" className="tab-com"  title=".css" eventKey={3}>
                                <textarea className="code-text" readOnly={true} value={pickCss(hash)}/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Grid>
            </div>
        );
    }
};

ReactDOM.render(
    <Main />,
    document.getElementById("main")
);
