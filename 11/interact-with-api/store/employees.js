import Vue from 'vue';

export const state = () => ({
  producers: [],
});

export const mutations = {
  addEmployeeToArray(state, {newEmployee}) {
    state.employees.push(newEmployee);
  },
  removeById(state, {_id}) {
    let index = state.employees.findIndex(p => p._id === _id);
    state.employees.splice(index, 1);
  },
  replaceEmployee(state, {newEmployeeData, id}) {
    let index = state.employees.findIndex(x => x._id === id);

    console.log(index);

    state.employees[index].firstName = newEmployeeData.firstName;
    state.employees[index].lastName = newEmployeeData.lastName;
    state.employees[index].patronymic = newEmployeeData.patronymic;
    state.employees[index].occupation = newEmployeeData.occupation;
    state.employees[index].phone = newEmployeeData.phone;
  }
}

export const getters = {}

export const actions = {
  async addNewEmployee({state, commit, ...others}, newEmployee) {
    console.log(others);

    let response = await this.$axios.post('/employees', {
      firstName: newEmployee.firstName,
      lastName: newEmployee.lastName,
      patronymic: newEmployee.patronymic,
      occupation: newEmployee.occupation,
      phone: newEmployee.phone,
    });

    if (response.status !== 200) {
      alert('create error');
      return;
    }

    commit('addEmployeeToArray', {newEmployee: response.data});
  },
  async deleteEmployee({state, commit, ...others}, {_id}) {
    let response = await this.$axios.delete('/employees/' + _id);
    console.log(response);

    if (response.status !== 200) {
      alert('delete error');
      return;
    }

    commit('removeById', {_id});
  },
  async updateEmployee({state, commit, ...others}, employee) {
    let response = await this.$axios.patch('/employees/' + employee._id, employee);

    if (response.status !== 200) {
      alert('cant update');
      return;
    }

    commit('replaceEmployee', {newEmployeeData: employee, id: employee._id});
  },
  async fetchEmployees({state}) {
    const response = await this.$axios.get('/employees');

    Vue.set(state, 'employees', [...response.data]);

    return state.employees;
  },
};
