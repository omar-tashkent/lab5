import React, { useState, useEffect } from "react";


function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="clock glass-card">{time.toLocaleTimeString()}</div>;
}

function WeeklySchedule() {
  return (
    <div className="glass-card">
      <h2>Weekly Schedule</h2>
      <ul>
        <li>Monday: React Basics</li>
        <li>Tuesday: JSX & Components</li>
        <li>Wednesday: State & Props</li>
        <li>Thursday: Event Handling</li>
        <li>Friday: Project Work</li>
      </ul>
    </div>
  );
}

class Quote extends React.Component {
  render() {
    return (
      <div className="glass-card">
        <h2>Favorite Quote</h2>
        <p>"The best way to learn is by doing." - MukhammadAli Khayotov</p>
      </div>
    );
  }
}

function TodoList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div className="glass-card">
      <h2>To-Do List</h2>
      <input
        className="text-prompt"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addItem} className="button">Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="glass-container">
      <h1 className="title">React Glassmorphism Dashboard</h1>
      <Clock />
      <div className="content-grid">
        <WeeklySchedule />
        <Quote />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
