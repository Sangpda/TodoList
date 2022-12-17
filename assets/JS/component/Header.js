import html from "../RRLibrary.js";

function Header() {
    return html`
        <header class="header">
            <h1>todos</h1>
            <input 
            class="new-todo" 
            placeholder="Bạn đang nghĩ gì?" 
            autofocus
            onkeyup = "event.keyCode === 13 && dispatch('Add', this.value)"
            >
        </header>
`
}


export default Header