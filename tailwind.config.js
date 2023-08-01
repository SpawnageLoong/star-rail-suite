/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "black": '#000000',
        "white": '#ffffff',
        "primary": {
          DEFAULT: '#55DBC7',
          "0": "#000000",
          "5": "#001411",
          "10": "#00201C",
          "20": "#003731",
          "25": "#00443C",
          "30": "#005047",
          "35": "#005D53",
          "40": "#006B5F",
          "50": "#008678",
          "60": "#00A391",
          "70": "#2FBFAC",
          "80": "#55DBC7",
          "90": "#75F8E3",
          "95": "#B5FFF0",
          "98": "#E5FFF8",
          "99": "#F2FFFB",
          "100": "#FFFFFF"
        },
        "onPrimary": "#003731",
        "primaryContainer": "#005047",
        "onPrimaryContainer": "#75F8E3",
        "primaryFixed": "#75F8E3",
        "onPrimaryFixed": "#00201C",
        "primaryFixedDim": "#55DBC7",
        "onPrimaryFixedVariant": "#005047",
        "secondary": {
          DEFAULT: "#B1CCC6",
          "0": "#000000",
          "5": "#001411",
          "10": "#06201C",
          "20": "#1C3530",
          "25": "#27403B",
          "30": "#334B47",
          "35": "#3E5752",
          "40": "#4A635E",
          "50": "#627C77",
          "60": "#7C9690",
          "70": "#96B1AA",
          "80": "#B1CCC6",
          "90": "#CDE8E1",
          "95": "#DBF7F0",
          "98": "#E5FFF8",
          "99": "#F2FFFB",
          "100": "#FFFFFF"
        },
        "onSecondary": "#1C3530",
        "secondaryContainer": "#334B47",
        "onSecondaryContainer": "#CDE8E1",
        "secondaryFixed": "#CDE8E1",
        "onSecondaryFixed": "#06201C",
        "secondaryFixedDim": "#B1CCC6",
        "onSecondaryFixedVariant": "#334B47",
        "tertiary": {
          DEFAULT: "#ACCAE5",
          "0": "#000000",
          "5": "#001220",
          "10": "#001E30",
          "20": "#143349",
          "25": "#203E54",
          "30": "#2C4A60",
          "35": "#39556C",
          "40": "#456179",
          "50": "#5D7A93",
          "60": "#7794AD",
          "70": "#91AFC9",
          "80": "#ACCAE5",
          "90": "#CBE6FF",
          "95": "#E6F2FF",
          "98": "#F7F9FF",
          "99": "#FCFCFF",
          "100": "#FFFFFF"
        },
        "onTertiary": "#143349",
        "tertiaryContainer": "#2C4A60",
        "onTertiaryContainer": "#CBE6FF",
        "tertiaryFixed": "#CBE6FF",
        "onTertiaryFixed": "#001E30",
        "tertiaryFixedDim": "#ACCAE5",
        "onTertiaryFixedVariant": "#2C4A60",
        "error": {
          DEFAULT: "#FFB4AB",
          "0": "#000000",
          "5": "#2D0001",
          "10": "#410002",
          "20": "#690005",
          "25": "#7E0007",
          "30": "#93000A",
          "35": "#A80710",
          "40": "#BA1A1A",
          "50": "#DE3730",
          "60": "#FF5449",
          "70": "#FF897D",
          "80": "#FFB4AB",
          "90": "#FFDAD6",
          "95": "#FFEDEA",
          "98": "#FFF8F7",
          "99": "#FFFBFF",
          "100": "#FFFFFF"
        },
        "onError": "#690005",
        "errorContainer": "#93000A",
        "onErrorContainer": "#FFDAD6",
        "outline": "#899390",
        "background": "#191C1B",
        "onBackground": "#E0E3E1",
        "surface": "#101413",
        "onSurface": "#C4C7C5",
        "surfaceVariant": "#3F4946",
        "onSurfaceVariant": "#BEC9C5",
        "inverseSurface": "#E0E3E1",
        "inverseOnSurface": "#191C1B",
        "inversePrimary": "#006B5F",
        "shadow": "#000000",
        "surfaceTint": "#55DBC7",
        "outlineVariant": "#3F4946",
        "scrim": "#000000",
        "surfaceContainerHighest": "#323534",
        "surfaceContainerHigh": "#272B2A",
        "surfaceContainer": "#1D201F",
        "surfaceContainerLow": "#191C1B",
        "surfaceContainerLowest": "#0B0F0E",
        "surfaceBright": "#363A39",
        "surfaceDim": "#101413",
        "neutral": {
          "0": "#000000",
          "5": "#0E1211",
          "10": "#191C1B",
          "20": "#2D3130",
          "25": "#383C3B",
          "30": "#444746",
          "35": "#505352",
          "40": "#5C5F5E",
          "50": "#747876",
          "60": "#8E9190",
          "70": "#A9ACAA",
          "80": "#C4C7C5",
          "90": "#E0E3E1",
          "95": "#EFF1EF",
          "98": "#F7FAF8",
          "99": "#FAFDFB",
          "100": "#FFFFFF"
        },
        "neutralVariant": {
          "0": "#000000",
          "5": "#091311",
          "10": "#141D1B",
          "20": "#293230",
          "25": "#343D3B",
          "30": "#3F4946",
          "35": "#4B5452",
          "40": "#56605E",
          "50": "#6F7976",
          "60": "#899390",
          "70": "#A3ADAA",
          "80": "#BEC9C5",
          "90": "#DAE5E1",
          "95": "#E9F3EF",
          "98": "#F1FCF8",
          "99": "#F4FFFB",
          "100": "#FFFFFF",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

