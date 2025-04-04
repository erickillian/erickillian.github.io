// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of the projects I&#39;ve worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "projects-aev",
          title: 'AEV',
          description: "Advanced Energy Vehicle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aev/";
            },},{id: "projects-c3",
          title: 'C3',
          description: "Clever Cleaning Container",
          section: "Projects",handler: () => {
              window.location.href = "/projects/c3/";
            },},{id: "projects-tattoo-remover",
          title: 'Tattoo Remover',
          description: "Machine learning image to image model that removes tattoos",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tattoo/";
            },},{id: "projects-wordle",
          title: 'Wordle',
          description: "Competitive daily wordle web app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wordle/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/erickillian", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/eric-killian", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/erickillian39", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
