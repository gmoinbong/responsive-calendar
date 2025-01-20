import React, { createContext, Dispatch, useState } from 'react'

import DragItem from './DragItem';
import DropGuide from './DropGuide';
import DropZone from './DropZone';
import DropZones from './DropZones';
import { useCursorStyle } from '../../hooks/useCursorStyle';

type Props = {
    draggable: boolean;
    handleDrop: ({ dragItem, dragType, drop }: any) => void;
    children: React.ReactNode
}

type ContextValue = null | {
    draggable: boolean;
    dragItem: any;
    dragType: any;
    isDragging: boolean;
    dragStart: (e: DragEvent, dragId: any, dragType: any) => void;
    drag: (e: DragEvent) => void;
    dragEnd: () => void;
    onDrop: (e: DragEvent) => void;
    drop: boolean;
    setDrop: Dispatch<any>;
}

export const DragContext = createContext<ContextValue>(null);

const Drag: React.FC<Props> = ({ draggable = true, handleDrop, children }) => {
    const [dragItem, setDragItem] = useState<any>(null);
    const [dragType, setDragType] = useState<any>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [drop, setDrop] = useState<any>(null);
    useCursorStyle(dragItem)


    const dragStart = (e: DragEvent, dragId: any, dragType: any) => {
        e.stopPropagation();
        if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = "move";
        }
        setDragItem(dragId);
        dragType && setDragType(dragType)
    }

    const drag = (e: DragEvent) => {
        e.stopPropagation()
        setIsDragging(true)
    }

    const dragEnd = () => {
        setDragItem(null)
        setDragType(null)
        setIsDragging(false)
        setDrop(false)
    }

    const onDrop = (e: DragEvent) => {
        e.preventDefault()
        handleDrop({ dragItem, dragType, drop })
        setDragItem(null)
        setDragType(null)
        setIsDragging(false)
        setDrop(null)
    }

    return (
        <DragContext.Provider value={{ draggable, dragItem, dragType, isDragging, dragStart, drag, dragEnd, onDrop, drop, setDrop, }}>
            {typeof children === 'function'
                ? children({ activeItem: dragItem, activeType: dragType, isDragging }) : children}
        </DragContext.Provider>
    )
}

export default Object.assign(Drag, { DragItem, DropGuide, DropZone, DropZones });