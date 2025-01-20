import React from 'react';
import { DragContext } from './Drag';

type DropGuideProps = {
    as?: React.ElementType;
    dropId: any;
    [key: string]: any;
};

const DropGuide: React.FC<DropGuideProps> = ({ as: Component = 'div', dropId, ...props }) => {
    const context = React.useContext(DragContext);

    if (!context) {
        throw new Error('Drag item must be used within a DragProvider')
    }

    const { drop } = context;

    return drop === dropId ? <Component {...props} /> : null;
};

export default DropGuide;
