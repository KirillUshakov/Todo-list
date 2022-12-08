<template>
  <div class="todo">
    <div class="todo__actions">
      <div class="search">
        <button type="button" class="btn search__btn">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="13" r="11.5" stroke="white" stroke-width="3"/>
            <path d="M23 23L29 29" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </button>
        <input
          v-model="searchValue"
          class="input-text"
          placeholder="Searh something..."
          type="text"
        >
      </div>
      <div class="sort-container">
        <span>Sort by</span>
        <div class="selector">
          <button type="button" class="selector__btn d-block btn">{{ capitalize(filterBy) }}</button>
          <div class="selector__list">
            <button @click="filterBy.value = 'date'" class="btn selector__list-btn">Date</button>
            <button @click="filterBy.value = 'name'" class="btn selector__list-btn">Name</button>
          </div>
        </div>
        <button
          @click="sortTasks"
          :class="{ 'increace' : !sortByDecrease }"
          class="btn sort-direction"
        >
          <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 12L11.991 13.1099C12.5631 13.63 13.4369 13.63 14.009 13.1099L13 12ZM25.009 3.10991C25.622 2.55265 25.6672 1.60398 25.1099 0.990991C24.5526 0.378004 23.604 0.332829 22.991 0.89009L25.009 3.10991ZM3.00901 0.89009C2.39602 0.332829 1.44735 0.378004 0.89009 0.990991C0.332829 1.60398 0.378004 2.55265 0.990991 3.10991L3.00901 0.89009ZM14.009 13.1099L25.009 3.10991L22.991 0.89009L11.991 10.8901L14.009 13.1099ZM14.009 10.8901L3.00901 0.89009L0.990991 3.10991L11.991 13.1099L14.009 10.8901Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="todo-list-container">

      <div v-if="activeTasks.length" class="todo-list">
        <div class="todo-list__header">
         Active <span>{{ activeTasks.length }}</span> {{ searchValue ? '(Searched)' : '' }}
        </div>

        <div class="todo-list__body">
          <div v-if="!searchValue" class="add-item" :class="addItemClasses">
            <div class="add-item__action">
              <button
                @click="addTask"
                class="btn round-btn add-item__add-btn"
                type="button"
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12.8399H23.6667" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
                  <path d="M12.8398 23.6667L12.8398 2.00001" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <div class="add-item__content d-block">
              <input
                v-model="newTaskName"
                @keydown.enter="addTask"
                class="add-item__input"
                placeholder="Type your task"
                type="text"
              >
            </div>
          </div>
          <list-item
            v-for="item in activeTasks"
            :key="item.id"
            :item="item"
            @delete="deleteTask"
          />
        </div>
      </div>

      <div v-if="completedTasks.length" class="todo-list completed">
        <div class="todo-list__header">
          Completed <span>{{ completedTasks.length }}</span> {{ searchValue ? '(Searched)' : '' }}
        </div>

        <div class="todo-list__body">
          <list-item
            v-for="item in completedTasks"
            :key="item.id"
            :item="item"
            @delete="deleteTask"
          />
        </div>
      </div>

      <div v-if="!activeTasks.length && !completedTasks.length" class="todo-list">
        <div class="todo-list__header todo-list__header--clear" style="font-weight: 400;">
          Sorry, nothing found with your request  <b>"{{ searchValue }}"</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ListItem from "@/components/todo-list/ListItem.vue";
import { computed, onMounted, reactive, ref, watch } from "@vue/runtime-core";

const props = defineProps({
  instanceList: {
    type: Object,
    required: true,
  }
});

const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1);

let list = reactive(props.instanceList);
let filterBy = ref('name');
let sortByDecrease = ref(true);
let searchValue = ref('');
const activeTasks = computed(() => list?.todolist?.filter((item) => !item.done));
const completedTasks = computed(() => list?.todolist?.filter((item) => item.done));

// Filter
// const filterTasks = (todolist) => {
//   let result = todolist;

//   // Search filter
//   if (searchValue.value) {
//     result = result.filter(item => item.name?.toLowerCase().startsWith(searchValue.value));
//   }

//   // Sort filter
//   result = result.sort((a, b) => {
//     switch (filterBy.value) {
//       case 'date':
//         return b.id - a.id;

//       default:
//         if (a.name > b.name) return 1;
//         if (a.name < b.name) return -1;
//         return 0;
//     }
//   });


//   if (!sortByDecrease.value) {
//     result = result.reverse();
//   }

//   return result;
// }

// Search / Filter / Sort
let tempTodoList = reactive({});

watch(searchValue, (val, prevVal) => {
  console.log(val, prevVal);
  if (!val) {
    list.todolist = tempTodoList;
    return;
  }

  if (!prevVal) {
    tempTodoList = list.todolist;
  }

  filterTasks();
});

const filterTasks = () => {
  list.todolist = list.todolist.filter(item => item.name?.toLowerCase().startsWith(searchValue.value.toLowerCase()))
}

const sortTasks = () => {
  let result = list.todolist;
  sortByDecrease.value = !sortByDecrease.value;

  // Sort filter
  result = result.sort((a, b) => {
    switch (filterBy.value) {
      case 'date':
        return b.id - a.id;

      default:
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }
  });

  if (!sortByDecrease.value) {
    result = result.reverse();
  }

  list.todolist = result;
}

// Add task input
let newTaskName = ref('');
const addItemClasses = reactive([]);
const addTask = () => {
  if (!newTaskName || !list?.todolist) return;

  list.todolist.unshift({
    id: +new Date(),
    name: newTaskName,
    done: false,
  });

  newTaskName = '';
}

// Delete task
const deleteTask = (id) => {
  const index = list?.todolist?.findIndex(el => Number(el.id) === Number(id));

  if (index === undefined || index === -1) return;

  list.todolist.splice(index, 1);
}

onMounted(() => {
  list = props.instanceList
});

</script>

<style lang="scss" scopped>
.todo {

		// .todo__actions

		&__actions {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
		}
}
.search {
  display: flex;
  align-items: center;

  flex: 1 1 400px;

  &__btn {
    width: 41px;
    height: 41px;

    padding: 5px;
    margin: -5px;
    margin-right: 5px;

    opacity: 0.7;

    transition: all .3s;

    svg {
      width: 100%;
      height: 100%;

      object-fit: contain;
      object-position: center;
    }

    &:hover,
    &:focus {
     opacity: 1;
    }
  }
}

.sort-container {
  display: flex;
  align-items: center;

  column-gap: 20px;
  row-gap: 15px;
  font-size: 18px;

  span {
    font-weight: 500;
  }
}

.sort-direction {
  width: 32px;
  min-height: 100%;

  padding: 5px;

  transition: .3s;

  svg {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
  }

  &:hover,
  &:focus {
   opacity: 0.7;
  }

  &.increace {
    transform: rotate(180deg);
  }
}

.todo-list-container {
  display: flex;
  flex-direction: column;
  gap: 85px;
}

.todo-list {
  display: flex;
  flex-direction: column;

  // .todo-list__header

  &__header {
    display: flex;
    align-items: center;
    column-gap: 15px;

    padding-bottom: 20px;
    margin-bottom: 40px;

    font-size: 20px;
    font-weight: bold;

    border-bottom: 1px solid rgba(255, 255, 255, .6);

    span {
      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;

      font-size: 16px;
      font-weight: bold;
      color: var(--content-color-alt);

      border-radius: 50%;
      background-color: var(--content-color);
    }

    &--clear {
      border-bottom: 0;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.add-item {
  width: 100%;
  display: flex;
  align-items: center;

  // .item__action

  &__action {
    width: 42px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 22px;

    text-align: center;
  }

  // .item__add-btn

  &__add-btn {
    width: 100%;
    height: 100%;
  }

  // .item__content

  &__content {
    flex: 1 1 auto;
    padding: 0;

    color: var(--content-color);
    border: 2px solid var(--content-color);
    background-color: transparent;
  }

  // .item__input

  input[type="text"] {
    padding: 14px 43px;
    flex-grow: 1;
  }
}
</style>
