import { ROUTES } from "../constant/app-routes";
import { TAB_MENU } from "../constant/tab-constant";

export const getRouteFor = (menu) => {
  switch (menu) {
    case TAB_MENU.HOMEPAGE:
      return ROUTES.HOMEPAGE;

    case TAB_MENU.GITHUB:
      return ROUTES.GITHUB;

    case TAB_MENU.POKEDEX:
      return ROUTES.POKEDEX;

    case TAB_MENU.RESUME:
      return ROUTES.RESUME;

    default:
      return "";
  }
};

export const getIconFor = (type) => {
  switch (type) {
    case TAB_MENU.HOMEPAGE:
      return "home";

    case TAB_MENU.GITHUB:
      return "github";

    case TAB_MENU.RESUME:
      return "file";

    case TAB_MENU.POKEDEX:
      return "clipboard";

    default:
      return "";
  }
};
