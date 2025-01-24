export const getStatusColor = (status: string) => {
    switch (status) {
        case "in_progress":
            return "#61bd4f" // Green
        case "done":
            return "#0079bf" // Blue
        case "pending":
            return "#ff9f1a" // Orange
        default:
            return "#dfe1e6"
    }
}