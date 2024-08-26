import type { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Renders a React element to static HTML markup.
 *
 * @param reactElement - React element.
 * @returns - HTML markup.
 */
export const render = (reactElement: ReactElement): string =>
  renderToStaticMarkup(reactElement);
