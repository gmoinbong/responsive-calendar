interface IList {
    name: string;
    dragItem: any;
    children: any;
}

function List({ dragItem, children }: IList) {
    return (
        <div style={{
            borderRadius: '12px',
            backgroundColor: '#F3F4F6',
            padding: '0.5rem',
            margin: '1.25rem 0',
            width: '20rem',
            flexShrink: 0,
            flexGrow: 0,
            boxShadow: dragItem ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
            transform: dragItem ? 'rotate(6deg)' : 'none'
        }}>
            <div style={{ padding: '0.25rem 1.5rem' }}>
                {/* <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{name}</h2> */}
            </div>
            {children}
        </div>
    );
};

export default List