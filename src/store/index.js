import { createStore } from 'vuex';

import axios from 'axios';

export default createStore({
    state: {
        fetching:false,
        loadedUser:null,
        error:"",
        imgSize:4096
    },
    mutations:{
        setFetching(state, fetching) {
            state.fetching = fetching;
        },
        setLoadedUserData(state, user) {
            state.loadedUser = user;
        },
        setErrorMessage(state, message) {
            state.error = message;
        },
        setImageSize(state, size) {
            state.imgSize = size;
        }
    },
    actions:{
        async fetchUser(state, id) {
            state.commit("setFetching", true);

            try {
                const userRequest = await axios.get(`/api/avatarfetch?id=${id}`);
                state.commit("setLoadedUserData", userRequest.data);
                state.commit("setFetching", false);
            } catch (err) {
                state.commit("setErrorMessage", "Couldn't retrieve this user");
                state.commit("setFetching", false);
            };
        }
    }
})
