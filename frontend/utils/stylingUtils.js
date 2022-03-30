import theme from "../styles/theme";

export const getFocusStyles = (focusableElSelector, offSet="4px", styledElSelector = "") => {
  return `
    ${focusableElSelector}:focus ${styledElSelector} {
      outline: 5px dotted ${theme.colors.darkGreen[500]};
      outline-offset: ${offSet};
    }

    ${focusableElSelector}:focus:not(:focus-visible) ${styledElSelector} {
      outline: none;
    }

    ${focusableElSelector}:focus-visible ${styledElSelector} {
      outline: 5px dotted ${theme.colors.darkGreen[500]};
      outline-offset: ${offSet};
    }
  `;
};