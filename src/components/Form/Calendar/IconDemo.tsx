// @ts-nocheck
import React, { useState } from "react";
import { Calendar } from "./Calendar";
import { CalendarProps } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";

export const IconDemo = (args: CalendarProps) => {
  const [date, setDate] = useState<Nullable<Date>>(null);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="buttondisplay" className="font-bold block mb-2">
          Icon Display
        </label>

        <Calendar
          {...args}
          value={date}
          onChange={(e) => setDate(e.value as Nullable<Date>)}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="buttondisplay" className="font-bold block mb-2">
          Icon Time Only Display
        </label>

        <Calendar
          {...args}
          value={date}
          onChange={(e) => setDate(e.value as Nullable<Date>)}
          timeOnly
          icon={() => <i className="pi pi-clock" />}
        />
      </div>
    </div>
  );
};
