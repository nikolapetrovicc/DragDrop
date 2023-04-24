import React, { useContext, ReactNode } from "react";
import { DragContext } from "../context/DragContext";
// import "./styles.css";

type Props = {
  items: any[];
  onChange: (newItems: any[]) => void;
  children: ReactNode;
};

const DragArea = ({ items, onChange, children }: Props) => {
  const { dragItem, dropIndex } = useContext(DragContext);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    const sortUsers = [...items];
    const item = sortUsers[dragItem];
    sortUsers.splice(dragItem, 1);
    sortUsers.splice(dropIndex, 0, item);
    onChange(sortUsers);
  };

  return (
    <div>
      <h1 className="title">Drag and drop</h1>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        {children}
      </div>
    </div>
  );
};

export default DragArea;
