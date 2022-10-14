"use strict";
/*=============================================
    OBJECT WITH DATA
=============================================*/
var data = {
  navbarMenu: [
    { name: "Home" },
    { name: "About" },
    { name: "Experience" },
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
    linkResume:
      "https://www.dropbox.com/s/at3djtjixix6lzk/AndresCorrea_Resume%20August-2022.pdf?dl=0",
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
    <a href="https://www.globant.com/">Globant</a>, <a
        href="https://conexcol.net.co/">Conexcol Cloud</a>,
    <a href="https://www.bdo.ca/en-ca/home/">BDO Canada</a>, among
    others,
    using front-end development technologies for the use of some
    web projects. Experiences that have contributed to forging
    my career, which I am very grateful and motivated to
    continue growing professionally.`,
    ],
  },
  experiencePage: [
    {
      id: "conexcol",
      logoUrl:"./../../Assets/img/logos/conexcol.png",
      companyName: "Conexcol Cloud",
      position: "Support Engineer",
      date: "Feb 2010 - Nov 2016",
      description: `Conexcol is a company oriented to service infrastructure, in which I participate by performing the  tasks:`,
      tasks: [
        "Collaborated with the Design team to create new application features using React Js, Redux and Ant Design.",
        "Interfaced directly with customers to solve their technical issues through empathetic problem solving.",
        "Developed company website and customer orientation Deployed mail servers, SSL certificate installation, CAL license configuration, port manipulation and DNS records.",
        "Broke down and evaluated user problems, using test scripts, personal expertise and probing questions.",
      ],
    },
    {
      id: "paradigma",
      logoUrl:"./../../Assets/img/logos/paradigma.jfif",
      companyName: "Paradigma Solutions",
      position: "Web Developer",
      date: "Jul 2019 - Apr 2020",
      description: `Paradigma is a family of programmers dedicated to developing any type of software or web design that is required. Some of the tasks in which I had the opportunity to participate are:`,
      tasks: [
        "Maintenance and deployment of DOT NET NUKE components for <a href='https://argos-us.com/'>Argos pages </a> in Colombia, Honduras, USA and Guyanna",
        "Developed Single Page Apps (SPAs) using React Js, MaterialUI and ReactHooks.",
        "I collaborated in the creation of React components for the web application of <a href='https://www.contraloria.gov.co/es/web/guest/atencion-al-ciudadano/denuncias-y-otras-solicitudes-pqrd'>Contraloria Genral de la Nacion</a> using Jest and Huskey as testing frameworks and Redux for application state management",
        "developed some components in Angular CLI for the creation of the Kitchensink library, a library for internal use of the company for the development of applications",
      ],
    },
    {
      id: "globant",
      logoUrl:"./../../Assets/img/logos/globant.jpg",
      companyName: "Globant",
      position: "Web UI Developer",
      date: "Dec 2020 - Nov 2021",
      description: `Globant is a publicly traded software development agency focused on serving corporate clients worldwide. My role as a UI developer had several important tasks like:`,
      tasks: [
        "I collaborated in the migration of 2 applications in AngularJS to ReactJS, using technologies such as Redux, Hooks, Typescript, Recharts and I was in the complete life cycle of the project.",
        "Technologies such as StoryBookJS and Jest for unit tests were used for the development of each component, which allowed testing the components created before integration.",
        "The client for which we developed the migration is <a href='https://www.americancentury.com/home/'>American Century Investment</a> , with whom we had weekly meetings to show the progress of the project using the SCRUM methodology.",
      ],
    },
    {
      id: "bdo",
      logoUrl:"./../../Assets/img/logos/bdo.png",
      companyName: "BDO Canada",
      position: "Software and Web Developer, Intern",
      date: "May 2022 - Aug 2022",
      description: `BDO or Binder Dijker Otte is an international network of public accounting, tax, consulting and business advisory firms. Some of the tasks performed were:`,
      tasks: [
        "To give back and support communities in need, BDO Canada annually launches the <a href='https://www.bdo.ca/en-ca/about/people-values/drive-away-hunger/'>Drive Away Hunger</a> campaign with a goal to donate 1 million meals to food banks across Canada. For fundraising, the DAH application was developed from its design to its deployment.",

        "Complete creation of the Drive Away Hunger application, which is based on ReactJS components, React Router, Hooks, API Context, Bootstrap, Material UI as FrontEnd and ASP.NET 6 and SQL for the BackEnd",
      ],
    },
  ],
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
      "./Views/content/" + contentLink + ".html",
      function (html_data: string) {
        //append the view to the main tag
        $("main").html(html_data);
        //depend on the menu selected take the info from dataObject
        switch (contentLink as string) {
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
            data.aboutPage.paragraphs.map((item: string) => {
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

          case "experience":
            let jobbtnsContainer = document.querySelector(".job-btns");
            let jobDescription = document.querySelector(".jobDescription p");
            let logoUrl = document.querySelector("figure img");
            let companyName = document.querySelector(".headings h5 ");
            let jobDate = document.querySelector(".headings span");
            let jobTasks = document.querySelector(".jobDescription ul");
            let joinedTasks = "";

            //****** Method to create P and take texts from DATAA (yhis method is called for every Click) ****/
            let addInfo = (button) => {
              //Match the job Id with the Button Id
              let jobSelected = data.experiencePage.find(
                (job) => job.id === button.target.id
              );

              //Nesxt 3 lines to clean the button selected and the paragraph
              $(".activeButton").removeClass("activeButton");
              $(`[id= '${button.target.id}']`).addClass("activeButton");
              joinedTasks = "";

              //Populate the buttons with the job selected
              jobDescription.textContent = jobSelected.description;
              companyName.textContent = jobSelected.companyName;
              jobDate.textContent = jobSelected.date;
              logoUrl.setAttribute("src", jobSelected.logoUrl);

              //build the string with all the tasks together separated by P element each one
              jobSelected.tasks.map((task) => {
                joinedTasks += `<li class="mt-4">${task}</li>`;
              });
              //add the string created befor as HTML inside the UL
              jobTasks.innerHTML = joinedTasks;
            };

            //****** Method to create Buttons accoridng to the data ****/
            data.experiencePage.map((job) => {
              let buttonElement = `<button id="${job.id}" type="button" class="btn btn-outline-secondary">${job.companyName}</button>`;
              jobbtnsContainer.innerHTML += buttonElement; //adding next button + before
            });
            //add a listener to each buttons in orden to call the function AddInfo
            let buttons = document.querySelectorAll("#experience button");
            [...buttons].map((button: Element) => {
              button.addEventListener("click", addInfo);
            });

            //***Load the informatrion by default first time in the page***
            document.querySelector(".job-btns button").classList.add("activeButton");
            logoUrl.setAttribute("src", data.experiencePage[0].logoUrl);
            companyName.textContent = data.experiencePage[0].companyName;
            jobDescription.textContent = data.experiencePage[0].description;
            jobDate.textContent = data.experiencePage[0].date;
            data.experiencePage[0].tasks.map((task) => (joinedTasks += `<li class="mt-4">${task}</li>`));
            jobTasks.innerHTML = joinedTasks;
            break;
        }
      }
    );
  },

  //----------method to load the footer

  // First method of using functions
  startApp: () => {
    // m.loadLanding(); ////////////////////////////////////////------->descomentar
    console.log("andres");
    // setTimeout(function () { ////////////////////////////////////////------->descomentar
    // initial load
    document.title = "Home";
    // Change URL
    history.pushState({}, "", "/Home");
    m.loadContent();
    m.loadHeader();
    // m.loadFooter();
    // }, 10500); ////////////////////////////////////////------->descomentar
  },
};

window.addEventListener("load", m.startApp);
