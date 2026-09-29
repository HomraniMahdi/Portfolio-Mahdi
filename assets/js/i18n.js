'use strict';

// English translations. French is the default content written in index.html.
const translationsEn = {
  "sidebar.role": "Full Stack Engineer Java / Angular",
  "sidebar.xp": "5 years of experience",
  "sidebar.more": "Show contacts",
  "sidebar.whatsapp": "Chat on WhatsApp",
  "sidebar.location": "Location",
  "sidebar.cv": "Download CV",
  "nav.about": "About",
  "nav.resume": "Resume",
  "nav.portfolio": "Projects",
  "about.p1": "Full Stack Engineer Java / Angular with 5 years of experience in designing, developing and maintaining business web applications. I design and build business features with <strong>Java 17/21</strong>, <strong>Spring Boot 3</strong>, Spring Data and Hibernate/JPA, as well as secure REST APIs with Spring Security.",
  "about.p2": "On the front-end, I build web interfaces with <strong>Angular</strong>, TypeScript and RxJS. I optimize data access with <strong>SQL</strong> and PostgreSQL, write unit tests (JUnit, Mockito) and take part in industrializing applications with GitLab CI/CD, Docker and Kubernetes, within Agile Scrum teams working closely with business and technical stakeholders.",
  "about.services": "What I do",
  "svc.back.title": "Back-end development",
  "svc.back.text": "Business features and secure REST APIs with Java 17/21, Spring Boot 3, Spring Security and Hibernate/JPA.",
  "svc.front.title": "Front-end development",
  "svc.front.text": "Reusable Angular components with TypeScript and RxJS, REST API integration and consumption.",
  "svc.wf.title": "Workflows &amp; data",
  "svc.wf.text": "Business process automation with Camunda BPMN, SQL/PostgreSQL optimization and Kafka messaging.",
  "svc.devops.text": "CI/CD with GitLab and Jenkins, Docker, Kubernetes, monitoring with Prometheus and Grafana.",
  "about.stack": "Tech stack",
  "stack.languages": "Languages",
  "stack.db": "Databases",
  "stack.quality": "Quality &amp; methods",
  "stack.rest": "REST API",
  "resume.xp": "Work experience",
  "resume.role": "Full Stack Developer Java / Angular",
  "resume.orange.meta": "ORANGE | Paris, Île-de-France | September 2023 – Present",
  "resume.orange.ctx": "<strong>Project: OTB – Web application.</strong> Development and evolution of a strategic web platform automating order processing and billing, based on a microservices architecture (Java/Spring Boot back-end, Angular front-end). Team of 10: Product Owner, Scrum Master, Tech Lead, Full Stack developers and QA.",
  "resume.orange.tasks": "• Designed and developed new business features with Java 17 and Spring Boot 3.<br>• Designed, developed and secured REST APIs with Spring Security; defined API contracts.<br>• Developed front-end features and reusable components with Angular 14 and TypeScript.<br>• Managed persistence with Hibernate/JPA and PostgreSQL; wrote and optimized SQL queries.<br>• Improved performance with pagination and Server-Sent Events (SSE).<br>• Automated business processes with Camunda BPMN and developed the related Java workers.<br>• Unit testing with JUnit/Mockito, code reviews, SonarQube, Clean Code and SOLID practices.<br>• Set up GitLab CI/CD pipelines, containerized with Docker and deployed on Kubernetes.<br>• Business Refinements, backlog refinement, Planning Poker and Scrum ceremonies.",
  "resume.orange.env": "<strong>Environment:</strong> Java 17/21, Spring Boot 3, Spring Security, Angular 14/17, TypeScript, RxJS, Camunda BPMN, REST API, SSE, PostgreSQL, SQL, Hibernate/JPA, Maven, Docker, Kubernetes, GitLab CI/CD, SonarQube, JUnit, Mockito, Git, Jira, Confluence",
  "resume.actia.meta": "ACTIA Engineering Services | Tunis, Tunisia | June 2021 – August 2023",
  "resume.actia.ctx": "<strong>Project: Diag Cloud – Web application.</strong> Development of a cloud monitoring platform for automotive diagnostic applications: microservice supervision, metrics centralization and real-time incident detection. Team of 8: Product Owner, Scrum Master, Tech Lead, Cloud/Back-End developers and DevOps Engineer.",
  "resume.actia.tasks": "• Designed and developed REST APIs with Java and Spring Boot in a microservices architecture.<br>• Secured APIs with Spring Security and Keycloak; inter-service communication with OpenFeign.<br>• Persistence with Hibernate/JPA and PostgreSQL; monitoring endpoints with Spring Boot Actuator.<br>• User interfaces, monitoring screens and real-time dashboards with Angular 15, TypeScript and RxJS.<br>• Event-driven communication with Apache Kafka (producers and consumers).<br>• Containerized with Docker, deployed on Kubernetes and built CI/CD pipelines with Jenkins.<br>• Application monitoring with Prometheus, Grafana and Alertmanager.<br>• Scrum ceremonies, User Story refinement and Planning Poker estimation.",
  "resume.actia.env": "<strong>Environment:</strong> Java 11, Spring Boot 2/3, Spring Security, Keycloak, OpenFeign, Spring Boot Actuator, Angular 15, TypeScript, RxJS, REST API, Apache Kafka, PostgreSQL, SQL, Hibernate/JPA, Docker, Kubernetes, Jenkins, Prometheus, Grafana, Alertmanager, Git, Jira",
  "resume.education": "Education",
  "resume.degree": "Engineering degree in Computer Science",
  "resume.school": "ESPRIT – Private Higher School of Engineering and Technology | 2020 – 2023",
  "resume.skills": "Skills",
  "resume.functional": "Functional skills &amp; languages",
  "fn.orders": "Order management and billing",
  "fn.automation": "Business process automation",
  "fn.analysis": "Functional and technical analysis",
  "fn.backlog": "Backlog refinement and estimation",
  "fn.integration": "Information systems integration",
  "fn.cloud": "Cloud supervision and monitoring",
  "fn.auto": "Automotive diagnostics",
  "fn.english": "English: fluent",
  "filter.all": "All",
  "filter.pro": "Professional",
  "filter.select": "Select category",
  "project.pro": "Professional project",
  "project.web": "Web development",
  "project.otb": "Strategic web platform automating order processing and billing: Spring Boot 3 microservices, Angular front-end, secure REST APIs, Camunda BPMN workflows, SSE, PostgreSQL, Docker, Kubernetes and GitLab CI/CD.",
  "project.diag": "Cloud monitoring platform for automotive diagnostic applications: Spring Boot microservices, Keycloak, OpenFeign, Kafka, real-time Angular dashboards, Prometheus, Grafana and Alertmanager on Kubernetes.",
  "project.osplanner": "Design and development of a web application helping entrepreneurs keep their costs under control.",
  "project.wb.title": "“Well Being @Work” web application",
  "project.wb": "Corporate web application designed to ensure employee well-being and help the company reach its goals.",
  "project.carpool": "Web and desktop carpooling application allowing travelers to offer their rides.",
  "project.smartfarm": "C application designed to make farmers' daily work easier.",
  "project.users": "User management web application.",
  "project.ecom.title": "E-commerce application",
  "project.ecom": "Online video game store application.",
  "project.skytravel": "Travel agency web application for booking hotels and rooms.",
  "contact.title": "Let's work together",
  "contact.text": "An opportunity, a project or a question? Feel free to get in touch.",
  "contact.email": "Contact me by email",
  "contact.whatsapp": "Chat on WhatsApp",
  "alt.back": "Back-end development icon",
  "alt.front": "Front-end development icon",
  "alt.wf": "Automation icon",
  "alt.devops": "DevOps icon",
  "alt.otb": "OTB – Orange order and billing platform",
  "alt.diag": "Diag Cloud – automotive diagnostic monitoring platform",
  "alt.wb": "Well Being @Work web application",
  "alt.ecom": "E-commerce application",
  "attr.map": "Location: Paris, Île-de-France, France",
  "attr.preview": "Project preview",
  "attr.close": "Close",
  "contact.whatsapp.href": "https://wa.me/21658932889?text=Hello%20Mahdi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",
  "meta.title": "Mahdi Homrani – Full Stack Engineer Java / Angular",
  "meta.description": "Portfolio of Mahdi Homrani, Full Stack Engineer Java / Angular with 5 years of experience: Java, Spring Boot, Angular, SQL, Docker, Kubernetes."
};



// language switcher
const langButtons = document.querySelectorAll("[data-lang-btn]");
const i18nElems = document.querySelectorAll("[data-i18n]");
const i18nAttrs = ["alt", "title", "aria-label", "href"];
const metaDescription = document.querySelector('meta[name="description"]');

// keep the French content of the page so we can switch back to it
const translationsFr = {
  "meta.title": document.title,
  "meta.description": metaDescription ? metaDescription.content : ""
};

for (let i = 0; i < i18nElems.length; i++) {
  translationsFr[i18nElems[i].dataset.i18n] = i18nElems[i].innerHTML;
}

for (let a = 0; a < i18nAttrs.length; a++) {
  const attrElems = document.querySelectorAll("[data-i18n-" + i18nAttrs[a] + "]");
  for (let i = 0; i < attrElems.length; i++) {
    translationsFr[attrElems[i].getAttribute("data-i18n-" + i18nAttrs[a])] = attrElems[i].getAttribute(i18nAttrs[a]);
  }
}

const applyLanguage = function (lang) {
  const dict = lang === "en" ? translationsEn : translationsFr;

  for (let i = 0; i < i18nElems.length; i++) {
    const value = dict[i18nElems[i].dataset.i18n];
    if (value !== undefined) i18nElems[i].innerHTML = value;
  }

  for (let a = 0; a < i18nAttrs.length; a++) {
    const attrElems = document.querySelectorAll("[data-i18n-" + i18nAttrs[a] + "]");
    for (let i = 0; i < attrElems.length; i++) {
      const value = dict[attrElems[i].getAttribute("data-i18n-" + i18nAttrs[a])];
      if (value !== undefined) attrElems[i].setAttribute(i18nAttrs[a], value);
    }
  }

  document.title = dict["meta.title"];
  if (metaDescription) metaDescription.content = dict["meta.description"];
  document.documentElement.lang = lang;

  for (let i = 0; i < langButtons.length; i++) {
    const isActive = langButtons[i].dataset.langBtn === lang;
    langButtons[i].classList.toggle("active", isActive);
    langButtons[i].setAttribute("aria-pressed", isActive ? "true" : "false");
  }

  try { localStorage.setItem("portfolio-lang", lang); } catch (error) { /* storage unavailable */ }
}

for (let i = 0; i < langButtons.length; i++) {
  langButtons[i].addEventListener("click", function () { applyLanguage(this.dataset.langBtn); });
}

// saved choice first, then the browser language (French by default)
let initialLang = null;
try { initialLang = localStorage.getItem("portfolio-lang"); } catch (error) { /* storage unavailable */ }
if (initialLang !== "fr" && initialLang !== "en") {
  initialLang = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
}
if (initialLang === "en") applyLanguage("en");
