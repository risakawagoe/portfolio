import { Project } from "../models/Project";

export async function getAllProjects(): Promise<{ success: boolean, data: Project[] }> {
    if(process.env.REACT_APP_PORTFOLIO_DB_SERVICE_ENDPOINT === undefined) {
        return { success: false, data: [] };
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_PORTFOLIO_DB_SERVICE_ENDPOINT}/api/project`, {
            method: "GET",
            mode: "cors",
        });

        if(response.ok) {
            const projects: Project[] = [];
            const result = await response.json();
            if(Array.isArray(result.data)) {
                result.data
                    .filter((obj: any) => {
                        return "published" in obj && 
                            typeof obj.published === "boolean" && 
                            obj.published && 
                            Object.keys(Project).every(key => key in obj);
                    })
                    .forEach((item: any) => {
                        const start = new Date(Date.parse(item.start));
                        const end = new Date(Date.parse(item.end));
                        const project = new Project(
                            item.name, 
                            item.summary, 
                            item.details, 
                            start, 
                            end, 
                            item.featured,
                            [...item.screenshots], 
                            item.links, 
                            item.technology);
                        projects.push(project);
                    });
                console.log(projects);
                return { success: true, data: projects };
            }
        }
    }catch(error) {
        console.error(error);
    }
    return { success: false, data: [] };
}