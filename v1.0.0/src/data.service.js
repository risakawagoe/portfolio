// import testImg from "./img/preview/test.png"
// const PROJECT_DATA_FILE = "data.json"

// dummy
const projects = [
    {
        id: "1_YHGOD",
        title: "SFU Synapse 1",
        duration: "May 2023 - Present",
        preview: require("./img/preview/test.png"),
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        techStack: [
            "Angular JS",
            "JavaScript",
            "HTML",
            "CSS",
            "Node JS"
        ],
        url: "https://google.com",
        srcCode: "https://github/risakawagoe/project",
        videoTitle: "Title of first project demo video",
        videoID: "UnWUmg6fEIw",
        featured: true,
        visible: true
    },
    {
        id: "2_KLAYNW",
        title: "SFU Synapse 2",
        duration: "January - April 2023",
        preview: require("./img/preview/test.png"),
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        techStack: [
            "HTML",
            "CSS",
            "Angular JS"
        ],
        url: "https://google.com",
        srcCode: "https://github/risakawagoe/project",
        videoTitle: "Title of second project demo video",
        videoID: "lH_n29wkT_4",
        featured: false,
        visible: true
    },
    {
        id: "3_DIGAAS",
        title: "SFU Synapse 3",
        duration: "December 2022 - January 2023",
        preview: require("./img/preview/test.png"),
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        techStack: [
            "Docker",
            "GCP Compute Engine"
        ],
        url: "https://google.com",
        srcCode: "https://github/risakawagoe/project",
        videoTitle: "Title of thrid project demo video",
        videoID: "pG6iaOMV46I",
        featured: false,
        visible: true
    },
    {
        id: "4_PAUSBN",
        title: "SFU Synapse 4",
        duration: "May - August 2021",
        preview: require("./img/preview/test.png"),
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        techStack: [
            "Docker",
            "GCP Compute Engine",
            "PHP",
            "WordPress"
        ],
        url: "https://google.com",
        srcCode: "https://github/risakawagoe/project",
        videoTitle: "Title of thrid project demo video",
        videoID: "pG6iaOMV46I",
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
        videoTitle: "Title of fifth project demo video",
        videoID: "pG6iaOMV46I",
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
    return list.filter(project => {return !project.featured})
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