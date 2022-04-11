import theme from "../styles/theme";

export const getFocusStyles = (focusableElSelector, offSet="4px", styledElSelector = "", offSetColor="darkGreen") => {
  const colors = {
    'darkGreen': theme.colors.darkGreen[500],
    'white': theme.colors.white,
  }

  return `
    ${focusableElSelector}:focus ${styledElSelector} {
      outline: 5px dotted ${colors[offSetColor]};
      outline-offset: ${offSet};
    }

    ${focusableElSelector}:focus:not(:focus-visible) ${styledElSelector} {
      outline: none;
    }

    ${focusableElSelector}:focus-visible ${styledElSelector} {
      outline: 5px dotted ${colors[offSetColor]};
      outline-offset: ${offSet};
    }
  `;
};