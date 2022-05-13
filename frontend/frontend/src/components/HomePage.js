import { useEffect, useState } from "react";
import PlaygroundAPI from "../api/PlaygroundAPI";

export function HomePage() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    loadStates();
  }, []);

  const loadStates = async () => {
    const data = await PlaygroundAPI.getAllStates();
    setStates(data ? data : []);
  };

  const renderStates = () => {
    return states.map((state, index) => {
      return (
        <h2 key={index}>
          {state.name}: {state.been_to ? "Been" : "Not Been"}
        </h2>
      );
    });
  };
  return (
    <div>
      <h1>Home Page</h1>
      {renderStates()}
    </div>
  );
}
