import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

// стилі для модалки у разі перевикористання коду
// export const modalStyles = css`
//   top: 50%;
//   left: 50%;
//   right: auto;
//   bottom: auto;
//   margin-right: -50%;
//   transform: translate(-50%, -50%);
//   z-index: 1300;
//   padding: 0;
// `;

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		width: 100vw;
		overflow-x: hidden;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	body {
		margin: 0;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		font-size: 16px;
		color: ${p => p.theme.colors.dark};
		background-color: ${p => p.theme.colors.light};
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		font-family: inherit;
		padding: 0;
		margin: 0;
	}
`;
