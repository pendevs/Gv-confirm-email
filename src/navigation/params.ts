export const PAGES_PATH = {
  LANDING: "/",
  SIGN_UP: "/sign-up",
  DASHBOARD: "/dashboard",
  MY_APPOINTMENTS: "/my-appointments",
  MY_PETS: "/my-pets",
  MY_PETS_NEW: "/my-pets/new",
  MY_PETS_DETAIL: "/my-pets/:id/profile",
  MY_PETS_EDIT: "/my-pets/:id/edit",
  MY_HOSPITALS: "/my-hospitals",
  MY_PRESCRIPTIONS: "/my-prescriptions",
  SETTINGS: "/settings",
};

export const STEP_NAME_PATH = {
  USER: "user",
  PETS: "pet",
  NEW_PET: "add-pet",
};

export const BREADCRUMBS: {
  [key: string]: string,
} = {
  [PAGES_PATH.DASHBOARD]: "Home",
  [PAGES_PATH.MY_APPOINTMENTS]: "My Appointments",
  [PAGES_PATH.MY_PETS]: "My Pets",
  [PAGES_PATH.MY_PETS_NEW]: "Add a Pet",
  [PAGES_PATH.MY_PETS_DETAIL]: "Pet Profile",
  [PAGES_PATH.MY_PETS_EDIT]: "Edit a Pet",
  [PAGES_PATH.MY_HOSPITALS]: "My Hospitals",
  [PAGES_PATH.MY_PRESCRIPTIONS]: "My Prescriptions",
  [PAGES_PATH.SETTINGS]: "Settings",
};
