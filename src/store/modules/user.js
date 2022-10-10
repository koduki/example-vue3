export default {
    namespaced: true,
    state: {
        id: "",
        token: "",
    },
    mutations: {
        store(state, user) {
            state.id = user.id;
            state.token = user.token;
        },
        drop(state) {
            state.id = state.token = "";
        },
    },
    actions: {
        store(context, user) {
            context.commit("store", user);
        },
        drop(context) {
            context.commit("drop");
        }
    }
}