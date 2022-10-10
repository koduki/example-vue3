import { store } from '/src/store/'

export default {
    login(user) {
        store.dispatch("user/store", {
            id: user.id,
            token: Math.random().toString(32).substring(2),
        });
    },
    logout() {
        store.dispatch("user/drop");
    },
    isAuth() {
        if (store.state.user.token) {
            return true;
        } else {
            return false;
        }
    },
    user() {
        return {
            id: store.state.user.id,
            token: store.state.user.token,
        }
    }
};