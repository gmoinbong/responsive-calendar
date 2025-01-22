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
    // console.log('1 drop', drop, 'dropId', dropId);
    //drop - index (1Часть) а вторая его часть - dropId (2Часть) это высота в списка или же порядок

    return drop === dropId ? <Component {...props} /> : null;
};

export default DropGuide;
