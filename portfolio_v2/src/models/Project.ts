export class Project {
    readonly name: string = ""
    readonly summary: string = ""
    readonly details: string = ""
    readonly start: Date = new Date();
    readonly end: Date = new Date();
    readonly featured: boolean = false
    readonly screenshots: Array<string> = []
    readonly links: {
        sourceCode: string, 
        liveDemo: string, 
        videoDemo: string
    } = { 
        sourceCode: "", 
        liveDemo: "",
        videoDemo: ""
    }
    readonly technology: {
        frontend: Array<string>, 
        backend: Array<string>, 
        deployment: Array<string>, 
        other: Array<string>
    } = {
        frontend: [], 
        backend: [], 
        deployment: [], 
        other: []
    }
    constructor(
        name: string, 
        summary: string, 
        details: string, 
        start: Date, 
        end: Date, 
        featured: boolean, 
        screenshots: Array<string>, 
        links: {
            sourceCode: string, 
            liveDemo: string, 
            videoDemo: string
        },
        technology: {
            frontend: Array<string>, 
            backend: Array<string>, 
            deployment: Array<string>, 
            other: Array<string>
        }) {
            this.name = name;
            this.summary = summary;
            this.details = details;
            this.start = start;
            this.end = end;
            this.featured = featured;
            this.screenshots = screenshots;
            this.links = links;
            this.technology = technology;
    }
    public getConcatenatedTechStack(): string[] {
        const set = new Set<string>();
        Object.values(this.technology).forEach(stack => stack.forEach(skill => set.add(skill)));
        return Array.from(set.values());
    }
}