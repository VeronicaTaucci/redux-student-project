import students from "../data/students"
const reducer = (state, action) => {
    if (state === undefined) {
        state = {
            students: students,
            count: students.length
        }
    }
    switch (action.type) {
        case "ADD_STUDENT":
            state = {
                ...state,
                students: state.students.concat(action.payload),
                count: state.count + 1
            }
       
        default:
            return state
    }
}
export default reducer