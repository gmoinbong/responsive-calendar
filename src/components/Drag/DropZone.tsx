import React, { useContext } from 'react';
import { DragContext } from './Drag';

type Props = {
    as?: React.ElementType;
    dropId?: any;
    dropType?: any;
    style: any;
    children?: React.ReactNode
};

const DropZone: React.FC<Props> = ({ as: Component = 'div', dropId, dropType, style, children, ...props }) => {
    const context = useContext(DragContext)

    if (!context) {
        throw new Error('Drag item must be used within a DragProvider')
    }

    const { dragItem, dragType, setDrop, drop, onDrop, } = context

    const handleDragOver = (e: React.DragEvent) => {
        if (e.preventDefault) {
            e.preventDefault()
        }
        return false
    }

    return (
        <Component
            {...props}
            onDragEnter={(e: React.DragEvent) => dragItem && dropType === dragType && setDrop(dropId)}
            onDragOver={handleDragOver}
            onDrop={onDrop}
            style={{ position: "relative", ...style }}>
            {children}
            {drop === dropId && <div style={{ position: "absolute", inset: "0px" }}></div>}
        </Component>
    );
};

export default DropZone;