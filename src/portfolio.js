/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pragya Singh",
  title: "Hi, I'm Pragya 👋",
  subTitle:
    "Frontend / Angular Developer with 2+ years of experience building production-grade web apps in the travel & airline domain. I love turning complex business rules into clean, usable interfaces.",
  resumeLink: "https://drive.google.com/file/d/1mNAawpVswu_nsjkDC5NkyyfJbfgkVWvF/view?usp=sharing", // paste your Google Drive CV link here
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pragyya7",
  linkedin: "https://www.linkedin.com/in/pragya-97233b220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  gmail: "pragyadsce@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Angular-focused frontend developer with experience in complex forms, dynamic UI rules, and integration with REST APIs.",
  skills: [
    "⚡ Build responsive single-page applications using Angular & TypeScript",
    "⚡ Implement complex, dynamic forms and dropdown logic driven by backend data",
    "⚡ Integrate REST APIs for search, booking, and user flows with proper error handling",
    "⚡ Write clean, modular code with reusable components and shared utilities",
    "⚡ Collaborate with product & backend teams to translate requirements into UI behavior"
  ],
  softwareSkills: [
    { skillName: "Angular", fontAwesomeClassname: "simple-icons:angular" },
    { skillName: "TypeScript", fontAwesomeClassname: "simple-icons:typescript" },
    { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript" },
    { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5" },
    { skillName: "CSS3 / SCSS", fontAwesomeClassname: "simple-icons:css3" },
    { skillName: "Git / GitHub", fontAwesomeClassname: "simple-icons:git" },
    { skillName: "REST APIs", fontAwesomeClassname: "simple-icons:postman" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      collegeName: "Dayananda Sagar College of Engineering",
      logo: require("./assets/images/dayananda.png"),
      subHeader: "B.E. in Electronics and Communication Engineering",
      duration: "August 2019 – April 2023",
      desc:
        "Focused on core engineering concepts while building strong interest in software and web development.",
      descBullets: [
        "Completed multiple mini projects combining electronics and programming",
        "Led team assignments, giving hands-on experience in planning, collaboration and problem solving",
        "Transitioned into full-time software development after graduation"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Amadeus Software Labs",
      companylogo: require("./assets/images/amadeus.png"),
      date: "April 2023 – Present",
      desc: "Leading frontend feature development for airline booking and order management systems using Angular, delivering scalable UI architecture, reusable components and reliable API-driven workflows used by global airline customers.",
      descBullets: [
        "Developed and enhanced Angular modules for booking flows (passenger details, baggage selection, add-ons and payment flows) used by global airline customers",
        "Implemented dynamic forms, custom validations and backend-driven UI rules across 30+ booking scenarios to reduce user errors and improve UX consistency",
        "Built reusable UI components (cards, dropdowns, tables, modals) adopted across 6+ internal teams, reducing repeated development effort",
        "Integrated REST APIs for seat maps, booking, order updates and payment services with improved error handling & retry logic",
        "Collaborated with backend, UX and QA engineers in agile sprints to deliver reliable booking features with high scalability"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF MY PERSONAL BIG PROJECTS THAT I HAVE WORKED ON AND ALSO SOME OF MY CLIENTS PROJECTS.",
  projects: [
    {
      image: require("./assets/images/amadeus.png"),
      projectName: "PAL Portal",
      projectDesc: "A web portal for the employees of Philippine Airlines",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cloud.palt.com/login"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Google Code-in Blog",
          url: ""
          }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@lily.pragya45/why-angular-is-best-9c25555d3d44",
      title: "Why Angular is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9504011991",
  email_address: "pragyadsce@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
