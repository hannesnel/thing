import React from 'react';
import { Filter } from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default { 
    title: 'Filter'
};

storiesOf('Filter', module)
    .addDecorator(withKnobs)
    .add('Filter with text', 
        () => <Filter text="some filter string" />, {
            notes: 'Enabled filter button'
        })
    .add("Filter no text",
        () => <Filter  />, {
            notes: 'Disabled filter button'
        });