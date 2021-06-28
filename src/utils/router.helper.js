export const getCurrentPath = () => {
  return window.location.pathname;
};

export const isCurrentPath = (path) => {
  return window.location.pathname === path;
};
