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
      item.classList.add("tab-none");
      item.classList.remove("tab-block")
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active")
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].classList.add("tab-block");
    tabContent[i].classList.remove("tab-none")
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
  });

  // MODAL 
  const modalBtn = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector("[data-close]");

  modalBtn.forEach((btn) => {
    btn.addEventListener("click", openModal)
  })

  function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer)
  };

  function closeModal () {
    modal.classList.add("hide");
    modal.classList.remove("show")
    document.body.style.overflow = "";
  };

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      closeModal();
    }
  });

 const modalTimer = setTimeout(openModal, 5000); 

function showMyModdalByScroll () {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener("scroll", showMyModdalByScroll)
  }
};
window.addEventListener("scroll", showMyModdalByScroll)
});
