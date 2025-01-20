import React from "react";

interface CardProps {
    title: string;
    description?: string;
    dragItem: boolean;
}

const Card: React.FC<CardProps> = ({ title = "Drag and drop me!", description, dragItem }) => {

    return (
        <div
            style={{
                borderRadius: "8px",
                backgroundColor: "white",
                border: "1px solid #D1D5DB",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                padding: "1.25rem",
                margin: "0.5rem",
                transform: dragItem ? "rotate(6deg)" : "none",
            }}
        >
            <h3 style={{ fontWeight: "bold", fontSize: "1.125rem", marginBottom: "0.25rem" }}>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
