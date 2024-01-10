class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"}); //cria e anexa uma shadow aberta(open)
        shadow.appendChild(this.build()); //add o html
        shadow.appendChild(this.styles()); //add os estilos
    }

    //construindo estrutura
    build() {
        const componentRoot = document.createElement("div");//aqui nas duas linhas, peguei o componente maior e disse que ele vai ter uma class chamada card
        componentRoot.setAttribute("class", "card");
        
        //card left
        const cardLeft = document.createElement("div"); 
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By" + " " + (this.getAttribute("autor") || "Anonymous"); // coloca no nome do autor, se não encontrar, insere anonymous

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        //card right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right"); 
        
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "./assets/image/default.png";
        newsImage.alt = "Foto da notícia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft); //aqui especifico que eles são filhos do componente maior(no caso "card")
        componentRoot.appendChild(cardRight);

        return componentRoot; //No final da build tem de sempre colocar essa linha para ele entrar na shadow
    }



    //estilos do componente
    styles() {
    const style = document.createElement("style");
        style.textContent = `
    .card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 70%;
        box-shadow: -1px 0px 5px 5px rgba(0,0,0,0.75);
        -webkit-box-shadow: -1px 0px 5px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 0px 5px 5px rgba(0,0,0,0.75);
    }
    
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card_left > span {
        font-weight: 400;
    }
    
    .card_left > a {
        color: #000;
        font-size: 24px;
        font-weight: bold;
        margin-top: 16px;
        text-decoration: none;
    }
    
    .card_left > p {
        color: rgb(70, 70, 70);
    }
    
    .card_right img {
        width: 200px;
    }
        `;
        return style;
    }
}

customElements.define('card-news', CardNews); //defimos qual elemento customizado estamos criando e qual o molde. Definifimos tabmém que ele vai ser chamado pelo seletor 'card-news'


//Esse é um exemplo de um esqueleto de componente mais profissional