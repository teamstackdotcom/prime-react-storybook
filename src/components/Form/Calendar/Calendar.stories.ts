import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import { IconDemo } from "./IconDemo";

const meta = {
  title: "Components/Form/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    autoFocus: false,
    autoZIndex: true,
    baseZIndex: 0,
    clearButtonClassName: "p-secondary-button",
    dateFormat: "mm/dd/yy",
    disabled: false,
    disabledDates: [],
    disabledDays: [],
    enabledDates: [],
    hideOnDateTimeSelect: false,
    hourFormat: "24",
    iconPos: "right",
    inline: false,
    keepInvalid: false,
    locale: "en",
    maskSlotChar: "_",
    monthNavigator: false,
    numberOfMonths: 1,
    readOnlyInput: false,
    required: false,
    selectOtherMonths: false,
    shortYearCutoff: "+10",
    showButtonBar: false,
    showIcon: false,
    showMillisec: false,
    showMinMaxRange: false,
    showOnFocus: true,
    showOtherMonths: true,
    showSeconds: false,
    showTime: false,
    showWeek: false,
    stepHour: 1,
    stepMillisec: 1,
    stepMinute: 1,
    stepSecond: 1,
    todayButtonClassName: "p-secondary-button",
    touchUI: false,
    view: "date",
    visible: false,
    yearNavigator: false,
    unstyled: false,
    selectionMode: "single",
  },
};

export const Format: Story = {
  args: {
    ...Basic.args,
    dateFormat: "dd.mm.yy",
  },
};

export const Locale: Story = {
  args: {
    ...Basic.args,
    locale: "es",
  },
};

export const Icon: Story = {
  args: {
    ...Basic.args,
    showIcon: true,
  },
  render: IconDemo,
};
