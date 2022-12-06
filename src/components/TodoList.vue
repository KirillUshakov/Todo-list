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
        <input type="text" class="input-text" placeholder="Searh something...">
      </div>
      <div class="sort-container">
        <span>Sort by</span>
        <div class="selector">
          <button type="button" class="selector__btn d-block btn">Date</button>
          <div class="selector__list">
            <button class="btn selector__list-btn" disabled>Date</button>
            <button class="btn selector__list-btn">Name</button>
          </div>
        </div>
        <button class="btn sort-direction">
          <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 12L11.991 13.1099C12.5631 13.63 13.4369 13.63 14.009 13.1099L13 12ZM25.009 3.10991C25.622 2.55265 25.6672 1.60398 25.1099 0.990991C24.5526 0.378004 23.604 0.332829 22.991 0.89009L25.009 3.10991ZM3.00901 0.89009C2.39602 0.332829 1.44735 0.378004 0.89009 0.990991C0.332829 1.60398 0.378004 2.55265 0.990991 3.10991L3.00901 0.89009ZM14.009 13.1099L25.009 3.10991L22.991 0.89009L11.991 10.8901L14.009 13.1099ZM14.009 10.8901L3.00901 0.89009L0.990991 3.10991L11.991 13.1099L14.009 10.8901Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="todo-list-container">
      <div class="todo-list">
        <div class="todo-list__body">
          <div class="add-item">
            <div class="add-item__action">
              <button type="button" class="btn round-btn add-item__add-btn">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12.8399H23.6667" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
                  <path d="M12.8398 23.6667L12.8398 2.00001" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <div class="add-item__content d-block">
              <input type="text" class="add-item__input" placeholder="Type your task">
            </div>
          </div>
          <list-item v-for="item in 2" :key="item"/>
        </div>
      </div>

      <div class="todo-list completed">
        <div class="todo-list__header">
          Completed <span>1</span>
        </div>

        <div class="todo-list__body">
          <list-item/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ListItem from "@/components/todo-list/ListItem.vue";
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

  .input-text {

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

  &.ascending {
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
