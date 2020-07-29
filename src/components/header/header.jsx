import React from 'react';
import { Frame } from 'frame';

const Header = ({text}) => {
    return (
        <Frame>
            <h1>{text}</h1>
        </Frame>
    );
};

export default Header;