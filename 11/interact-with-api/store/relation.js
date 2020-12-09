import Vue from 'vue';

export const state = () => ({
  relations: [],
});

export const mutations = {
  addRelationToArray(state, {newRelation}) {
    const toAdd = {
      _id: newRelation._id,
      employee_id: newRelation.employee_id,
      employer_id: newRelation.employer_id,
      position: newRelation.position,
      commission: newRelation.commission,
      employer: newRelation.employer,
      employee: newRelation.employee,
    };

    toAdd.employee.full_name = toAdd.employee.firstName + " " + toAdd.employee.lastName + " " + toAdd.employee.patronymic;

    state.relations.push(toAdd);
  },
  removeById(state, {_id}) {
    let index = state.relations.findIndex(p => p._id === _id);
    state.relations.splice(index, 1);
  },
  replaceRelation(state, {newRelationData, id}) {
    let index = state.relations.findIndex(x => x._id === id);

    console.log(index);

    state.relations[index].employer_name = newRelationData.employer_name;
    state.relations[index].employee_name = newRelationData.employee_name;
  }
}

export const getters = {}

export const actions = {
  async addNewRelation({state, commit, ...others}, newRelation) {

    let response = await this.$axios.post('/work-contracts', {
      employee_id: newRelation.employee_id,
      employer_id: newRelation.employer_id,
      position: newRelation.position,
    });

    if (response.status !== 200) {
      alert('create error');
      return;
    }

    commit('addRelationToArray', {newRelation: response.data});
  },
  async deleteRelation({state, commit, ...others}, {_id}) {
    let response = await this.$axios.delete('/work-contracts/' + _id);
    console.log(response);

    if (response.status !== 200) {
      alert('delete error');
      return;
    }

    commit('removeById', {_id});
  },
  async updateRelation({state, commit, ...others}, relation) {
    let response = await this.$axios.patch('/work-contracts/verbose/' + relation._id, relation);

    if (response.status !== 200) {
      alert('cant update');
      return;
    }

    commit('replaceRelation', {newRelationData: relation, id: relation._id});
  },
  async fetchRelations({state, commit}) {
    const response = await this.$axios.get('/work-contracts/verbose');

    Vue.set(state, 'relations', []);

    for (let relation of response.data) {

      commit('addRelationToArray', {
        newRelation: {
          _id: relation._id,
          employee_id: relation.employee_id,
          employer_id: relation.employer_id,
          position: relation.position,
          commission: relation.commission,
          employer: relation.employer[0],
          employee: relation.employee[0],
        }
      });
    }

    return state.relations;
  },
};
