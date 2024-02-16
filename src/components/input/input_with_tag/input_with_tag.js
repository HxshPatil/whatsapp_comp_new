import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "./input_with_tag.css";

export default function Input_with_tag() {
  const [selected, setSelected] = useState([""]);

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>

      <TagsInput
        value={selected}
        onChange={setSelected}
        name="name"
        placeHolder="enter names"
      />
      <em>press enter to add new tag</em>
    </div>
  );
}
