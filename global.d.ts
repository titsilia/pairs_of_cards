export {};

declare module "*.svg";

declare module "*templateEngine" {
    export default function templateEngine(elem: object): Node;
}

type appType = {
    cardsRenders: Array<string>;
    firstCard: string;
    secondCart: string;
    resultImg: string;
    textResult: string;
};

declare global {
    interface Window {
        application: appType;
    }
}
