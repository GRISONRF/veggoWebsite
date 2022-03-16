
//CODE FOR THE CONTAINER THAT DIDNT WORK!!!!!


// let tabHeader = document.getElementsByClassName("tab-header")[0];
// let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];


// let tabsPane = tabHeader.getElementsByTagName("div");

// for (let i = 0 ; i < tabsPane.length; i++){
//   tabsPane[i].addEventListener("click", function(){
//     tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    
//     tabsPane[i].classList.add("active");
//     tabBody.getElementsByClassName("active")[0].classList.remove("active");
//     tabBody.getElementsByTagName("div")[i].classList.add("active");

//     tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`; 
//   })
// }




//TABS TABS TABS TABS 

const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    //to remove active class from previous tab
    tabs.forEach((tab) => tab.classList.remove("active"))

    tab.classList.add("active");

    //to show content according to tab selected

    //to hide previous tab content
    contents.forEach((c) => c.classList.remove("active"))

    contents[index].classList.add("active");

  });
});