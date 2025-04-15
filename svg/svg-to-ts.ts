import * as fs from "node:fs";

const brands = fs.readdirSync("./brand");

for (let filename of brands) {
	const iconName = `FlatBrand${toPascalCase(filename.slice(10, filename.length - 4))}`;

	fs.writeFileSync(
		`../src/brand/${kebabCase(iconName)}.ts`,
		`import  ${iconName} from "../../svg/brand/${filename}";

export {${iconName}};
`
	);
}

/* -------------------------------------------------------------------------------------------------- */

const regulars = fs.readdirSync("./regular");

for (let filename of regulars) {
	const iconName = `FlatRegular${toPascalCase(filename.slice(6, filename.length - 4))}`;

	fs.writeFileSync(
		`../src/regular/${kebabCase(iconName)}.ts`,
		`import  ${iconName} from "../../svg/regular/${filename}";

export {${iconName}};
`
	);
}

function toCamelCase(text: string) {
	return text.replace(/-\w/g, clearAndUpper);
}

function toPascalCase(text: string) {
	return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
	return text.replace(/-/, "").toUpperCase();
}

function kebabCase(str: string) {
	return str
		.split("")
		.map((letter, idx) => {
			return letter.toUpperCase() === letter ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter;
		})
		.join("")
		.toLowerCase();
}
