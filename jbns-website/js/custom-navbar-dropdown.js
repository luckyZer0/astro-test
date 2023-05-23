// // Create function to select elements
// const selectElement = (element) => document.querySelector(element);

// // Open and close nav on click
// selectElement(".menu-icons").addEventListener("click", () => {
//   selectElement("nav").classList.toggle("active");
// });
// // Get all the sub-menu items inside the nav-list
// const subMenuItems = document.querySelectorAll(".sub-menu .sub-menu");

// // Variable to store the currently active sub-menu item
// let activeSubMenu = null;

// // Get the nav-list element
// const navList = selectElement(".nav-list");

// // Variable to store the currently active item
// let activeItem = null;


// // Add click event listener to the nav-list
// navList.addEventListener("click", (event) => {
//   event.stopPropagation(); // Prevent event from bubbling up to navList
//   const listItem = event.target.closest("li");

  

//   // Check if a list item was clicked
//   if (listItem) {
//     // Check if the clicked item is already active
//     const isSameItem = listItem === activeItem;

//     // Check if there is an active item
//     if (activeItem !== null) {
//       // Remove the active class from the previous item
//       activeItem.classList.remove("active");

//       // If the clicked item is the same as the active item, reset the activeItem variable and return

//       if (isSameItem) {
//         activeItem = null;
//         return;
//       }
//     }

//     // Toggle the active class on the clicked list item
//     listItem.classList.add("active");

//     // Set the clicked item as the new active item
//     activeItem = listItem;
//   }
// });

// // Add click event listener to sub-menu item
// subMenuItems.addEventListener("click", (event) => {
//   if (event.target.closest(".sub-menu .sub-menu")) {
//     return; // Do not execute the rest of the function
//   }
//   // Check if there is an active sub-menu item
//   if (activeSubMenu !== null) {
//     // Remove the active class from the previous sub-menu item
//     activeSubMenu.classList.remove("active");

//     // If the clicked sub-menu item is the same as the active sub-menu item, reset the activeSubMenu variable and return
//     if (item === activeSubMenu) {
//       activeSubMenu = null;
//       return;
//     }
//   }

//   // Toggle the active class on the clicked sub-menu item
//   subMenuItems.classList.add("active");

//   // Add the active class to the parent li element of the clicked sub-menu item
//   subMenuItems.closest("li").classList.add("active");

//   // Set the clicked sub-menu item as the new active sub-menu item
//   activeSubMenu = subMenuItems;
// });

//////////////////////////////////////////////////

// // Create function to select elements
// const selectElement = (element) => document.querySelector(element);

// // Open and close nav on click
// selectElement(".menu-icons").addEventListener("click", () => {
//   selectElement("nav").classList.toggle("active");
// });

// // Get all the sub-menu items inside the nav-list
// const subMenuItems = document.querySelectorAll(".sub-menu .sub-menu");

// // Get the nav-list element
// const navList = selectElement(".nav-list");

// // Add click event listener to the nav-list
// navList.addEventListener("click", (event) => {
//   // event.stopPropagation(); // Prevent event from bubbling up to navList
//   const listItem = event.target.closest("li");
//   listItem.classList.toggle("active");
// });

// // Add click event listener to sub-menu items
// subMenuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });


// Create function to select elements
const selectElement = (element) => document.querySelector(element);

// Open and close nav on click
selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});

// Get the nav-list element
const navList = document.querySelector(".nav-list");

// Add click event listener to the nav-list
navList.addEventListener("click", (event) => {
  const listItem = event.target.closest("li");

  if (listItem) {
    const isNested = listItem.closest(".sub-menu");
    const isActive = listItem.classList.contains("active");

    if (!isNested) {
      // Remove "active" class from all li items
      const allListItems = navList.querySelectorAll("li");
      allListItems.forEach((item) => {
        item.classList.remove("active");
      });
    }

    if (isNested) {
      if (isActive) {
        // Remove "active" class from the clicked nested li item
        listItem.classList.remove("active");
      } else {
        // Remove "active" class from all nested li items
        const nestedItems = listItem.closest(".sub-menu").querySelectorAll("li");
        nestedItems.forEach((item) => {
          item.classList.remove("active");
        });

        // Add "active" class to the clicked nested li item
        listItem.classList.add("active");

        // Add "active" class to its parent li item
        const parentItem = listItem.closest("li");
        parentItem.classList.add("active");
      }
    } else {
      // Add "active" class to the clicked li item if it wasn't already active
      if (!isActive) {
        listItem.classList.add("active");
      }
    }
  }
});

