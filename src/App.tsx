import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { MyButton } from "src/components/MyButton";
// import { DummyComponent1 } from "src/components/DummyComponent1";
// import { DummyComponent2 } from "src/components/dummy-components/DummyComponent2";
// import { DummyComponent3 } from "src/components/dummy-components/DummyComponent3";
// import { DummyComponent4 } from "src/components/DummyComponent4";
import {
  Button,
  Label,
  Input,
  TraditionalButton,
  MiniatureLibraryButton,
} from "../";

function App() {
  return (
    <>
      {/* <MyButton onClick={() => alert("I am a re-usable button")}>
        Click Me
      </MyButton>
      <hr />
      <DummyComponent1 />
      <hr />
      <DummyComponent2 />
      <hr />
      <DummyComponent3 />
      <hr />
      <DummyComponent4 /> */}
      <Button value={"Hello"} onClick={() => alert("Vikrant is awesome!")}>
        Hello
      </Button>
      <Label>Convocation</Label>
      <Input type="text" placeholder="type here" />
      {/* <CustomButton onClick={() => alert("This CustomButtom is works!")}>
        Custom Button hai ye
      </CustomButton> */}
      <TraditionalButton>Ye Traditional Button hai</TraditionalButton>
      <MiniatureLibraryButton
        onClick={() => alert("This Miniature Library Button works!")}
      >
        Ye hai Miniature Library Button
      </MiniatureLibraryButton>
    </>
  );
}

export default App;
