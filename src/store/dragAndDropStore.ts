import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface DragAndDropState {
    draggedTaskId: number | null;
    draggedFromDate: string | null;
    setDraggedTask: (taskId: number, fromDate: Date) => void;
    clearDraggedTask: () => void;
}

export const useDragAndDropStore = create<DragAndDropState>()(
    persist(
        (set) => ({
            draggedTaskId: null,
            draggedFromDate: null,
            setDraggedTask: (taskId, fromDate) =>
                set({
                    draggedTaskId: taskId,
                    draggedFromDate: fromDate.toISOString(),
                }),
            clearDraggedTask: () =>
                set({
                    draggedTaskId: null,
                    draggedFromDate: null,
                }),
        }),
        {
            name: "drag-and-drop-state",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
