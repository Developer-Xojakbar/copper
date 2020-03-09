import React from 'react';
import Nav from './Nav';
import Form from './Form';
import Inbox from './Inbox';
import MdBanner from './MdBanner';
import CRM from './CRM';

const App = () => {
    return (
        <React.Fragment>
            <Nav />
            <Form />
            <Inbox />
            <MdBanner />
            <CRM />
        </React.Fragment>
    );
};

export default App;