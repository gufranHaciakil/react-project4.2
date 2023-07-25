const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ali: {
            main: "#64748B",
          },

          favColor: {
            main: "#dbd5d5",
          },
        }
      : {
          // palette values for dark mode
          ali: {
            main: "teal",
          },

          favColor: {
            main: null,
          },
        }),
  },
});

export default getDesignTokens;
