import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [message, setmessage] = useState("Hello from parent");
  const handlechildClick = () => {
    setmessage("Message updated by child");
  };

  return (
    <>
      <h3>Parent-Child Prop Handling Component -Click Button</h3>
      <p>{message}</p>
      {/* handlechildClick is the prop send to child */}
      <ChildComponent onButtonClick={handlechildClick} />
    </>
  );
}

export default ParentComponent;
