import * as React from "react"
import { 
    CgProfile, CgNotes,
    CgCodeSlash, CgArrowRight, 
    CgPhone, CgMusic, CgBolt
 } from "react-icons/cg"
import { 
    BIO_LINK_NAME, CONTACT_LINK_NAME, 
    PROJECTS_LINK_NAME, RESUME_LINK_NAME } from "./links";

let iconSize = 20;

export function iconSelector(str) {
    switch(str) {
        case RESUME_LINK_NAME: return <CgNotes size={iconSize} />;
        case BIO_LINK_NAME: return <CgProfile size={iconSize} />;
        case CONTACT_LINK_NAME: return <CgPhone size={iconSize} />;

        // Projects could have many icons. Uncomment your favorite!
        case PROJECTS_LINK_NAME: return <CgCodeSlash size={iconSize} />; //Code symbol
        // case PROJECTS_LINK_NAME: return <CgMusic size={iconSize} />; //Music symbol
        // case PROJECTS_LINK_NAME: return <CgBolt size={iconSize} />; //Lightning bolt symbol

        // Arrow displayed on hover for all buttons
        case "arrow": return <CgArrowRight size={iconSize} />;
    }
}