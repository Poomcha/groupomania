import axios from 'axios';

const state = {
  updateProfile: false,
  local_profile: null,
  local_profiles: null,
};

const getters = {
  get_update_status(state) {
    return state.updateProfile;
  },
  get_local_profile(state) {
    return state.local_profile;
  },
};

const mutations = {
  set_update_status(state) {
    state.updateProfile = !state.updateProfile;
  },
  set_local_profile(state, profile) {
    state.local_profile = profile;
  },
};

const actions = {
  commit_update_status({ commit }) {
    commit('set_update_status');
  },
  update_profile({ commit, dispatch }, data) {
    const formData = new FormData();
    if (data.form.image) {
      formData.append('image', data.form.image);
    }
    formData.append('firstName', data.form.firstName);
    formData.append('lastName', data.form.lastName);
    formData.append('position', data.form.position);
    formData.append('description', data.form.description);
    axios
      .put(`/users/${data.userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        axios
          .get(`users/${data.userId}`)
          .then((res) => {
            commit('set_user_profile', res.data);
            dispatch('change_profile_status', true);
            commit('set_update_status');
          })
          .catch((error) => {
            console.log(error.toJSON());
          });
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  },
  get_one_profile({ commit }, userId) {
    axios
      .get(`/users/${userId}`)
      .then((res) => {
        commit('set_local_profile', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default { state, getters, mutations, actions };
