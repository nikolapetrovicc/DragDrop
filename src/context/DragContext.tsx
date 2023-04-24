import { createContext, useState, ReactNode } from "react";

export const DragContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

export const DragContextProvider = ({ children }: Props) => {
  const [dragItem, setDragItem] = useState();
  const [dropIndex, setDropIndex] = useState();

  const value = {
    dragItem,
    setDragItem,
    dropIndex,
    setDropIndex,
  };

  return <DragContext.Provider value={value}>{children}</DragContext.Provider>;
};
