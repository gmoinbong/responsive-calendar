import React, { useContext } from 'react';
import DropZone from './DropZone';
import { DragContext } from './Drag';

type DropZonesProps = {
    dropType: any;
    prevId: any;
    nextId: any;
    split?: 'x' | 'y';
    remember?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    [key: string]: any;
};

const DropZones: React.FC<DropZonesProps> = ({
    dropType,
    prevId,
    nextId,
    split = 'y',
    remember,
    children,
    ...props
}) => {

    const context = useContext(DragContext)

    if (!context) {
        throw new Error('Drag item must be used within a DragProvider')
    }

    const { dragType, isDragging } = context

    return (
        <div style={{ position: 'relative' }} {...props}>
            {children}
            {dragType === dropType && isDragging && (
                <div
                    style={{
                        position: 'absolute',
                        inset: '0px',
                        display: 'flex',
                        flexDirection: split === 'x' ? 'row' : 'column',
                    }}
                >
                    <DropZone
                        dropId={prevId}
                        style={{ width: '100%', height: '100%' }}
                        dropType={dropType}
                        remember={remember}
                    />
                    <DropZone
                        dropId={nextId}
                        style={{ width: '100%', height: '100%' }}
                        dropType={dropType}
                        remember={remember}
                    />
                </div>
            )}
        </div>
    );
};

export default DropZones;
