import "./index.css";
import { Card } from "../cards/Cards";
import { memo } from "react";

const List = memo(({ items, onDelete }) => {
  return (
    <div className="list">
      {items?.map((number, idx) => {
        return <Card key={idx} number={number} onDelete={onDelete} />;
      })}
    </div>
  );
});

export default memo(List);
