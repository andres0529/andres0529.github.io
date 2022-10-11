"use strict";
/*=============================================
    OBJECT WITH DATA
=============================================*/
var data = {
  navbarMenu: [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Services" },
    { name: "Contact" },
  ],
  homePage: {
    text1: "Hi there! ",
    text2: "I'm Andres Correa",
    text3: "Professional - FrontEnd Developer",
    text4: "I build things for the web.",
  },
  aboutPage: {
    text: "hola soy la pagina 2",
    image: "otra imagen",
  },
};

/*=============================================
    OBJECT WITH METHODS
=============================================*/
let m = {
  //----------method to load landingPage
  loadLanding: () => {
    //Call the landing page as default page at the beggining of the app
    $.get("./Views/content/landing.html", function (landing_page) {
      $("main").html(landing_page);
    });

    //After 8S the first animation is stoped and removed ther opacity from the logo
    setTimeout(function () {
      $(".bg-landing div").css("animation-play-state", "paused");
      $(".bg-landing>div>div> img").addClass("bg-landing-opacity");
    }, 8000);
  },

  //----------method to load Header
  loadHeader: () => {
    $.get("./Views/components/header.html", function (html_data) {
      $("header").html(html_data);

      // loop the array in order to create the li elements
      data.navbarMenu.map((item) => {
        const li = `
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" id="${item.name}" href="#">${item.name}</a>
                   </li>
                  `;
        $("nav").find("ul").append(li);
      });

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
    $.get(
      "./Views/content/" + contentLink + ".html",function (html_data: string) {
        //append the view to the main tag
        $("main").html(html_data);
        //depend on the menu selected take the info from dataObject
        switch (contentLink as string) {
          case "home":
            $("main #home h4").text(data.homePage.text1);
            $("main #home h1").text(data.homePage.text2);
            $("main #home h5").text(data.homePage.text3);
            $("main #home h6").text(data.homePage.text4);
            $("main #home h6").attr("data-text", data.homePage.text4) //attr needed for the effect
            break;

          default:
            break;
        }
      }
    );
  },

  //----------method to load the footer

  // First method of using functions
  startApp: () => {
    // m.loadLanding(); ////////////////////////////////////////------->descomentar

    // setTimeout(function () {  ////////////////////////////////////////------->descomentar
    // initial load
    document.title = "Home";
    // Change URL
    history.pushState({}, "", "/Home");
    m.loadContent();
    m.loadHeader();
    // m.loadFooter();
    // }, 10000);  ////////////////////////////////////////------->descomentar
  },
};

window.addEventListener("load", m.startApp);
