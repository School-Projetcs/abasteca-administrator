import { MeaningProps } from './type';
import { default as book } from './book.json';

const getMeaning = (path: string[], getFrom, index, notFound) => {
    if (path[index] in getFrom && index === path.length - 1) {
        return typeof getFrom[path[index]] === 'object'
            ? notFound
            : getFrom[path[index]];
    }

    if (!(path[index] in getFrom)) return notFound;

    return getMeaning(path, getFrom[path[index]], index + 1, notFound);
};

export const capitalizeWord = (word: string) =>
    word.substring(0, 1).toUpperCase().concat(word.substring(1, word.length));

/**
 * takes the text corresponding to the path entered
 * @param wordPath represents the full path. example: path.existent.path
 * @param capitalized if true capitalize first word
 * @param values replace {value index} by paced values
 * @returns a final strings according the params given if the path exist or wordPath joined with '.' and undefined if there's no correspondence
 */
const meaning = (wordPath: string, props?: MeaningProps) => {
    const capitalized: boolean = props?.capitalized && props.capitalized;
    const values: string[] | number[] = (props?.values && props.values) || [];

    const wordPaths = wordPath.split('.');
    let text = `[${wordPath}.undefined]`;
    const currentPathJson = book;

    if (!(wordPaths[0] in currentPathJson)) return text;

    text = getMeaning(wordPaths, currentPathJson, 0, text);
    if (values) {
        values.forEach((value, index) => {
            text = text.replace(`{value${index}}`, value);
        });
    }
    if (capitalized) {
        return capitalizeWord(text);
    }
    return text;
};

export { meaning };
