import Vue from 'vue';

export const state = () => ({
  producers: [],
});

export const mutations = {
  addProducerToArray(state, {newProducer}) {
    state.producers.push(newProducer);
  },
  removeById(state, {_id}) {
    let index = state.producers.findIndex(p => p._id === _id);
    state.producers.splice(index, 1);
  },
  replaceProducer(state, {newProducerData, id}) {
    let index = state.producers.findIndex(x => x._id === id);

    console.log(index);

    state.producers[index].name = newProducerData.name;
    state.producers[index].patronymic = newProducerData.patronymic;
    state.producers[index].occupation = newProducerData.occupation;
    state.producers[index].address = newProducerData.address;
    state.producers[index].phone = newProducerData.phone;
  }
}

export const getters = {
  // isFamilyMember: (state) => function (user) {
  //   return state.relativeRoles.includes(user.role);
  // },
  // isAccountOwner: (state) => function (user) {
  //   return user.role === state.accountOwnerRole;
  // },
  // getAccountOwner: (state, getters) => function (user) {
  //   if (getters.isAccountOwner(user)) {
  //     return user;
  //   }
  //
  //   if (user.hasOwnProperty('account_owner')) {
  //     return user['account_owner'];
  //   }
  //
  //   console.error("User has no property 'account_owner'", user);
  // },
  // getFamilyEmployee: (state, getters) => function (user) {
  //   return getters.getAccountOwner(user).employee;
  // },
  // getDeceasedPersonOf: (state, getters) => function (user) {
  //   return getters.getAccountOwner(user)['deceased_person'];
  // },
  // hasWriteAccess: (state) => function (user, what) {
  //   if (!what) {
  //     return false;
  //   }
  //
  //   return state.writeAccessForRoles.includes(user.role);
  // },
}

export const actions = {
  async addNewProducer({state, commit, ...others}, newProducer) {
    console.log(others);

    let response = await this.$axios.post('/employers', {
      name: newProducer.name,
      patronymic: newProducer.patronymic,
      occupation: newProducer.occupation,
      phone: newProducer.phone,
    });

    if (response.status !== 200) {
      alert('create error');
      return;
    }

    commit('addProducerToArray', {newProducer: response.data});
  },
  async deleteProducer({state, commit, ...others}, {_id}) {
    let response = await this.$axios.delete('/employers/' + _id);
    console.log(response);

    if (response.status !== 200) {
      alert('delete error');
      return;
    }

    commit('removeById', {_id});
  },
  async updateProducer({state, commit, ...others}, producer) {
    let response = await this.$axios.patch('/employers/' + producer._id, producer);

    if (response.status !== 200) {
      alert('cant update');
      return;
    }

    commit('replaceProducer', {newProducerData: producer, id: producer._id});
  },
  async fetchProducers({state}) {
    const response = await this.$axios.get('/employers');

    Vue.set(state, 'producers', [...response.data]);

    return state.producers;
  },
};
