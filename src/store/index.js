import { createStore } from "vuex";
import user from "/src/store/modules/user.js";

export const store = createStore({
    modules: {
        user,
    }
});