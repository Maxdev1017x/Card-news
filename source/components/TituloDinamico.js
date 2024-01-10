class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        //base do componente
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo"); //criação um atribudo para ser usado no html

        //estilizar o component
        const style = document.createElement('style');
        style.textContent = `
        h1 {
            color: gray;
        }
        `
        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);
