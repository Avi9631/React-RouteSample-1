import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Input } from "antd";

import CheckboxMenu from "./CheckboxMenu";

export default function App() {
  const onCheckboxChange = selection => {
    console.log(selection);
  };

  return (
    <div className="App">
      <Input.Group compact>
        <CheckboxMenu
          options={[
            "Apple",
            "Pear",
            "Orange",
            "Apple1",
            "Pear1",
            "Orange1",
            "Apple2",
            "Pear2",
            "Orange2",
            "Apple3",
            "Pear3",
            "Orange3",
            "Apple4",
            "Pear4",
            "Orange4",
            "Apple5",
            "Pear5",
            "Orange5",
            "Apple6",
            "Pear6",
            "Orange6",
            "Apple7",
            "Pear7",
            "Orange7"
          ]}
          value={["Apple", "Pear1", "Pear3"]}
          onChange={onCheckboxChange}
        />
        <Input
          style={{ width: "50%" }}
          defaultValue="Xihu District, Hangzhou"
        />
      </Input.Group>
    </div>
  );
}
