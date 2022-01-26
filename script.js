const loading = document.getElementById("loading-screen");
const container = document.getElementById("container");
container.style.display = "none";

window.onload = () => {
  loading.style.display = "none";
  container.style.display = "block";

  const inputDestination=document.getElementById('inputDestination');

  fetch("https://www.marefiale.com/api/web/allDestinations", {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => viewSearchResult(res))
      .catch((e) => console.log("error" + e));


  //   setTimeout(function () {
  //     loading.style.display = "none";
  //     container.style.display = "block";
  //   }, 1500);
};

/*-------------------Sidebar onclick function starts here------------------*/

var toggle = false;
const menu = document.querySelector(".menu");
const menubar = document.querySelector(".menu-bar");
const body = document.getElementById("body");
const transparent = document.getElementById("transparent-background");
const menu_icons1 = document.querySelector(".menu-icons1");
const menu_icons2 = document.querySelector(".menu-icons2");
const menu_icons3 = document.querySelector(".menu-icons3");
const nav_logo = document.getElementById("nav-logo");
const sidebarOff = () => {
  menu.classList.remove("active");
  menubar.classList.remove("active");
  transparent.style.visibility = "hidden";
  menu_icons1.classList.toggle("active");
  menu_icons2.classList.toggle("active");
  menu_icons3.classList.toggle("active");
  nav_logo.style.visibility = "visible";
};
const sidebarToggle = () => {
  if (!menu.classList.contains("active")) {
    transparent.style.visibility = "visible";
    nav_logo.style.visibility = "hidden";
  } else {
    transparent.style.visibility = "hidden";
    nav_logo.style.visibility = "visible";
  }
  menu.classList.toggle("active");
  menubar.classList.toggle("active");
  menu_icons1.classList.toggle("active");
  menu_icons2.classList.toggle("active");
  menu_icons3.classList.toggle("active");
};

/*-------------------Sidebar onclick fucntion ends here------------------*/

/*-------------------Live search for destination starts here------------------*/


// function showDestinationsList() {
//   // const destinationList = document.getElementById("destinationsList");
//   // destinationList.classList.add("active");
//   fetch("https://www.marefiale.com/api/web/allDestinations", {
//     method: "get",
//   })
//     .then((res) => res.json())
//     .then((res) => viewSearchResultAll(res))
//     .catch((e) => console.log("error" + e));
// }

// function hideDestinationsList() {
//   const destinationList = document.getElementById("destinationsList");
//   destinationList.classList.remove("active");
// }

function search(name) {
  fetchSearchData(name);
}

function fetchSearchData(name) {
  if (name) {
    fetch("https://www.marefiale.com/api/searchByPropOrDest/" + name, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => viewSearchResult(res))
      .catch((e) => console.log("error" + e));
  } else {
    fetch("https://www.marefiale.com/api/web/allDestinations", {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => viewSearchResultAll(res))
      .catch((e) => console.log("error" + e));
  }
}

// function viewSearchResultAll(data) {
//   const destinationList = document.getElementById("destinationsList");

//   destinationList.innerHTML = "";

//   // console.log();
//   if (data.length > 0) {
//     for (let i = 0; i < data.length; i++) {
//       const li = document.createElement("li");
//       li.innerHTML = data[i].desttitle;
//       destinationList.appendChild(li);
//     }
//   } else {
//     console.log("no elel");
//     const li = document.createElement("li");
//     li.innerHTML = "No Result found";
//     destinationList.appendChild(li);
//   }
// }
function viewSearchResult(data) {
  const inputDestination = document.getElementById("inputDestination");

  // inputDestination.innerHTML = "";

  // console.log();
  console.log(data.length);
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const li = new Option(data[i].desttitle, data[i].id);
      // li.innerHTML = data[i].desttitle;
      inputDestination.add(li, undefined);
      // li.addEventListener("click", function () {
      //   alert("it is working");
      // });
    }
  } else {
    const li = document.createElement("li");
    li.innerHTML = "No Result Found";
    destinationList.appendChild(li);
  }
}

/*-------------------Live search for destination ends here------------------*/

/*-------------------Input number of child and rooms------------------*/

const slideNumber = document.querySelector(".slide-number-of-rooms-bg");
const slideNumberContainer = document.querySelector(".slide-number-of-rooms");

const slideNumberOfRooms = () => {
  slideNumber.classList.add("active");
  slideNumberContainer.classList.add("slide-active");
};

if (slideNumber) {
  slideNumber.addEventListener("click", (e) => {
    slideNumber.classList.remove("active");
    slideNumberContainer.classList.remove("slide-active");
    e.stopPropagation();
  });

  slideNumberContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

const roomInput = document.getElementById("roomsInput");
const adultsInput = document.getElementById("adultsInput");
const childInput = document.getElementById("childInput");
const noOfRooms = document.querySelector(".noOfRooms");
const noOfAdults = document.querySelector(".noOfAdults");
const noOfChild = document.querySelector(".noOfChild");
const noOfRoomsTop = document.querySelector(".noOfRoomsTop");
const noOfAdultsTop = document.querySelector(".noOfAdultsTop");
const noOfChildTop = document.querySelector(".noOfChildTop");

const decRooms = () => {
  var val = roomInput.value;
  val--;
  if (val < 1) {
    val = 1;
  }
  roomInput.value = val;
  noOfRoomsTop.innerHTML = val;
  noOfRooms.innerHTML = val;
};

const incRooms = () => {
  var val = roomInput.value;
  val++;
  roomInput.value = val;
  noOfRooms.innerHTML = val;
  noOfRoomsTop.innerHTML = val;
};

const decAdults = () => {
  var val = adultsInput.value;
  val--;
  if (val < 1) {
    val = 1;
  }
  adultsInput.value = val;
  noOfAdults.innerHTML = val;
  noOfAdultsTop.innerHTML = val;
};

const incAdults = () => {
  var val = adultsInput.value;
  val++;
  adultsInput.value = val;
  noOfAdults.innerHTML = val;
  noOfAdultsTop.innerHTML = val;
};

const decChild = () => {
  var val = childInput.value;
  val--;
  if (val < 1) {
    val = 0;
  }
  childInput.value = val;
  noOfChild.innerHTML = val;
  noOfChildTop.innerHTML = val;
};

const incChild = () => {
  var val = childInput.value;
  val++;
  childInput.value = val;
  noOfChild.innerHTML = val;
  noOfChildTop.innerHTML = val;
};

const submitBookingDetail = () => {
  slideNumber.classList.remove("active");
};
/*-------------------Input number of child and rooms------------------*/

// Date Range picker
/*-------------------Date range picker starts here------------------*/

var today = new Date();
var todate =
  ("0" + today.getDate()).slice(-2) +
  "/" +
  ("0" + (today.getMonth() + 1)).slice(-2) +
  "/" +
  today.getFullYear();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var tomorrowDate =
  ("0" + tomorrow.getDate()).slice(-2) +
  "/" +
  ("0" + (tomorrow.getMonth() + 1)).slice(-2) +
  "/" +
  tomorrow.getFullYear();

$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "center",
      minDate: todate,
      startDate: todate,
      endDate: tomorrowDate,
      applyButtonClasses: "applyButtonClasses",
      cancelButtonClasses: "cancelButtonClasses",
      locale: {
        format: "DD, MMM",
      },
    },
    function (start, end, label) {
      $('input[name="daterange"]').val("something");
      console.log(
        "A new date selection was made: " +
          start.format("DD, MMM") +
          " to " +
          end.format("DD, MMM")
      );
    }
  );
});

/*----------------Date range picker ends here------------------------*/

/*---------------Swipperjs starts here------------------*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 5,
  },
  speed: 3000,
  observer: true,
  observeParents: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
});

/*---------------Swipperjs ends here------------------*/

/*---------------2nd page starts here------------------*/

const showSearchParams = document.querySelector(".searchParams");
const searchBarBgPage2 = document.querySelector(".searchBarBgPage2");
const searchBar = document.getElementById("searchBar");

if (showSearchParams && searchBarBgPage2) {
  showSearchParams.addEventListener("click", (e) => {
    searchBarBgPage2.classList.toggle("active");
    // console.log(e);
  });

  searchBar.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  searchBarBgPage2.addEventListener("click", () => {
    searchBarBgPage2.classList.remove("active");
    searchBar.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}

const sortSlide = document.getElementById("sort-slide");
const sortSlideChild = document.querySelector(".sort-bar");

if (sortSlide) {
  sortSlide.addEventListener("click", () => {
    sortSlide.classList.toggle("active");
    sortSlideChild.classList.toggle("active");
  });
}

const slideSort = () => {
  // console.log(sortSlideChild);
  sortSlide.classList.toggle("active");
  sortSlideChild.classList.toggle("active");
};

const priceSlide = document.getElementById("price-slide");
const priceSlideChild = document.querySelector(".price-bar");

if (priceSlide) {
  priceSlide.addEventListener("click", () => {
    priceSlide.classList.toggle("active");
    priceSlideChild.classList.toggle("active");
  });
}

const slidePrice = () => {
  // console.log(priceSlideChild);
  priceSlide.classList.toggle("active");
  priceSlideChild.classList.toggle("active");
};

const localitySlide = document.getElementById("locality-slide");
const localitySlideChild = document.querySelector(".locality-bar");

if (localitySlide) {
  localitySlide.addEventListener("click", () => {
    localitySlide.classList.toggle("active");
    localitySlideChild.classList.toggle("active");
  });
}

const slideLocality = () => {
  // console.log(localitySlideChild);
  localitySlide.classList.toggle("active");
  localitySlideChild.classList.toggle("active");
};

/*---------------2nd page ends here------------------*/

/*---------------3rd page starts here------------------*/

var hotelMapContainer = document.querySelector(".hotelMapContainer");
var mapIframe = document.querySelector(".mapIframe");
if (hotelMapContainer && mapIframe) {
  hotelMapContainer.addEventListener("click", () => {
    hotelMapContainer.classList.toggle("active");
    mapIframe.classList.toggle("active");
  });
}

/*---------------3rd page ends here------------------*/
