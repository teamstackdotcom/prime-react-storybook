import React, { useState } from "react";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { RadioButtonProps } from "./RadioButton";

interface Category {
  name: string;
  key: string;
}

export const BasicDemo = (args: RadioButtonProps) => {
  const categories = [
    { name: "Accounting", key: "A" },
    { name: "Marketing", key: "M" },
    { name: "Production", key: "P" },
    { name: "Research", key: "R" },
  ];
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[1]
  );

  return (
    <div className="card flex justify-content-center">
      <div className="flex flex-column gap-3">
        {categories.map((category) => {
          return (
            <div key={category.key} className="flex align-items-center">
              <RadioButton
                {...args}
                inputId={category.key}
                value={category}
                onChange={(e: RadioButtonChangeEvent) =>
                  setSelectedCategory(e.value)
                }
                checked={selectedCategory.key === category.key}
              />
              <label htmlFor={category.key} className="ml-2">
                {category.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
