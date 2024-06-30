import { AspectRatio, Box, Container, Image, Text, Title, Transition } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import "./ResumeSection.css";

import { getProfile } from "../../controllers/profile-controller";
import { useScrollIntoView } from "@mantine/hooks";
import sectionTransitionPatchTop from "../../images/transition-patch-top.png";
import sectionTransitionPatchBottom from "../../images/transition-patch-bottom.png";

interface Props {
    addToMenu: (section: string, scroller: () => void) => void
}


export const ResumeSection: FC<Props> = ({ addToMenu }) => {
    const [resume, setResume] = useState<string>("");
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    useEffect(() => {
        addToMenu("Resume", scrollIntoView);
        fetchResumePages();
    }, []);

    async function fetchResumePages() {
        const result = await getProfile();
        if(result.success) {
            if("resume" in result.data && typeof result.data.resume === "string") {
                setResume(result.data.resume);
            }
        }
    }
    return(
        <Box style={{ backgroundColor: "var(--theme-green)" }} c="#fff" pt={120} pb={160} pos="relative">
            <Image w="100%" src={sectionTransitionPatchTop} pos="absolute" top={0} left={0} style={{ transform: "translateY(-30%)" }} />
            <Container p={40}  w="100%" maw={720} className="wrapper">
                <Title size="h1" fw={400} ref={targetRef} mb={24}>#Resume</Title>
                
                <Transition
                    mounted={resume.length > 0}
                    transition="fade"
                    duration={400}
                    timingFunction="ease"
                    >
                    {(styles) => <div style={styles}>
                        <AspectRatio ratio={1/1.294} w="100%">
                            <iframe width="100%" height="100%" src={`${resume}#view=fitH&toolbar=0`} /> 
                        </AspectRatio>
                        </div>}
                </Transition>
                {resume.length === 0 && <Text mt={12}>Currently not available.</Text>}
            </Container>
            <Image w="100%" src={sectionTransitionPatchBottom} pos="absolute" bottom={0} left={0} style={{ transform: "translateY(30%)" }} />
        </Box>
    );
}