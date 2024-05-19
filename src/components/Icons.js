import * as React from "react"
import { Link } from "gatsby"

export default function Icons(props) {
    return (
        <div className="z-50">
            <Link
            key={props.name}
            to={props.href}
            target="_blank"
            className="z-50 m-1 block px-3 py-2 icon-color-text hover:primary-text dynamic-hover"
            >
            {props.name}
            </Link>
        </div>
    )
}