import "./TodoList.css";

export default function TodoList(props) {
  return (
    <form
      className="animate__animated animate__fadeInUp animate__delay-.5s todo-list"
      style={{ display: props.style ? "flex" : "none" }}
    >
      <h1 style={{ fontSize: 25 }}>daily gratitudes</h1>
      <div className="input">
        <label>1. </label>
        <input type="text"></input>
      </div>
      <div className="input">
        <label>2. </label>
        <input type="text"></input>
      </div>
      <div className="input">
        <label>3. </label>
        <input type="text"></input>
      </div>
    </form>
  );
}
