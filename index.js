var isModalOpen = true;

/* Toggles sidebar on smaller screens */
function toggleSideBar() {
  let sidebar = document.querySelector(".sidebar");
  isModalOpen ? sidebar.classList.add("show-sidebar") : sidebar.classList.remove("show-sidebar");
  isModalOpen = !isModalOpen;
}