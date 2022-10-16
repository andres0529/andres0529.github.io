/*
file name: app.ts
Author: Andres Correa Moreno
website name: My Portfolio

Dscription: File where is all the logic for the page
*/

"use strict";
/*=============================================
    OBJECT WITH DATA
=============================================*/
var data = {
  titles: {
    page1: "--",
    page2: "About",
    page3: "Experience and Skills",
    page4: "Services",
    page5: "Get In Touch!",
  },
  skills: [
    {
      name: "HTML5",
      urlImage: "./../../Assets/img/logos/html.svg",
    },
    {
      name: "Javascript",
      urlImage: "./../../Assets/img/logos/javascript.svg",
    },
    {
      name: "ReactJS",
      urlImage: "./../../Assets/img/logos/react.svg",
    },
    {
      name: "Angular",
      urlImage: "./../../Assets/img/logos/angular.svg",
    },
    {
      name: "Redux",
      urlImage: "./../../Assets/img/logos/redux.svg",
    },
    {
      name: "NextJS",
      urlImage: "./../../Assets/img/logos/next.svg",
    },
    {
      name: "CSS",
      urlImage: "./../../Assets/img/logos/css.svg",
    },
    {
      name: "Bootstrap",
      urlImage: "./../../Assets/img/logos/bootstrap.svg",
    },
    {
      name: "Material-UI",
      urlImage: "./../../Assets/img/logos/material.svg",
    },
    {
      name: "Jest",
      urlImage: "./../../Assets/img/logos/jest.png",
    },
    {
      name: "GIT",
      urlImage: "./../../Assets/img/logos/git.svg",
    },
  ],
  projects: [
    {
      name: "DAH",
      urlImage: "./../../Assets/img/logos/dha.png",
      urlRepo: "https://github.com/andres0529/Drive-Away-Hunger.git",
    },
    {
      name: "Georgian WIX",
      urlImage: "./../../Assets/img/logos/georgianWix.png",
      urlRepo: "https://github.com/andres0529/project2.git",
    },
    {
      name: "RHBlood",
      urlImage: "./../../Assets/img/logos/rh.png",
      urlRepo: "https://github.com/andres0529/rhblood.git",
    },
  ],
  navbarMenu: [
    { name: "Home" },
    { name: "About" },
    { name: "Experience" },
    { name: "Services" },
    { name: "Contact" },
  ],
  landingPage: {
    text1: "Welcome to my site",
    text2: "Fresh Constructor, ",
    text3: "Original Programmer",
  },
  homePage: {
    text1: "Hi there! ",
    text2: "I'm Andres Correa",
    text3: "Professional - FrontEnd Developer",
    text4: "I build things for the web.",
    button: "Who I am",
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
      logoUrl: "./../../Assets/img/logos/conexcol.png",
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
      logoUrl: "./../../Assets/img/logos/paradigma.jfif",
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
      logoUrl: "./../../Assets/img/logos/globant.jpg",
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
      logoUrl: "./../../Assets/img/logos/bdo.png",
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
  servicesPage: [
    {
      serviceIcon: `<i class="fa-solid fa-code"></i>`,
      serviceInfo: "Web Application Development",
    },
    {
      serviceIcon: `<i class="fa-brands fa-sketch"></i>`,
      serviceInfo: "Web and Apps Design",
    },
    {
      serviceIcon: `<i class="fa-solid fa-vial-circle-check"></i>`,
      serviceInfo: "Quality Assurance",
    },
    {
      serviceIcon: `<i class="fa-solid fa-terminal"></i>`,
      serviceInfo: "General Programming",
    },
    {
      serviceIcon: `<i class="fa-solid fa-laptop-code"></i>`,
      serviceInfo: "Custom Development",
    },
    {
      serviceIcon: `<i class="fa-solid fa-magnifying-glass-chart"></i>`,
      serviceInfo: "SEO Marketing",
    },
  ],
  contactPage: {
    heading: "How can I help you?",
    name: "Name",
    email: "Email @",
    message: "What's Up!",
    button: "send",
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

      // Populating the fields
      $("#landingPage h1").text(data.landingPage.text1);
      $("#landingPage .span1").text(data.landingPage.text2);
      $("#landingPage .span2").text(data.landingPage.text3);
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
    // closed the navbar on Mobile after a click
    $("header nav button").addClass("collapsed")
    $("header .container>div").removeClass("show")



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
            $("main #home span").html(
              `${data.homePage.button} <i class="fa-solid fa-angle-right"></i>`
            );

            //method for button "More"
            $("#home .btnMore").on("click", () => {
              document.title = "About";
              window.history.pushState({}, "", "About");
              // Activate the Home Link on initial load
              $("li>a#Home").removeClass("active");
              $("li>a#About").addClass("active");
              m.loadContent();
            });

            break;

          case "about":
            $("main #about h4").text(data.titles.page2);
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

            $("main #about button").on(
              "click",
              () =>
                (location.href =
                  "https://www.dropbox.com/s/gh5ksho3u0cn9d9/Resume-AndresCorrea-Oct-2022.pdf?dl=0")
            );

            break;

          case "experience":
            // variables for left part Experience
            let jobbtnsContainer = document.querySelector(
              "#experience .job-btns"
            );
            let jobDescription = document.querySelector(
              "#experience .jobDescription p"
            );
            let logoUrl = document.querySelector("#experience figure img");
            let companyName = document.querySelector(
              "#experience .headings h5 "
            );
            let jobDate = document.querySelector("#experience .headings span");
            let jobTasks = document.querySelector(
              "#experience .jobDescription ul"
            );
            let joinedTasks = "";
            // variables for Right part Experience
            let skillsContainer = document.querySelector(
              ".skillsProjectsContainer .skills"
            );
            let projectsContainer = document.querySelector(
              ".skillsProjectsContainer .projects"
            );
            let joinedSkills = "";
            let joinedProjects = "";

            /*----------------- populating information Left Side-------------------------  */

            //adding titles
            $("#experience h4").text(data.titles.page3);

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
            document
              .querySelector(".job-btns button")
              .classList.add("activeButton");
            logoUrl.setAttribute("src", data.experiencePage[0].logoUrl);
            companyName.textContent = data.experiencePage[0].companyName;
            jobDescription.textContent = data.experiencePage[0].description;
            jobDate.textContent = data.experiencePage[0].date;
            data.experiencePage[0].tasks.map(
              (task) => (joinedTasks += `<li class="mt-4">${task}</li>`)
            );
            jobTasks.innerHTML = joinedTasks;

            /*----------------------- populating information Right Side -------------------------------- */

            $(".skillsProjectsContainer .titleSkills").text("Skills");
            $(".skillsProjectsContainer .titleProjects").text("Some Projects");
            //populating skills side
            data.skills.map((skill) => {
              joinedSkills += `<div>
                                    <figure>
                                        <img src="${skill.urlImage}" alt="${skill.name}">
                                    </figure>
                                    <span>
                                        ${skill.name}
                                    </span>
                                </div>`;
            });
            skillsContainer.innerHTML = joinedSkills;
            //populating projects side
            data.projects.map((project) => {
              joinedProjects += `<div>
                                  <figure>
                                      <a href="${project.urlRepo}">
                                          <img class="mt-2" src="${project.urlImage}"alt="${project.name}">
                                      </a>
                                  </figure>
                                  <span>
                                    ${project.name}
                                  </span>
                              </div>`;
            });
            projectsContainer.innerHTML = joinedProjects;
            break;

          case "services":
            let joinedRightServices = "";
            let joinedLeftServices = "";
            //variable to calculate the begginis of the right column
            let rightColumnStart = Math.round(data.servicesPage.length / 2);

            data.servicesPage.map((service, index) => {
              // Populating the variable with right side services
              if (index + 1 > rightColumnStart) {
                //if indes is odd, apply red color, ekse apply blue color
                joinedRightServices += `
                                        <div class="service ${
                                          index % 2 == 0
                                            ? "rightBackgroundRed"
                                            : "rightBackgroundBlue"
                                        }">
                                          <div class="serviceInfo d-flex align-items-baseline">
                                              ${service.serviceIcon}
                                            <h5>${service.serviceInfo}</h5> 
                                          </div>
                                        </div>
                                       `;
              } else {
                // Populating the variable with left side services
                //if indes is odd, apply red color, ekse apply blue color
                joinedLeftServices += `
                                      <div class="service ${
                                        index % 2 == 0
                                          ? "leftBackgroundRed"
                                          : "leftBackgroundBlue"
                                      }">
                                        <div class="serviceInfo d-flex align-items-baseline">
                                        ${service.serviceIcon}
                                          <h5>${service.serviceInfo}</h5> 
                                        </div>
                                      </div>
                                     `;
              }
            });

            $("#services h4").text(data.titles.page4);
            $("#services .leftServices").html(joinedLeftServices);
            $("#services .rightServices").html(joinedRightServices);

            break;
          case "contact":
            $("#contact h4").text(data.titles.page5);
            $("#contact h3").text(data.contactPage.heading);
            $("#contact .name").text(data.contactPage.name);
            $("#contact #name").attr(
              "placeholder",
              `Type here your ${data.contactPage.name}`
            );
            $("#contact .email").text(data.contactPage.email);
            $("#contact .message").text(data.contactPage.message);
            $("#contact button").html(
              `${data.contactPage.button}  <i class="fa-regular fa-paper-plane"></i>`
            );

            let formValidation = {
              name: false,
              email: false,
              message: false,
            };

            //this fuynction is called for each change to verify the button
            const validateButton = () => {
              if (
                formValidation.message &&
                formValidation.message &&
                formValidation.name
              ) {
                $("#contact button").removeAttr("disabled");
              } else {
                $("#contact button").attr("disabled", "true");
              }
            };

            // function to validate name field
            $("#contact #name").on("change", (e: Event) => {
              const { target } = e;
              if ((target as HTMLButtonElement).value === "") {
                $("#contact #name").removeClass("formSuccess");
                $("#contact #name").addClass("formWrong");
                formValidation = { ...formValidation, name: false };
              } else {
                $("#contact #name").removeClass("formWrong");
                $("#contact #name").addClass("formSuccess");
                formValidation = { ...formValidation, name: true };
              }
              validateButton();
              console.log(formValidation);
            });

            // function to validate email field
            let regExpressEmail =
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            $("#contact #email").on("change", (e: Event) => {
              const { target } = e;
              // If the regular expression is false
              if (!regExpressEmail.test((target as HTMLButtonElement).value)) {
                $("#contact #email").removeClass("formSuccess");
                $("#contact #email").addClass("formWrong");
                formValidation = { ...formValidation, email: false };
              } else {
                $("#contact #email").removeClass("formWrong");
                $("#contact #email").addClass("formSuccess");
                formValidation = { ...formValidation, email: true };
              }
              validateButton();
            });

            // function to validate Message field
            $("#contact #message").on("change", (e: Event) => {
              const { target } = e;
              if ((target as HTMLButtonElement).value === "") {
                $("#contact #message").removeClass("formSuccess");
                $("#contact #message").addClass("formWrong");
                formValidation = { ...formValidation, message: false };
              } else {
                $("#contact #message").removeClass("formWrong");
                $("#contact #message").addClass("formSuccess");
                formValidation = { ...formValidation, message: true };
              }
              validateButton();
            });

            //function to listener the click o the send buttton
            $("#contact button").on("click", (event) => {
              event.preventDefault();
              if (
                formValidation.message &&
                formValidation.message &&
                formValidation.name
              ) {
                //remove the opacity for the success messsage
                $("#contact .hiddenSuccess").removeClass("opacityWrong");
                $("#contact .hiddenSuccess").addClass("opacitySuccess");

                setTimeout(function () {
                  document.title = "About";
                  window.history.pushState({}, "", "About");
                  // Activate the Home Link on initial load
                  $("li>a#Home").removeClass("active");
                  $("li>a#About").addClass("active");
                  m.loadContent();
                }, 2000);
              }
            });
            break;
        }
      }
    );
  },

  //----------method to load the footer

  // First method of using functions
  startApp: () => {
    m.loadLanding(); ////////////////////////////////////////------->

    setTimeout(function () {////////////////////////////////////////------->
    // initial load
    document.title = "Home";
    // Change URL
    history.pushState({}, "", "/Home");
    m.loadContent();

    m.loadHeader();
    // m.loadFooter();
    }, 10500); ////////////////////////////////////////------->
  },
};

window.addEventListener("load", m.startApp);
