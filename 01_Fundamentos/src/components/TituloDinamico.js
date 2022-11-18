class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: "open",
        });

        //Base do component <h1>Felipe</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //Estilizar Component (css)
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        //Enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}
//O hifén é importante para diferenciar de elementos
customElements.define("titulo-dinamico", TituloDinamico);
