"use strict";

//   /**
//    * This method injects the Page Content
//    */
//   function LoadContent(): void {
//     console.log("Loading Content...");
//     let contentLink = document.title.toLowerCase();

//     $.get("./Views/content/" + contentLink + ".html", function (html_data) {
//       $("main").html(html_data);
//     });
//   }

//   /**
//    * This method loads and injects the footer content
//    *
//    */
//   function LoadFooter(): void {
//     console.log("Loading Footer...");
//     $.get("./Views/components/footer.html", function (html_data) {
//       $("footer").html(html_data);
//     });
//   }

//   // First method of using functions
//   function Start() {
//     console.log("App Started!");

//     // initial load
//     document.title = "Home";
//     // Change URL
//     history.pushState({}, "", "/Home");

//     LoadContent();

//     LoadHeader();

//     LoadFooter();
//   }

//   window.addEventListener("load", Start);
// })();

/*=============================================
    OBJECT WITH PROPERTIES
=============================================*/
var p = {
  navbarMenu: [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Services" },
    { name: "Contact" },
  ],
  homePage: {
    text: "Hello I'm Andres Professional Front-End Developer",
    image: "./../Assets/avatar.png",
  },
  aboutPage: {
    text: "hola soy la pagina 2",
    image: "otra imagen",
  },
};

/*=============================================
    OBJECT WITH METHODS
=============================================*/
var m = {
  //----------method to load Header
  loadHeader: () => {
    $.get("./Views/components/header.html", function (html_data) {
      let navbar = document.createElement("nav");
      // adding bootstrap classes to the new element nav
      navbar.classList.add("navbar", "navbar-expand-lg", "navbar-dark");
      // adding the file obtained as child of the nav tag
      navbar.innerHTML = html_data;

      // loop the array in order to create the li elements
      p.navbarMenu.map((item) => {
        const li = `
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" id="${item.name}" href="#">${item.name}</a>
                   </li>
                  `;
        $(navbar).find("ul").append(li);
      });
      $("header").html(navbar);

      // Activate the Home Link on initial load
      $("li>a#Home").addClass("active");

      $("li>a").on("click", function (event) {
        event.preventDefault();
        // Change Title
        document.title = $(this).prop("id") as string;

        // Change URL
        history.pushState({}, "", "/" + document.title);

        // removes the active class from each list item
        $("li>a").each(function () {
          $(this).removeClass("active");
        });

        // Activate the current Link
        $("li>a#" + document.title).addClass("active");

        m.loadContent();
      });
    });
  },

  //----------method to load the conten on main
  loadContent: () => {
    let contentLink = document.title.toLowerCase();
    $.get("./Views/content/" + contentLink + ".html", function (html_data) {
      switch (contentLink as string) {
        case "home":
          console.log("ha");
          break;

        default:
          break;
      }

      $("main").html(html_data);
    });
  },

//----------method to load the footer


  // First method of using functions
  startApp: () => {
    // initial load
    document.title = "Home";
    // Change URL
    history.pushState({}, "", "/Home");
    m.loadContent();
    m.loadHeader();
    // m.loadFooter();
  },
};

window.addEventListener("load", m.startApp);
