// import { useState } from "react";

import "./App.css";
// import ListPerson from "./ListPerson/ListPerson";
// import Calendar from "./Calendar/Calendar";
import TodayWaterList from "./HomePage/TodayWaterList/TodayWaterList";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      {/* <Calendar /> */}
      <TodayWaterList />
      {/* <h1>List Person</h1>
      <ListPerson /> */}
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count: {count}
      </button> */}
    </>
  );
}

export default App;
