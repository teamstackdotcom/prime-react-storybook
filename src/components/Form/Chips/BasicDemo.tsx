import React, { useState } from "react";
import { Chips, ChipsProps } from "./Chips";
import { Nullable } from "primereact/ts-helpers";

export const BasicDemo = (args: ChipsProps) => {
  const [value, setValue] = useState<Nullable<string[]>>([]);
  return (
    <div className="card p-fluid">
      <Chips
        {...args}
        value={value as string[]}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
};
