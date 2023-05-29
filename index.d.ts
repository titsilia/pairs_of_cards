declare module "*.svg";

declare module "*templateEngine" {
    export default function templateEngine(elem: object): Node;
}
