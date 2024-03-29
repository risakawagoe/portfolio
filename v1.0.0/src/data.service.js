// const PROJECT_DATA_FILE = "projects.json"

const projects = [
    {
        id: "VIDEOGRAPHITI23",
        title: "VideoGraphiti",
        duration: "Dec 2022 - July 2023",
        preview: require("./img/preview/videographiti.png"),
        description: "A fully customizable WordPress theme with mobile responsive design developed for a video filming and editing startup",
        techStack: [
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "CMS (WordPress)"
        ],
        url: "https://videographiti.biz",
        srcCode: "https://github.com/risakawagoe/VideoGraphiti",
        videoID: "fiKMXE8nmeY",
        featured: false,
        visible: true
    },
    {
        id: "PORTFOLIO23",
        title: "Portfolio Website",
        duration: "May - June 2023",
        preview: require("./img/preview/portfolio-website.png"),
        description: "Personal website to showcase previous works. Developed with React.",
        techStack: [
            "React JS",
            "JavaScript",
            "HTML",
            "CSS",
            "Material UI",
            "Bootstrap",
            "EmailJS",
            "GitHub",
            "Figma"
        ],
        url: "https://risakawagoe.com",
        srcCode: "https://github.com/risakawagoe/portfolio/tree/main/v1.0.0",
        videoID: "zc9emCpGzyc",
        featured: false,
        visible: true
    },
    {
        id: "SYNAPSE23",
        title: "SFU Synapse - React app",
        duration: "Jan - Apr 2023",
        preview: require("./img/preview/sfu-synapse.png"),
        description: "SFU Synapse is a full-stack web application that helps SFU students to discover other students with common interests and help users build and maintain strong and meaningful connections.",
        techStack: [
            "React JS",
            "MySQL",
            "Node JS",
            "Express",
            "SFU Course Outline REST API",
            "Bootstrap",
            "Docker",
            "GCP Compute Engine",
            "GCP Cloud MySQL",
            "GitLab"
        ],
        url: null,
        srcCode: "https://github.com/risakawagoe/sfu-synapse",
        videoID: "QQN_wKMDQM4",
        featured: true,
        visible: true
    },
    {
        id: "PIGTRCK22",
        title: "Pig Tracker",
        duration: "Sep - Dec 2022",
        preview: require("./img/preview/pig-tracker.png"),
        description: "Designed and developed an app to help a farmer track lost pigs using Angular and TypeScript; acknowledged by course TA for outstanding UI. Implemented communication with backend Data Manager API to allow the community to submit reports and to display them in a list or a map using the Leaflet API",
        techStack: [
            "Angular",
            "TypeScript",
            "Leaflet",
            "Storage Server API",
            "HTML",
            "CSS",
            "JSON",
            "Bootstrap"
        ],
        url: "https://pig-tracker.risakawagoe.com",
        srcCode: "https://github.com/risakawagoe/pig-tracker",
        videoID: "zc9emCpGzyc",
        featured: false,
        visible: true
    },
    {
        id: "MAZEGAME22",
        title: "Survive in the End - 2D Java Maze Game",
        duration: "Jan - Apr 2022",
        preview: require("./img/preview/2D-java-maze-game.png"),
        description: "An arcade style pseudo 3D game developed in Java and runs on desktops.",
        techStack: [
            "Java",
            "intelliJ IDE with JDK",
            "GitLab",
            "Maven",
            "Junit"
        ],
        url: null,
        srcCode: "https://github.com/risakawagoe/2D-java-maze-game",
        videoID: "aygcDsqt94s",
        featured: false,
        visible: true
    },
    {
        id: "MINATOYA21",
        title: "Business Enterprise WordPress Theme",
        duration: "Jun - Aug 2021",
        preview: require("./img/preview/web-business-website.png"),
        description: "Developed a professionally designed WordPress Theme for small business owners.",
        techStack: [
            "PHP",
            "jQuery",
            "HTML",
            "CSS",
            "CMS (WordPress)"
        ],
        url: "https://minatoya.risakawagoe.com",
        srcCode: "https://github.com/risakawagoe/wordpress-theme-business",
        videoID: "zc9emCpGzyc",
        featured: false,
        visible: true
    },
    {
        id: "DIGPLN20",
        title: "Digital Daily Planner Printer",
        duration: "Jul - Aug 2020",
        preview: require("./img/preview/daily-planner-printer.png"),
        description: "Dynamic, customizable, and printable daily planner developed with JavaScript, HTML, and CSS. This was created in response to the voices of users of Sony's discontinued service - Digital Paper Template Daily Scheduler.",
        techStack: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        url: "https://daily-planner.risakawagoe.com",
        srcCode: "https://github.com/risakawagoe/daily-planner-printer",
        videoID: "ZCgu2CbuHS8",
        featured: false,
        visible: true
    }
]


// gets all projects including the featured project
function getAllProjects() {
    return projects
}

// gets all projects excluding the featured project
function getProjects() {
    // read data from json file

    // return []
    const list = getAllProjects()
    return list.filter(project => {return !project.featured && project.visible})
}

function getProjectById(id) {
    const list = getAllProjects()
    const searchResult = list.filter(project => {return project.id === id})
    if(searchResult) {
        return searchResult[0]
    }

    return null
}

function getFeaturedProject() {
    const list = getAllProjects()
    const searchResult = list.filter(project => {return project.featured})
    if(searchResult) {
        return searchResult[0]
    }
    
    return null
}

export { getProjects, getProjectById, getFeaturedProject }