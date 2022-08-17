import { extendTheme } from "@chakra-ui/react";

export const colors = {
    tosca: {
        a: "#64B6AC",
        b: "#DAFFEF",
        c: "#409EA2",
        d: "#64B6AC",
    }
}

export const fonts = {
    title: 'dimitri',
    main: "'intel', 'sans-serif'",
    m: "adiinnaka"
}

const theme = extendTheme({ colors, fonts })
export default theme