import { FC, useEffect, useState } from "react"
import { getProfile } from "../../controllers/profile-controller";
import { Button, Image } from "@mantine/core";
import linkedinLogo from "../../images/logos/logos_linkedin.png";
import githubLogo from "../../images/logos/logos_github.png";
import resumeLogo from "../../images/logos/logos_resume.png";

interface Links {
    linkedin?: string
    github?: string
    resume?: string
}

export const LinkButtons: FC = () => {
    const [links, setLinks] = useState<Links>({});

    useEffect(() => {
        fetchProfile();
    }, []);

    async function fetchProfile() {
        const result = await getProfile();
        if(result.success) {
            const data = result.data;
            const linkedin = isValidLink("linkedin", data) ? data.linkedin : undefined;
            const github = isValidLink("github", data) ? data.github : undefined;
            const resume = isValidLink("resume", data) ? data.resume : undefined;
            setLinks({ linkedin, github, resume })
        }
    }

    const linkedinBtn = (
        <Button variant="default" onClick={() => openExternalLink(links.linkedin)}>
            <Image w={56} src={linkedinLogo} />
        </Button>);
    const githubBtn = (
        <Button variant="default" onClick={() => openExternalLink(links.github)}>
            <Image w={56} src={githubLogo} />
        </Button>);
    const resumeBtn = (
        <Button variant="default" onClick={() => openExternalLink(links.resume)}>
            <Image w={56} src={resumeLogo} />
        </Button>);

    function openExternalLink(url?: string) {
        if(url !== undefined && url.trim().length > 0) {
            window.open(url, '_blank');
        }
    }

    function isValidLink(field: string, data: any) {
        return field in data && typeof data[field] === "string" && data[field].trim().length > 0;
    }

    return(
        <>
            {links.linkedin !== undefined && linkedinBtn}
            {links.github !== undefined && githubBtn}
            {links.resume !== undefined && resumeBtn}
        </>
    );
}