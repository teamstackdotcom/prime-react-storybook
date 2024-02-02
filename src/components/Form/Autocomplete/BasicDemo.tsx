import {
  AutoCompleteCompleteEvent,
  AutoCompleteProps,
} from "primereact/autocomplete";
import React, { useState } from "react";
import { Autocomplete } from "./Autocomplete";

export const BasicDemo = (args: AutoCompleteProps) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const search = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };
  return (
    <div className="card flex justify-content-center">
      <Autocomplete
        {...args}
        value={value}
        suggestions={items}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
};
