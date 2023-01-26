import "./index.css";

export const Header = ({ onAdd, onSort }) => {
  return (
    <div className="header">
      <div className="container">
        <button onClick={onAdd}>Add Card</button>
        <button onClick={onSort}>Sort Cards</button>
      </div>
    </div>
  );
};
