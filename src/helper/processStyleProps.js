export const processStyleProps = (style) => {
    if(Array.isArray(style)) {
        return style;
    }
    return [style];
}