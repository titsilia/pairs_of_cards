export function templateEngine(block: Template | Template[]) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode("");
    }

    if (typeof block === "string" || typeof block === "number") {
        return document.createTextNode(String(block));
    }

    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();
        block.forEach((item) => {
            const el = templateEngine(item);
            fragment.appendChild(el);
        });
        return fragment;
    }

    const element = document.createElement(block.tag);

    if (block.cls) {
        if (Array.isArray(block.cls)) {
            element.classList.add(...block.cls);
        } else {
            element.classList.add(block.cls);
        }
    }

    if (block.attrs) {
        const keys = Object.entries(block.attrs);
        keys.forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }

    if (block.content) {
        const content = templateEngine(block.content);
        element.appendChild(content);
    }

    return element;
}

export type Template =
    | {
          tag: string;
          cls: string | string[];
          content?: Template[] | Template;
          attrs?: {
              [key: string]: string;
          };
      }
    | string
    | number
    | false;
