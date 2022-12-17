
function stateLogger(reducer) {
    return (privState, action, ...args) => {
        console.group(action)
        console.log("PrivState: ", privState);
        console.log("State Argrument: ", args);
        const nextState = reducer(privState, action, ...args);
        console.log("NextState: ", nextState);
        console.groupEnd()
        return nextState;
    }
}


export default stateLogger