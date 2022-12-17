import html from "../RRLibrary.js";
import { connect } from "../store.js";


function TodoItem({ todo, index, editIndex}) {
    return html`
        <li 
            class="${todo.completed && 'completed'} 
            ${editIndex===index && 'editing'}"
            ondblclick="dispatch('startEdit', ${index})"
            >
                <div class="view">
                    <input 
                        class="toggle" 
                        type="checkbox" 
                        ${todo.completed && 'checked'}
                        onchange="dispatch('toggle', ${index})"
                    >
                        <label>${todo.title}</label>
                        <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
                </div>
                <input 
                    class="edit" 
                    value="${todo.title}"
                    onkeyup = "event.keyCode === 13 && dispatch('endEdit', this.value.trim()) 
                    || event.keyCode === 27 && dispatch('cancelEdit')"
                    onblur ="dispatch('endEdit', this.value.trim())"
                >
        </li>
`
} 
export default connect()(TodoItem)