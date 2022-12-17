import storage from "../JS/component/util/storage.js"

const unit = {
    todos: storage.get(),
    filter: "all",
    filters: {
        all:() => true,
        active:todo => !todo.completed,
        completed:todo => todo.completed
    },
    editIndex: null,
}

const actions = {
    Add({ todos }, title) {
        const isActive = todos.map(todo => todo.title).find(titleActive => titleActive===title)

        if (title && !isActive) {
            todos.push({
                title,
                completed: false,
            })
            storage.set(todos);
        }
        if (title && isActive){
            alert("TODO WAS IN TASK-LIST")
        }
        setTimeout(() => {
            document.querySelector(".new-todo").focus();
        }, 0)

    },
   toggle({ todos }, index) {
    const todo = todos[index]
    todo.completed = !todo.completed
    storage.set(todos)
   },
    toggleAll({ todos }, check) {
    todos.forEach((todo) => todo.completed = check);
   },
   destroy({ todos }, index) {
    todos.splice(index, 1)
    storage.set(todos)
   },
   switchFilter( state, newFilter){
    state.filter = newFilter
   },
   clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active)
    storage.set(state.todos)
   },
   startEdit( state, index) {
    if(!state.todos[index].completed){
        state.editIndex = index
    }
    setTimeout(() => {
        document.querySelectorAll(".edit")[index].focus();
    }, 0)
   },
   endEdit(state, titleEdited) {
    if(state.editIndex!==null) {
        if(titleEdited) {
            state.todos[state.editIndex].title = titleEdited
            storage.set(state.todos)
        }else {
            this.destroy(state, state.editIndex)  
        }
        state.editIndex = null
    }
   },
   cancelEdit(state) {
    if(state.editIndex!==null) {
        state.editIndex = null
        storage.set(state.todos)
    }
   },
   

}


export default function reducer(state = unit, action, ...args) {
    actions[action] && actions[action](state, ...args)
    return state;
}