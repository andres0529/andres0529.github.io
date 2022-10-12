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
        title: "About Me",
        button: "Resume",
        urlImage: "./../../Assets/img/me.jpg",
        paragraphs: [
            ` Hello, My name is Andres and I enjoy creating experiences
    and things on the Internet. <br> I'm a systems engineer
    specializing in front-end development with more than 5 years
    of experience in the market, dedicated to creating
    beautiful interfaces for everything from simple open source
    applications to complex proprietary systems.`,
            ` I started in web programming because I consider myself a
    person passionate about technology, since I was a child I
    have always been fascinated by technological advances and
    programming languages. I remember taking my first steps in
    the world of development using some languages like AS400,
    visual Basica and c++, and since then I have been at the
    forefront of technology trying to learn more and more.`,
            `   I had the opportunity to work for some companies such as
    <a href="http://">Globant</a>, <a
        href="https://conexcol.net.co/">Conexcol Cloud</a>,
    <a href="https://www.bdo.ca/en-ca/home/">BDO Canada</a>, among
    others,
    using front-end development technologies for the use of some
    web projects. Experiences that have contributed to forging
    my career, which I am very grateful and motivated to
    continue growing professionally.`,
        ],
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
            $("main .bg-landing div").css("animation-play-state", "paused");
            $("main .bg-landing>div>div> img").addClass("bg-landing-opacity");
            console.log("andres");
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
                document.title = $(this).prop("id");
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
            //append the view to the main tag
            $("main").html(html_data);
            //depend on the menu selected take the info from dataObject
            switch (contentLink) {
                case "home":
                    $("main #home h4").text(data.homePage.text1);
                    $("main #home h1").text(data.homePage.text2);
                    $("main #home h5").text(data.homePage.text3);
                    $("main #home h6").text(data.homePage.text4);
                    $("main #home h6").attr("data-text", data.homePage.text4); //attr needed for the effect
                    break;
                case "about":
                    $("main #about h4").text(data.aboutPage.title);
                    $("main #about img").attr("src", data.aboutPage.urlImage);
                    //loop the array with all the paragraphs
                    data.aboutPage.paragraphs.map((item) => {
                        let ptag = `<p>${item}</p>`;
                        $("#about").find(".paragraphs").append(ptag);
                    });
                    //create the button element
                    let buttonResume = document.createElement("button");
                    $(buttonResume).addClass("btn btn-outline-primary btn-sm");
                    $(buttonResume).attr("type", "button");
                    $(buttonResume).text(data.aboutPage.button);
                    //add the button to the container paragraph
                    $("main #about .paragraphs").append(buttonResume);
                    break;
                default:
                    break;
            }
        });
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
        // }, 10500);  ////////////////////////////////////////------->descomentar
    },
};
window.addEventListener("load", m.startApp);
//# sourceMappingURL=app.js.map