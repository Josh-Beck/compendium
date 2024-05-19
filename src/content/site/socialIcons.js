import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiHackthebox } from "react-icons/si"
import { PiYoutubeLogoFill } from "react-icons/pi"

export const icons = [
    { 
        name: <FaLinkedin size={30} />,
        href: 'https://www.linkedin.com/posts/joshuatbeck_website-resume-opensourcesoftware-activity-7090107148017266688-eQxH'
    },
    { 
        name: <FaGithub size={30} />,
        href: 'https://github.com/Josh-Beck/Portfolio-Website-Template'
    },
    {
        name: <SiHackthebox size={30} />,
        href: 'https://app.hackthebox.com/'
    },
    {
        name: <PiYoutubeLogoFill size={30} />,
        href: 'https://www.youtube.com/'
    }
]