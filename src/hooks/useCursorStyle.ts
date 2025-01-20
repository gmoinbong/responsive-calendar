import { useEffect } from "react";

export const useCursorStyle = (dragItem: any, cursorStyle: string = "grabbing", defaultCursor: string = 'default') => {
    useEffect(() => {
        if (dragItem) {
            document.body.style.cursor = cursorStyle;
        } else {
            document.body.style.cursor = defaultCursor;
        }

        return () => {
            document.body.style.cursor = defaultCursor;
        }

    }, [dragItem, cursorStyle, defaultCursor])
}