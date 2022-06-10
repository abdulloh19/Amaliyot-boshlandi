window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    // loader.style.opacity = "0";
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
window.addEventListener("scroll", showMyModdalByScroll);

const deadLine = "2022-12-31";

// function getTime (endTime) {
//   const total = Date.parse(endTime) - Date.parse(new Date()),
//       days = Math.floor(total / (1000 * 60 * 60 * 24)),
//       hours = Math.floor((total / (1000 * 60 * 60)) % 24),
//       minutes = Math.floor((total / 1000 / 60) % 60),
//       seconds = Math.floor((total / 1000) % 60);
//   return {
//     total: total,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// function getZero (num) {
//   if (num >= 0 && num < 10) {
//     return "0" + num
//   } else {
//     return num;
//   }
// }

// function setClock (selector, endTime) {
//   const timer = document.querySelector(selector),
//   days = timer.querySelector("#days"),
//   hours = timer.querySelector("#hours"),
//   minutes = timer.querySelector("#minutes"), 
//   seconds = timer.querySelector("#seconds"),
//   timeInterval = setInterval(updateClock, 1000);

//   updateClock();

//   function updateClock() {
//     const time = getTime(endTime);
//     days.innerHTML = getZero(time.days);
//     hours.innerHTML = getZero(time.hours);
//     minutes.innerHTML = getZero(time.minutes);
//     seconds.innerHTML = getZero(time.seconds);
//     if (time.total <= 0) {
//       clearInterval(timeInterval)
//     }
//   }
// }
// setClock(".timer", deadLine);

function getTime (endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date()),
  days = Math.floor(total / (1000 * 60 * 60 * 24)),
  hours = Math.floor((total / (1000 * 60 * 60) % 24)),
  minutes = Math.floor((total / 1000 / 60) % 60),
  seconds = Math.floor((total / 1000) % 60);
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

function getZero (num) {
  if (num >= 0 && num <= 10) {
    return "0" + num;
  } else {
    return num;
  }
};

function setClock (selector, endtime) {
  const timer = document.querySelector(selector),
  days = timer.querySelector("#days"),
  hours = timer.querySelector("#hours"),
  minutes = timer.querySelector("#minutes"),
  seconds = timer.querySelector("#seconds"),
  timeInterval = setInterval(updateClock, 1000);

  updateClock()

  function updateClock() {
    const time = getTime(endtime);
    days.innerHTML = getZero(time.days);
    hours.innerHTML = getZero(time.hours);
    minutes.innerHTML = getZero(time.minutes);
    seconds.innerHTML = getZero(time.seconds);
    if (time.total <= 0) {
      clearInterval(timeInterval)
    }
  }
}
setClock(".timer", deadLine);

// CLASS

class CarCard {
  constructor(src, alt, title, descr, price, parentSelector, ...classess) {
    this.src = src
    this.alt = alt
    this.title = title
    this.price = price
    this.parent = document.querySelector(parentSelector)
    this.transfer = 10.500
    this.changeToUsd()
  }
  changeToUsd() {
    this.price = this.price * this.transfer
  }

  render() {
    const element = document.createElement("div");
     
    element.innerHTML = `
    <div class="menu__item">
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> $</div>
            </div>
    </div>
    `
    this.parent.append(element)
  }
};

  new CarCard(
    "img/tabs/1.jpg",
    "car",
    "2021 Mercedes-Benz C-Class",
    `The 2021 Mercedes-Benz C-Class finishes in the top half of our
    luxury small car rankings. It's powerful and upscale, but it has
    so-so handli...`,
    140,
    ".menu .container"
  ).render()
  new CarCard(
    "img/tabs/2.jpg",
    "car",
    "2021 Mercedes-Benz C-Class",
    `The 2021 Mercedes-Benz C-Class finishes in the top half of our
    luxury small car rankings. It's powerful and upscale, but it has
    so-so handli...`,
    140,
    ".menu .container"
  ).render()
  new CarCard(
    "img/tabs/3.jpg",
    "car",
    "2021 Mercedes-Benz C-Class",
    `The 2021 Mercedes-Benz C-Class finishes in the top half of our
    luxury small car rankings. It's powerful and upscale, but it has
    so-so handli...`,
    140,
    ".menu .container"
  ).render()
});
