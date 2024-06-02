import { type ComponentPropsWithoutRef } from "react";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
	return <h1 className="text-3xl font-bold underline bg-red-600" {...props} />;
}
