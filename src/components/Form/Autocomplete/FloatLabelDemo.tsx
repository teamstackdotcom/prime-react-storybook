import React, { useState } from "react";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
  AutoCompleteProps,
} from "primereact/autocomplete";

export const FloatLabelDemo = (args: AutoCompleteProps) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  return (
    <div className="card flex justify-content-center">
      <span className="p-float-label">
        <AutoComplete
          {...args}
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
        />
        <label htmlFor={args.inputId}>Float Label</label>
      </span>
    </div>
  );
};
