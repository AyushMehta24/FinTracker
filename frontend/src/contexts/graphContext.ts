import { createContext } from "react";
export type GraphContextType = {
    graph: string;
    setGraph: (graph: string) => void;
  };

export const GraphContext = createContext<GraphContextType>({
    graph:'month',
    setGraph:Function
});