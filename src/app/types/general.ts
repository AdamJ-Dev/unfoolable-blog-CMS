export type Cookies = Record<string, string | undefined>;

export type DBObjId = {
  toString: () => string;
};

export type CssSize = string | number;

export type CustomForm<InputNames extends string> = HTMLFormElement & Record<InputNames, HTMLInputElement>;
