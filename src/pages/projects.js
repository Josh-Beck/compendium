import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { projectInformation } from "../content/data/projects";
import { PROJECTS_LINK_NAME } from "../content/site/links";

export default function Projects() {
  return <div>
            <SideBarLayout name={PROJECTS_LINK_NAME}>
                {projectInformation.map((project) => (
                        <Card 
                            cardTitle={project.title}
                            cardSubTitle={project.name} 
                            cardDate={project.date}
                            cardData={project.data}
                            href={project.href}
                            video={project.video} />
                ))}
            </SideBarLayout>     
        </div>
}
