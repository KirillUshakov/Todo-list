import { createStore } from "vuex";

export default createStore({
  state: {
    todoListArr: [
      {
        id: 1,
        name: 'Market',
        description: 'Market list for tuesday',
        important: true,
        icon: `
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_36)">
              <path d="M22 23C23.1046 23 24 22.1046 24 21C24 19.8954 23.1046 19 22 19C20.8954 19 20 19.8954 20 21C20 22.1046 20.8954 23 22 23Z" fill="white"/>
              <path d="M7.5 23C8.60457 23 9.5 22.1046 9.5 21C9.5 19.8954 8.60457 19 7.5 19C6.39543 19 5.5 19.8954 5.5 21C5.5 22.1046 6.39543 23 7.5 23Z" fill="white"/>
              <path d="M23.5 16.5H7.8855L8.219 15.959C8.362 15.727 8.404 15.4465 8.3355 15.1825L8.01 13.9295L22.5015 13.1765C23.051 13.1485 23.5 12.675 23.5 12.125V5.5C23.5 4.95 23.05 4.5 22.5 4.5H5.5595L5.364 3.7485C5.3083 3.53416 5.18304 3.34438 5.00785 3.20891C4.83266 3.07345 4.61745 2.99997 4.396 3H1C0.734784 3 0.48043 3.10536 0.292893 3.29289C0.105357 3.48043 0 3.73478 0 4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5H3.623L6.293 15.2725L5.243 16.975C5.1496 17.1265 5.09837 17.3002 5.09459 17.4781C5.09081 17.656 5.13462 17.8317 5.2215 17.987C5.30802 18.1425 5.43453 18.272 5.58793 18.3622C5.74133 18.4524 5.91605 18.5 6.094 18.5H23.5C23.7652 18.5 24.0196 18.3946 24.2071 18.2071C24.3946 18.0196 24.5 17.7652 24.5 17.5C24.5 17.2348 24.3946 16.9804 24.2071 16.7929C24.0196 16.6054 23.7652 16.5 23.5 16.5Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1_36">
              <rect width="25" height="25" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        `,
        todolist: [
          {
            id: 1,
            name: 'Carrot',
            done: true,
          },
          {
            id: 2,
            name: 'Milk',
            done: false,
          },
          {
            id: 3,
            name: 'Sausage',
            done: false,
          },
          {
            id: 4,
            name: 'Bread',
            done: false,
          },
          {
            id: 5,
            name: 'Another product',
            done: false,
          },
          {
            id: 6,
            name: 'Product1',
            done: false,
          },
          {
            id: 7,
            name: 'Product2',
            done: false,
          },
        ]
      }
    ],
  },

  getters: {
    todoListArr: (state) => state.todoListArr,
  },

  mutations: {
    addTodoList (state, payload) {
      if (state.todoListArr.findIndex(el => el.id === payload.id)) return;

      state.todoListArr.push(payload);
    },

    deleteTodoList (state, payload) {
      const existIndex = state.todoListArr.findIndex(el => el.id === payload.id);

      if (!existIndex) return;

      state.todoListArr.splice(existIndex, 1);
    },
  },

  actions: {
    addTodoList ({ commit }, payload) {
      if (!payload?.name?.lenght) return;

      if (!payload.id) {
        payload.id = +new Date()
      }
      commit('addTodoList', payload);
    },

    deleteTodoList ({ commit }, payload) {
      if (!payload?.id?.lenght) return;

      commit('deleteTodoList', payload);
    },
  },

  modules: {},
});
