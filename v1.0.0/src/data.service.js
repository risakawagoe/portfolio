// import testImg from "./img/preview/test.png"
// const PROJECT_DATA_FILE = "data.json"

// dummy
const projects = [
    {
        id: "1_YHGOD",
        title: "SFU Synapse - React app",
        duration: "January - April 2023",
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
        url: "https://csil-git1.cs.surrey.sfu.ca/cmpt372-group-project/sfu-synapse",
        srcCode: "https://csil-git1.cs.surrey.sfu.ca/cmpt372-group-project/sfu-synapse",
        videoTitle: "Demo video: *in progress",
        videoID: "pBy1zgt0XPc",
        featured: true,
        visible: true
    },
    {
        id: "2_KLAYNW",
        title: "Portfolio website with React",
        duration: "May 2023 - Present",
        preview: require("./img/preview/portfolio-website.png"),
        description: "Currently in the process of assebling resources (demo video, source code, and some design related implementation).",
        techStack: [
            "React JS",
            "JavaScript",
            "HTML",
            "CSS",
            "Material UI",
            "Bootstrap",
            "EmailJS",
            "GitHub"
        ],
        url: "https://risakawagoe.github.io",
        srcCode: "https://github.com/risakawagoe/portfolio/tree/main/v1.0.0",
        videoTitle: "Demo video: *in progress",
        videoID: "pBy1zgt0XPc",
        featured: false,
        visible: true
    },
    {
        id: "3_PAUSBN",
        title: "Business website with wordpress",
        duration: "May - July 2021",
        preview: require("./img/preview/web-business-website.png"),
        description: "Created a business style WordPress theme which helps showcase previous works and make public announcements.",
        techStack: [
            "JavaScript",
            "HTML",
            "CSS",
            "PHP",
            "CMS (WordPress)"
        ],
        url: "https://kawagoeweb.com",
        srcCode: "https://kawagoeweb.com",
        videoTitle: "Demo video: *in progress",
        videoID: "pBy1zgt0XPc",
        featured: false,
        visible: true
    },
    {
        id: "4_DIGAAS",
        title: "Business website for freelance videographer",
        duration: "May 2020 - June 2021",
        preview: require("./img/preview/freelance-videographer-website.png"),
        description: "A business website for a freelance videographer/video-editor to showcase services and previous works, and allow potential clients to reach out.",
        techStack: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        url: "https://videographiti.biz/",
        srcCode: "https://videographiti.biz/",
        videoTitle: "Demo video: *in progress",
        videoID: "pBy1zgt0XPc",
        featured: false,
        visible: true
    },
    {
        id: "5_CHEIUDG",
        title: "SFU Synapse 5",
        duration: "May 2023 - Present",
        preview: require("./img/preview/test.png"),
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        techStack: [
            "Docker",
            "GCP Compute Engine",
            "Git"
        ],
        url: "https://google.com",
        srcCode: "https://github/risakawagoe/project",
        videoTitle: "Demo video: *in progress",
        videoID: "pBy1zgt0XPc",
        featured: false,
        visible: false
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