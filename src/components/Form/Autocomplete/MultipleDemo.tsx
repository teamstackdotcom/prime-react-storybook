import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
  AutoCompleteProps,
} from "primereact/autocomplete";

interface Country {
  name: string;
  code: string;
}

const COUNTRIES: Country[] = [
  {
    name: "Germany",
    code: "DE",
  },
  {
    name: "USA",
    code: "US",
  },
  {
    name: "Japan",
    code: "JP",
  },
];

export const MultipleDemo = (args: AutoCompleteProps) => {
  const [selectedCountries, setSelectedCountries] = useState<Country | null>(
    null
  );
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = COUNTRIES;
      } else {
        _filteredCountries = COUNTRIES.filter(({ name }) =>
          name.toLowerCase().startsWith(event.query.toLowerCase())
        );
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  return (
    <div className="card p-fluid">
      <AutoComplete
        {...args}
        value={selectedCountries}
        suggestions={filteredCountries}
        completeMethod={search}
        onChange={(e) => setSelectedCountries(e.value)}
      />
    </div>
  );
};
