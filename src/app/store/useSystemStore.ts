'use client'
import { create } from 'zustand';

interface SystemState {
   x: string;
   y: string;
   setX: (value: string) => void;
   setY: (value: string) => void;
}

export const useSystemStore = create<SystemState>((set) => ({
   x: '',
   y: '',
   setX: (value) => set({ x: value }),
   setY: (value) => set({ y: value }),
}));