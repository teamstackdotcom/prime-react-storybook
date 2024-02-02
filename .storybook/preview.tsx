import React from "react";
import type { Preview } from "@storybook/react";
import DocTemplate from "./docTemplate.mdx";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import "../src/assets/flag.css";
import { addLocale } from "primereact/api";

addLocale("es", {
  firstDayOfWeek: 1,
  dayNames: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ],
  dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
  monthNames: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],
  monthNamesShort: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ],
  today: "Hoy",
  clear: "Limpiar",
});

const customViewports = {
  mobileSM: {
    name: "Mobile Small",
    styles: {
      width: "320px",
      height: "764px",
    },
  },
  mobileMD: {
    name: "Mobile Medium",
    styles: {
      width: "375px",
      height: "764px",
    },
  },
  mobile: {
    name: "Mobile",
    styles: {
      width: "425px",
      height: "764px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "764px",
    },
  },
  smallScreen: {
    name: "Small Screen",
    styles: {
      width: "1024px",
      height: "764px",
    },
  },
  screen: {
    name: "Screen",
    styles: {
      width: "1440px",
      height: "955px",
    },
  },
  wideScreen: {
    name: "Wide Screen",
    styles: {
      width: "1920px",
      height: "1274px",
    },
  },
  widestScreen: {
    name: "Widest Screen",
    styles: {
      width: "2560px",
      height: "1699px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    tags: ["autodocs"],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocTemplate,
    },
    decorators: [
      (Story) => (
        <PrimeReactProvider>
          <Story />
        </PrimeReactProvider>
      ),
    ],
    viewport: { viewports: customViewports },
  },
};

export default preview;
