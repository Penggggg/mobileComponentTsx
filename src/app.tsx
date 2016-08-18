/// <reference path="../typings/globals/react/index.d.ts" />
/// <reference path="../typings/globals/react-dom/index.d.ts" />
/// <reference path="../typings/globals/classnames/index.d.ts" />

import * as React from 'react';
import * as ReactDom from 'react-dom';

import Button from '../component/button';

class Test extends React.PureComponent<any, any> {
    constructor() {
        super();
        this.state = {
            loading: false
        }
    }
    render () {
        let { loading } = this.state ;
        return (
            <div onClick={()=>{}}>
                <Button  loading={ loading } icon="icon-untitled79"  round large
                    onClick={ (e)=>this.setState({ loading: true }) } ></Button>
                <Button blue icon="icon-untitled83"  round large ></Button>
                <Button green icon="icon-untitled145"  round large ></Button>
                <Button pink icon="icon-untitled53"  round large></Button>
                <Button red icon="icon-untitled32"  round large></Button>
                <Button dark icon="icon-clover1193374easyiconnet" round large ></Button>
            </div>
        )
    }
}

ReactDom.render(
    <Test />,
    document.getElementById('peng')
)
