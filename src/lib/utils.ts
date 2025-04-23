import fs from "node:fs/promises";
import { GLOBAL } from "./variables";

type MarkdownData<T extends object> = {
  frontmatter: T;
  file: string;
  url: string;
};


/**
 * This function processes the content of a directory and returns an array of processed content.
 * It takes a content type, a function to process the content, and an optional directory.
 * If no directory is provided, it defaults to the current working directory.
 * 
 * @param contentType the type of content to process
 * @param processFn the function to process the content
 * @param dir the directory to process the content from
 * @returns a promise that resolves to an array of processed content
 */
export const processContentInDir = async <T extends object, K>(
  contentType: "projects",
  processFn: (data: MarkdownData<T>) => K,
  dir: string = process.cwd(),
) => {
  const files = await fs.readdir(dir + `/src/pages/${contentType}`);
  const markdownFiles = files
    .filter((file: string) => file.endsWith(".md"))
    .map((file) => file.split(".")[0]);
  const readMdFileContent = async (file: string) => {
    const content = import.meta
      .glob(`/src/pages/projects/*.md`)
      [`/src/pages/projects/${file}.md`]();
    const data = (await content) as {
      frontmatter: T;
      file: string;
      url: string;
    };
    return processFn(data);
  };
  return await Promise.all(markdownFiles.map(readMdFileContent));
};

/**
 * Acorta una cadena de texto eliminando palabras al final hasta que se ajuste a una longitud determinada.
 * @param content el contenido a acortar
 * @param maxLength la longitud máxima del contenido acortado (por defecto es 20)
 * @returns una versión acortada del contenido
 */
export const getShortDescription = (content: string, maxLength = 20) => {
  const splitByWord = content.split(" ");
  const length = splitByWord.length;
  return length > maxLength ? splitByWord.slice(0, maxLength).join(" ") + "..." : content;
};

/**
 * Genera una URL de origen para un elemento de contenido. La URL se utiliza en meta tags y tarjetas de redes sociales.
 * @param sourceUrl la URL de origen del contenido
 * @param contentType el tipo de contenido (projects)
 * @returns una cadena que representa la URL de origen con el dominio apropiado
 */
export const generateSourceUrl = (
  sourceUrl: string,
  contentType: "projects",
) => {
  // Traducir la ruta si el contentType es "projects"
  const contentPath = contentType === "projects" ? "proyectos" : contentType;
  return `${GLOBAL.rootUrl}/${contentPath}/${sourceUrl}`;
};