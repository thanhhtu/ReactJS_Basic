import React from 'react';

const jsx = () => {
    const element1 = <div id="root">Hello World</div>; //JSX
    const ReElement1 = React.createElement('div', {id: 'root'}, 'Hello World'); //React elements
    
    const element2 = (<div>
        <span>Hello</span> <span>World</span>
    </div>);
    const ReElement2 = React.createElement('div', 
        null, 
        React.createElement('span', null, 'Hello'),
        ' ',
        React.createElement('span', null, 'World')
    );

    return ;
};

export default jsx;