import { JSON } from './json';

export type JSXLiteNode = {
  '@type': '@jsx-lite/node';
  name: string;
  meta: { [key: string]: JSON };
  properties: { [key: string]: string | undefined };
  // TODO: I think in our usage these values are always strings. Make a decision and change to reflect
  bindings: { [key: string]: string | undefined };
  children: JSXLiteNode[];
};
