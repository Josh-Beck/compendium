
// Change these to change the name, route and icon of your pages.
export const BIO_LINK_NAME = "bio";
export const PROJECTS_LINK_NAME = "projects";
export const CONTACT_LINK_NAME = "contact";

//Don't change the resume link unless you know what you're doing!
export const RESUME_LINK_NAME = "resume";

/* 
NOTHING BELOW NEEDS TO BE CHANGED UNLESS YOU ARE MAKING 
A LOT CHANGES TO THE LINKING SYSTEM. 

To change the names of links, change the variable above to
the name of the link you want, then reference the ReadME to
change the associated Card javascript or the text markdown file.
*/

function capitalize(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

export const linkInformation = [
    {
        "icon":BIO_LINK_NAME,
        "title":capitalize(BIO_LINK_NAME),
        "href":"/"+BIO_LINK_NAME
    },
    {
        "icon":PROJECTS_LINK_NAME,
        "title":capitalize(PROJECTS_LINK_NAME),
        "href":"/"+PROJECTS_LINK_NAME
    },
    {
        "icon":CONTACT_LINK_NAME,
        "title":capitalize(CONTACT_LINK_NAME),
        "href":"/"+CONTACT_LINK_NAME
    },

    /*
    The resume link is special, don't change unless you
    know what you're doing with website file downloads!
    
    If you simply want to change the file name, follow
    the "Resume Download" section of the ReadME.
    You will just change the "resume" variable above and
    upload an associated file name. This below WILL NOT CHANGE.
    */
    {
        "icon":RESUME_LINK_NAME,
        "title":capitalize(RESUME_LINK_NAME),
        "href":"/"+RESUME_LINK_NAME+".pdf"
    },
]