import { FC } from "react"
import { Project } from "../../models/Project";
import { Anchor, AspectRatio, Badge, Card, Container, Flex, Group, Pill, Stack, Title, Text, TypographyStylesProvider } from "@mantine/core";
import { FilesList } from "./FilesList";
import { IconBrandGithubFilled, IconBrandYoutubeFilled, IconEyeFilled } from "@tabler/icons-react";

interface Props {
    project: Project
}

export const ProjectDetials: FC<Props> = ({ project }) => {
    const stacks = [
        { name: "Frontend", items: project.technology.frontend },
        { name: "Backend", items: project.technology.backend },
        { name: "Deployment", items: project.technology.deployment },
        { name: "Other", items: project.technology.other },
    ];
    const linkItems = [
        { url: project.links.liveDemo, icon: IconEyeFilled},
        { url: project.links.sourceCode, icon: IconBrandGithubFilled},
        { url: project.links.videoDemo, icon: IconBrandYoutubeFilled},
    ];
    function isValidYoutubeEmbedUrlFormat(): boolean {
        const prefix = "https://www.youtube.com/embed/";
        if(project.links.videoDemo.length > prefix.length && project.links.videoDemo.substring(0, prefix.length) === prefix) {
            const remaining = project.links.videoDemo.substring(prefix.length);
            if(remaining.length > 0) {
                return true;
            }
        }
        return false;
    }
    return(
        <Container size="md" ff="var(--mantine-font-family)" pl={0} pr={0} mb={32}>
            <FilesList files={project.screenshots} />
            <Title size="h2" c="var(--theme-green)" fw={500} style={{ lineHeight: 1.5 }} mt={12}><span style={{ marginRight: "20px"}}>{project.name}</span>{project.featured &&
                <Badge
                    size="md"
                    variant="gradient"
                    radius="sm"
                    gradient={{ from: 'yellow', to: 'red', deg: 90 }}
                    ff="var(--mantine-font-family)"
                    >
                    FEATURED
                </Badge>}</Title>
            <Text fz={16} mt={12}>{project.summary}</Text>
            <Card withBorder mt={20}>
                <Stack gap={10}>
                    {stacks.map(stack => 
                        <>
                        <Text fw={500} miw={100}>{stack.name} </Text>
                        <Group gap={8}>
                            {stack.items.map(item => <Pill>{item}</Pill>)}
                        </Group>
                        </>
                    )}
                </Stack>
            </Card>
            <Title fz={20} fw={500} mt={24} mb={8} c="var(--theme-green)">Links</Title>
            <Flex justify="flex-start" direction="column" w="100%" gap={8}>
                {linkItems.map(item => (
                    <Group gap={12}>
                        <item.icon style={{ width: '20px', height: '20px' }} stroke={1.2} />
                        {item.url.trim().length > 0 ?
                        <Anchor href={item.url} target="_blank">{item.url}</Anchor>:
                        <Text c="dimmed">not available</Text>}
                    </Group>
                ))}
            </Flex>
            {isValidYoutubeEmbedUrlFormat() &&
                <AspectRatio ratio={16 / 9} mt={12} w="100%">
                <iframe
                src={project.links.videoDemo}
                title="YouTube video player"
                style={{ border: 0, width: "100%" }}
                allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope;"
                allowFullScreen
                />
            </AspectRatio>}
            
            <Title fz={20} fw={500} mt={24} mb={8} c="var(--theme-green)">Notes</Title>
            <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: project.details }} />
            </TypographyStylesProvider>
        </Container>
    );
}