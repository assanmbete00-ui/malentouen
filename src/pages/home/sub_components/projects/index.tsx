import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Button from "@components/button";
import Section from "@components/section";

import useProjects from "./hooks/use_projects";

import ProjectsContent from "./sub_components/projects_content";
import ProjectsList from "./sub_components/projects_list";

import styles from "./styles";

export default function Projects() {
  const projects = useProjects();

  return (
    <Section
      id="projects"
      variant="paper"
      containerSize="wide"
    >
      <Box sx={styles.container}>
        <ProjectsContent {...projects.content} />

        {projects.options.showItems && (
          <ProjectsList items={projects.items} />
        )}

        {projects.options.showAction && (
          <Box sx={styles.action}>
            <RouterLink
              to={projects.action.href}
              style={{ textDecoration: "none" }}
            >
              <Button>{projects.action.label}</Button>
            </RouterLink>
          </Box>
        )}
      </Box>
    </Section>
  );
}