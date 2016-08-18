/// <reference path="../typings/globals/react/index.d.ts" />
/// <reference path="../typings/globals/react-dom/index.d.ts" />
/// <reference path="../typings/globals/classnames/index.d.ts" />

import * as React from 'react';
import * as ReactDom from 'react-dom';

import Button from '../component/button';

class Test extends React.PureComponent<any, any> {
    render () {
        return (
            <div>
                <Button blue loading >
                    Button
                </Button>
            </div>
        )
    }
}

ReactDom.render(
    <Test />,
    document.getElementById('peng')
)
