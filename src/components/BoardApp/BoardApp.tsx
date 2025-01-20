import React from "react";
import Drag from "../Drag";
import List from "./List";
import Card from "./Card";
import DropZones from "../Drag/DropZones";
import DropZone from "../Drag/DropZone";
import DropGuide from "../Drag/DropGuide";
import DragItem from "../Drag/DragItem";
import { useTaskStore } from "../../store/taskStore";

function BoardApp() {
    const { tasks } = useTaskStore();
    const [data, setData] = React.useState(Object.entries(tasks));

    function handleDrop({ dragItem, dragType, drop }) {
        if (dragType === "card") {
            let [newListPosition, newCardPosition] = drop.split("-").map((string) => parseInt(string));
            let newData = structuredClone(data);
            let oldCardPosition;
            let oldListPosition = data.findIndex(([date, cards]) => {
                oldCardPosition = cards.findIndex(card => card.id === dragItem);
                return oldCardPosition >= 0;
            });
            let card = data[oldListPosition][1][oldCardPosition];
            if (newListPosition === oldListPosition && oldCardPosition < newCardPosition) {
                newCardPosition--;
            }
            newData[oldListPosition][1].splice(oldCardPosition, 1);
            newData[newListPosition][1].splice(newCardPosition, 0, card);
            setData(newData);
        }
    };

    return (
        <Drag handleDrop={handleDrop}>
            {({ activeItem, activeType, isDragging }) => {
                return (
                    <div style={{ display: 'flex', overflowX: 'scroll', height: '100%' }}>
                        {data.map(([date, cards], listPosition) => {
                            return (
                                <div key={date} style={{ margin: '0 0.5rem' }}>
                                    <List name={date} dragItem={activeItem === date && activeType === "list"}>
                                        {cards.map((card, cardPosition) => (
                                            <DropZones
                                                key={card.id}
                                                prevId={`${listPosition}-${cardPosition}`}
                                                nextId={`${listPosition}-${cardPosition + 1}`}
                                                dropType="card"
                                                remember={true}
                                            >
                                                <DropGuide
                                                    dropId={`${listPosition}-${cardPosition}`}
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#E5E7EB',
                                                        height: '6rem',
                                                        margin: '0.5rem',
                                                    }}
                                                    dropType="card"
                                                />
                                                <DragItem
                                                    dragId={card.id}
                                                    style={{
                                                        cursor: 'pointer',
                                                        visibility: activeItem === card.id && activeType === "card" && isDragging ? 'hidden' : 'visible',
                                                        transform: activeItem === card.id && activeType === "card" && isDragging ? 'translateX(0)' : 'none',
                                                    }}
                                                    dragType="card"
                                                >
                                                    <Card title={card.description} dragItem={activeItem === card.id && activeType === "card"} />
                                                </DragItem>
                                            </DropZones>
                                        ))}
                                        <DropZone
                                            dropId={`${listPosition}-${cards.length}`}
                                            dropType="card"
                                            remember={true}
                                            style={{
                                                borderRadius: '8px',
                                                backgroundColor: cards.length === 0 ? '#E5E7EB' : 'transparent',
                                                height: '6rem',
                                                margin: '0.5rem',
                                            }}
                                        >
                                            <DropGuide
                                                dropId={`${listPosition}-${cards.length}`}
                                                style={{
                                                    borderRadius: '8px',
                                                    backgroundColor: '#E5E7EB',
                                                    height: '6rem',
                                                    margin: '0.5rem',
                                                }}
                                                dropType="card"
                                            />
                                        </DropZone>
                                    </List>
                                </div>
                            );
                        })}
                    </div>
                );
            }}
        </Drag>
    );
};

export default BoardApp;
