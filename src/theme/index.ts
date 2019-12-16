import colors, { Colors } from './colors'

export type Theme = {
    colors: Colors;
}

const defaultTheme: Theme = {
    colors,
}

export function getTheme(): Theme {
    return defaultTheme;
}
