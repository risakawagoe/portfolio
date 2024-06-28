import { Box, Container, Group, MultiSelect, SegmentedControl, SimpleGrid, Text, Title } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import "./ProjectsSection.css";
import { getAllProjects } from "../../controllers/projects-controller";
import { Project } from "../../models/Project";
import { ProjectCard } from "./ProjectCard";
import "./ProjectsSection.css";
import { useScrollIntoView } from "@mantine/hooks";

interface Props {
    addToMenu: (section: string, scroller: () => void) => void
    openModal: (element: JSX.Element, title: string) => void
}

export const ProjectsSection: FC<Props> = ({ addToMenu, openModal }) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });
    const defautFilter = 'FEATURED PROJECTS';
    const [projects, setProjects] = useState<Project[]>([]);
    const [visibleProjects, setVisisbleProjects] = useState<Project[]>([]);
    const [filters, setFilters] = useState<string[]>([defautFilter]);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([defautFilter]);
    const searchOptions = [ 'all', 'any' ];
    const [searchOption, setSearchOption] = useState<string>(searchOptions[0]);
    useEffect(() => {
        addToMenu("Projects", scrollIntoView);
        fetchProjects();
    }, []);


    useEffect(() => {
        setVisisbleProjects(getFilteredList());
    }, [projects, selectedFilters, searchOption]);

    function getFilteredList() {
        const filtered = projects.filter(project => {
            if(searchOption === 'all') {
                const hit = selectedFilters.every(filter => {
                    if(filter === defautFilter) {
                        return project.featured;
                    }else {
                        return project.getConcatenatedTechStack().includes(filter);
                    }
                });
                return hit;
            }else if(searchOption === 'any') {
                const hit = selectedFilters.some(filter => {
                    if(filter === defautFilter) {
                        return project.featured;
                    }else {
                        return project.getConcatenatedTechStack().includes(filter);
                    }
                });
                return hit;
            }else {
                return true;
            }
        });
        return filtered;
    }


    async function fetchProjects() {
        const result = await getAllProjects();
        if(result.success) {
            const sorted = result.data.sort((a, b) => {
                if(a.end === b.end) {
                    return 0;
                }else if(a.end < b.end) {
                    return 1;
                }else {
                    return -1;
                }
            });
            setFilters([defautFilter, ...getFilters(sorted)]);
            setProjects(sorted);
        }else {
            alert('Sorry.. something went wrong, we are currently unable to fetch project data.');
        }
    }

    function getFilters(projects: Project[]): string[] {
        const filters = new Set<string>();
        projects.forEach(project => {
            project.getConcatenatedTechStack().forEach(item => filters.add(item));
        })
        return Array.from(filters.values());
    }
    return(
        <Box pt={120} pb={120}>
            <Container p={40}  w={1200} maw="100%" className="wrapper">
            <Title size="h1" fw={400} ref={targetRef}>#Projects</Title>
            <Group align="flex-end" w="100%" mt={40} style={{ fontFamily: "var(--mantine-font-family)" }}>
                <MultiSelect
                    label="Filter"
                    placeholder="Pick filters"
                    data={filters}
                    searchable
                    value={selectedFilters}
                    onChange={setSelectedFilters}
                    nothingFoundMessage="Nothing found..."
                    flex={1}
                    />
                <Group>
                    <Text style={{ fontFamily: "var(--mantine-font-family)" }}>matching</Text>
                    <SegmentedControl
                        value={searchOption}
                        onChange={setSearchOption}
                        data={searchOptions}
                    />
                </Group>
            </Group>
            <SimpleGrid
                mt={20}
                w="100%"
                cols={{ base: 1, xs: 2, md: 3 }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}>
                    {visibleProjects.map((project, index) => <ProjectCard project={project} openModal={openModal} key={index} />)}
            </SimpleGrid>
            </Container>
        </Box>
    );
}