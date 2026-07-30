import React from "react";
import { RiNotification4Fill } from "@remixicon/react";

const App = () =>{
  return (
  <nav>
    <div className="nav1">
      <img src="https://i.pinimg.com/736x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg" />
      <h4>Apple <br /> coding school</h4>
    </div>

    <div className="nav2">
      <h4>Home</h4>
      <h4>Courses</h4>
      <h4>Cohort 2.0</h4>
      <h4>Request Callback Classroom</h4>
      <h4></h4>
      <h4><i> <RiNotification4Fill /></i></h4>
      <img src="https://i.pinimg.com/736x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg" />

    </div>
  </nav>
  )
}
export default App