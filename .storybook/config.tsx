import { configure, addDecorator, addParameters } from '@storybook/react';
import React from "react";
import { withInfo } from '@storybook/addon-info';
import "../src/styles/index.scss"

const styles: React.CSSProperties = {
    padding: '20px 40px'
};
const storyWrapper = (storyFn: any) => (
    <div style={styles}>
        {storyFn()}
    </div>
);

addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({info: {inline: true, header: false}});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);


