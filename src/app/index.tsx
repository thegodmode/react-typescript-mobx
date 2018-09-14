import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export class HomeRoot extends React.Component<{ dataProvider: TestBussinesClass }, { dataProvider: TestBussinesClass }> {


    constructor(props: any) {
        super(props);

        // setup data provider
        this.state = {
            dataProvider: this.props.dataProvider
        }

    }

    render() {
        return (<h1>Hello Bozho {this.state.dataProvider.message}</h1>)
    }
}

export class TestBussinesClass {

    @observable message = 1;
}


const ROOT = document.getElementById("root");
var bussinessClass = new TestBussinesClass();
(global as any)["SportsMultiViewBlock"] = bussinessClass;

ReactDOM.render(<HomeRoot dataProvider={bussinessClass} />, ROOT);