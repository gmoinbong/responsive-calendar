import { create } from 'zustand';
import { TaskType } from './taskStore';

interface FilterStore {
    filterName: TaskType[];
    setFilterName: (filters: TaskType[]) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
    filterName: [],
    setFilterName: (filters: TaskType[]) => set({ filterName: filters }),
}));
