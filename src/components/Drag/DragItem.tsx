import React, { useContext } from 'react';
import { DragContext } from './Drag';

type Props = {
    as?: React.ElementType;
    dragId: any;
    dragType: any;
    children?: React.ReactNode
};

const DragItem: React.FC<Props> = ({ as: Component = 'div', dragId, dragType, children, ...props }) => {
    const context = useContext(DragContext)

    if (!context) {
        throw new Error('Drag item must be used within a DragProvider')
    }

    const { draggable, dragStart, drag, dragEnd } = context

    return (
        <Component
            {...props}
            draggable={draggable}
            onDragStart={(e: DragEvent) => dragStart(e, dragId, dragType)}
            onDrag={(e: DragEvent) => drag(e)}
            onDragEnd={dragEnd}
        >
            {children}
        </Component>
    );
};

export default DragItem;