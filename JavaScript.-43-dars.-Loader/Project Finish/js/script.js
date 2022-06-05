window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 1000);

  // TABS

  const tabs = document.querySelectorAll(".tabheader__item");
  const tabContent = document.querySelectorAll(".tabcontent");
  const headParents = document.querySelector(".tabheader__items");

  function hideTabContent () {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active")
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active")
  }
  hideTabContent();
  showTabContent();

  headParents.addEventListener("click", (evt) => {
    if (evt.target && evt.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if(evt.target == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })
});
