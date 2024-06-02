import type { MDXComponents } from "mdx/types";
import { Heading } from "@/components/heading";
import Sidebar from "@/components/Sidebar"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: Heading,
    Sidebar: Sidebar,
    ...components,
  };
}

//https://g.co/gemini/share/0d9ff3c06e26
type MyMDXComponents = MDXComponents & {
  Sidebar: React.FC; 
};
