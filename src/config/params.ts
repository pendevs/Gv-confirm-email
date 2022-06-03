import { STEP_NAME_PATH } from "../navigation/params";

export const APP_NAME = "GoodVets";
export const NAVBAR_HEIGHT = 48;
export const DRAWER_WIDTH = 260;
export const SHOW_STEPS_SIZE = 5;
export const SHOW_MAX_YEARS = 100;
export const MONTHS_OPTIONS = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

export const STEPS_MAP: { step: number, stepName: string }[] = [
  {
    step: 0,
    stepName: STEP_NAME_PATH.USER,
  },
  {
    step: 1,
    stepName: STEP_NAME_PATH.PETS,
  },
  {
    step: 1,
    stepName: STEP_NAME_PATH.NEW_PET,
  },
];
