declare module '@env' {
  export const SPREADSHEET_ID: string;
  export const SPREADSHEET_NAME: string;
  export const API_KEY: string;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
