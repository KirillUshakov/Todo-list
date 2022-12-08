<template>
  <div class="section dark-theme" style="background: linear-gradient(98.13deg, #2B7AD7 2.76%, #16D6BF 96.89%), #FFFFFF;">
    <div class="container">
      <div class="header">
        <div class="group flex" style="gap: 20px;">
          <router-link to="/" class="btn round-btn" aria-label="Back to overview page">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12.8399H23.6667" stroke="#434343" stroke-width="3" stroke-linecap="round"/>
              <path d="M2 12.6667L8 5" stroke="#434343" stroke-width="3" stroke-linecap="round"/>
              <path d="M8 20L2 13" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </router-link>
          <button
            @click="save"
            class="btn round-btn"
            aria-label="Save current"
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 460.002 460.002" style="enable-background:new 0 0 460.002 460.002;" xml:space="preserve">
              <g>
                <g>
                  <path d="M427.137,0C408.93,0,51.379,0,32.865,0C14.743,0,0,14.743,0,32.865v394.272c0,18.122,14.743,32.865,32.865,32.865    c0,0,374.895,0,394.272,0c18.122,0,32.865-14.743,32.865-32.865V32.865C460.001,14.743,445.258,0,427.137,0z M245.812,30h50.995    v54.466h-50.995V30z M107.198,30h108.615v69.466c0,8.284,6.716,15,15,15h80.995c8.284,0,15-6.716,15-15V30h26.377v119.636H107.198    V30z M107.007,430.001V308.673h245.986v121.328H107.007z M430.002,427.137L430.002,427.137c-0.001,1.58-1.286,2.865-2.866,2.865    h-44.143V293.673c0-8.284-6.716-15-15-15H92.007c-8.284,0-15,6.716-15,15v136.328H32.865c-1.58,0-2.865-1.285-2.865-2.865V32.865    C30,31.285,31.285,30,32.865,30h44.333v134.636c0,8.284,6.716,15,15,15h275.986c8.284,0,15-6.716,15-15V30h43.953    c1.58,0,2.865,1.285,2.865,2.865V427.137z"/>
                </g>
              </g>
            </svg>
          </button>
        </div>

        <h1 class="title">{{ list.name }}</h1>

        <button
          @click="changeImportant"
          :class="{ 'active' : isImportant }"
          class="btn round-btn important-btn"
          aria-label="Mark as important"
        >
          <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.242 24.5695L21.7908 24.3542C21.6986 24.5473 21.5725 24.704 21.4101 24.8303C21.266 24.9424 21.0971 25.0093 20.888 25.0267C20.7061 25.0419 20.5264 24.9997 20.3355 24.8782L20.3355 24.878L20.325 24.8717L14.1 21.1217L13.842 20.9663L13.584 21.1217L7.35902 24.8717L7.35894 24.8716L7.34859 24.8782C7.15768 24.9997 6.97796 25.0419 6.79605 25.0267C6.587 25.0093 6.41804 24.9424 6.27399 24.8303C6.11162 24.704 5.98554 24.5475 5.89341 24.3544C5.82395 24.208 5.80079 24.0318 5.85412 23.8004C5.85415 23.8002 5.85419 23.8001 5.85422 23.7999L7.504 16.7134L7.5725 16.4191L7.3439 16.2216L1.8355 11.4627C1.65448 11.2987 1.5619 11.1327 1.52533 10.9628L1.5249 10.9608C1.48213 10.766 1.49445 10.5814 1.56192 10.3959C1.63609 10.1919 1.74098 10.0403 1.87128 9.92629C1.97637 9.83433 2.14738 9.75075 2.42497 9.70934L9.68567 9.07309L9.98581 9.04679L10.1028 8.76914L12.9153 2.09415L12.9161 2.09231C13.0019 1.88642 13.1246 1.75038 13.2842 1.65933L13.285 1.65892C13.4789 1.54787 13.6625 1.5 13.842 1.5C14.0215 1.5 14.2057 1.54785 14.401 1.65912C14.5595 1.74999 14.682 1.886 14.768 2.09231L14.7688 2.09414L17.5813 8.76914L17.6982 9.04679L17.9984 9.07309L25.2591 9.70934C25.5367 9.75075 25.7077 9.83434 25.8128 9.92629C25.9431 10.0403 26.048 10.1919 26.1221 10.3959C26.1898 10.5818 26.2025 10.7668 26.1604 10.9619C26.123 11.1323 26.0296 11.2987 25.8486 11.4627L20.3401 16.2216L20.1115 16.4191L20.18 16.7134L21.8298 23.7999C21.8833 24.0318 21.8601 24.2083 21.7904 24.3549L22.242 24.5695ZM22.242 24.5695C22.367 24.3065 22.392 24.0125 22.317 23.6875H5.36702C5.29202 24.0125 5.31702 24.3065 5.44202 24.5695C5.56702 24.8315 5.74202 25.05 5.96702 25.225C6.19202 25.4 6.45452 25.5 6.75453 25.525C7.05453 25.55 7.34203 25.475 7.61703 25.3L13.842 21.55L20.067 25.3C20.342 25.475 20.6295 25.55 20.9295 25.525C21.2295 25.5 21.492 25.4 21.717 25.225C21.942 25.05 22.117 24.8315 22.242 24.5695Z" fill="#FFE817" stroke="#FFE817"/>
          </svg>
        </button>
      </div>
      <div class="content">
        <div class="tabs-controll">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ 'active' : tab.tabName === curTab }"
            @click="changeTab(tab.tabName)"
            class="btn tab-btn"
          >
            {{ tab.name }}
          </button>
        </div>
        <div class="tabs-list">
          <div
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ 'active' : tab.tabName === curTab }"
            class="tab"
          >
            <component :is="tab.component" :instanceList="list"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import ListSettings from "@/components/ListSettings.vue";

export default {
  components: {
    TodoList,
    ListSettings
  }
}
</script>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';

// Modules
const route = useRoute();
const store = useStore();

// Data
let curTab = ref("todo");
let isImportant = ref(false);
const routeId = route.params.id;
const defaultList = reactive({
  id: 1,
  name: '',
  description: '',
  important: false,
  icon: ``,
  todolist: []
});
const tabs = reactive([
  {
    id: 1,
    name: 'Todo',
    tabName: 'todo',
    component: 'TodoList',
  },
  {
    id: 2,
    name: 'Settings',
    tabName: 'settings',
    component: 'ListSettings',
  },
]);

// Computed
const list = computed(() => {
  const todoListArr = store.getters.todoListArr;
  const existList = todoListArr?.find(el => Number(el.id) === Number(routeId));

  if (!todoListArr || !routeId || !existList) return defaultList;

  return existList;
});

// Methods
const changeTab = (tabName) => {
  curTab.value = tabName;
}

const changeImportant = () => {
  isImportant.value = !isImportant.value;
}

</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;
}

.header {
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
}

.important-btn {
  opacity: 0.7;

  &:hover,
  &:focus {
    color: #FFE817;
  }

  &.active {
    color: #FFE817;
    opacity: 1;
  }
}

.tabs-controll {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  margin: -7px -15px;
  margin-bottom: 35px;
}

.tab-btn {
  padding: 7px 15px;

  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.05em;

  opacity: 0.6;

  transition: all .3s;

  &:hover,
  &:focus {
   opacity: 0.8;
  }

  &.active {
    pointer-events: none;
    opacity: 1;
  }

}

.tab {
  width: 100%;
  display: none;

  &.active {
    display: block;
  }
}

</style>
