import { useContext, ReactNode } from "react";
import { DragContext } from "../context/DragContext";
// import "./styles.css";

type DragItemProps = {
  children: ReactNode;
  note?: any;
};

const DragItem = ({ note, children }: DragItemProps) => {
  const { setDragItem, setDropIndex } = useContext(DragContext);

  return (
    <div
      draggable
      onDragStart={() => setDragItem(note)}
      onDragEnter={() => setDropIndex(note)}
    >
      {children}
    </div>
  );
};

export default DragItem;
