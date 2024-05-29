export const makeFirstLetterCapital = str => {
    const term = str.toLowerCase().trim();
    return term.charAt(0).toUpperCase() + term.slice(1);
}