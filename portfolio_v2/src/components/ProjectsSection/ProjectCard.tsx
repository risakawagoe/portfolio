import { FC } from "react";
import { ActionIcon, AspectRatio, Badge, Box, Button, Card, Flex, Group, Image, Pill, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconBrandGithubFilled, IconBrandYoutubeFilled, IconEyeFilled } from "@tabler/icons-react";
import '@mantine/carousel/styles.css';
import classes from './ProjectCard.module.css';

import { Project } from "../../models/Project";
import { ProjectDetials } from "./ProjectDetails";

interface Props {
    project: Project
    openModal: (element: JSX.Element, title: string) => void
}

export const ProjectCard: FC<Props> = ({ project, openModal }) => {
    const slides = project.screenshots.map((screenshot) => (
        <Carousel.Slide key={screenshot}>
            <AspectRatio ratio={16/9}>
                <Image src={screenshot} w="100%" h="100%" fit="cover" />
            </AspectRatio>
        </Carousel.Slide>
    ));
    const linkItems = [
        { url: project.links.liveDemo, icon: IconEyeFilled},
        { url: project.links.sourceCode, icon: IconBrandGithubFilled},
        { url: project.links.videoDemo, icon: IconBrandYoutubeFilled},
    ];

    const getDuration = (start: Date, end: Date): string => {
        const startStr = getFormattedDate(start);
        const endStr = getFormattedDate(end);
        return startStr === endStr ? endStr : `${startStr} - ${endStr}`;
    }

    function getFormattedDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }

    function showDetails(project: Project) {
        openModal(<ProjectDetials project={project} />, project.name);
    }

    return(
        <Card withBorder ff="var(--mantine-font-family)">
            <Card.Section withBorder>
                <Carousel withIndicators loop classNames={classes}>
                    {slides}
                </Carousel>
                
            </Card.Section>
            <Card.Section p={12} flex={1}>
                <Flex justify="space-between" direction="column" h="100%" gap={16}>
                    <Box>
                        <Group justify="flex-start">
                            {project.featured &&
                                <Badge
                                    size="md"
                                    variant="gradient"
                                    radius="sm"
                                    gradient={{ from: 'yellow', to: 'red', deg: 90 }}
                                    ff="var(--mantine-font-family)"
                                    >
                                    FEATURED
                                </Badge>}
                        </Group>
                        <Title ff="var(--mantine-font-family)" className={classes.title}>{project.name}</Title>
                        <Text ff="var(--mantine-font-family)" className={classes.duration}>{getDuration(project.start, project.end)}</Text>
                        <Text ff="var(--mantine-font-family)" className={classes.summary}>{project.summary}</Text>
                        <Group gap={8} mt={12} mb={12}>
                            {project.getConcatenatedTechStack().map(item => <Pill key={item}>{item}</Pill>)}
                        </Group>
                    </Box>
                    <Group justify="space-between">
                        <Group>
                            {linkItems.map((item, index) => (
                                <ActionIcon 
                                    key={index}
                                    variant="transparent" 
                                    size="md" 
                                    radius="xl" 
                                    color="var(--theme-dark)"
                                    className={classes.linkBtn}
                                    disabled={item.url.trim().length === 0}
                                    onClick={() => window.open(item.url, '_blank')}>
                                        <item.icon style={{ width: '80%', height: '80%' }} stroke={1.5} />
                                </ActionIcon>
                            ))}
                        </Group>
                        <Button variant="subtle" color="gray" c="var(--theme-dark)" onClick={() => showDetails(project)}>Details</Button>
                    </Group>
                </Flex>
            </Card.Section>
        </Card>
    );
}