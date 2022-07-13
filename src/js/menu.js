export const menuInit = () => {
  const menu = document.getElementById("menu");
  yoyaba.toggleMenu = () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("w-full");
    menu.classList.toggle("h-screen");
  };
};
