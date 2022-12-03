<template>
  <div class="todo">
    <div class="todo__actions">
      <div class="search">
        <button type="button">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="13" r="11.5" stroke="white" stroke-width="3"/>
            <path d="M23 23L29 29" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </button>
        <input type="text" placeholder="Searh something...">
      </div>
      <div class="sort-container">
        <span>Sort by</span>
        <div class="selector">
          <button type="button" class="selector__btn d-block btn">Date</button>
          <div class="selector__list">
            <button class="selector__list-btn" disabled>Date</button>
            <button class="selector__list-btn">Name</button>
          </div>
        </div>
        <button class="sort-direction descending">
          <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 12L11.991 13.1099C12.5631 13.63 13.4369 13.63 14.009 13.1099L13 12ZM25.009 3.10991C25.622 2.55265 25.6672 1.60398 25.1099 0.990991C24.5526 0.378004 23.604 0.332829 22.991 0.89009L25.009 3.10991ZM3.00901 0.89009C2.39602 0.332829 1.44735 0.378004 0.89009 0.990991C0.332829 1.60398 0.378004 2.55265 0.990991 3.10991L3.00901 0.89009ZM14.009 13.1099L25.009 3.10991L22.991 0.89009L11.991 10.8901L14.009 13.1099ZM14.009 10.8901L3.00901 0.89009L0.990991 3.10991L11.991 13.1099L14.009 10.8901Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="todo-list-container">
      <div class="todo-list">
        <div class="item item--add-element">
          <button type="button" class="btn round-btn item__add-btn">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12.8399H23.6667" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
              <path d="M12.8398 23.6667L12.8398 2.00001" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="item__content d-block">
            <input type="text" class="item__input">
          </div>
        </div>
        <div class="item" v-for="item in 2" :key="item">
          <label class="item__checked">
            <input type="checkbox">
            <span>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 18L12.0534 23L25.5 8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </label>

          <div class="item__content d-block">
            <button class="item__drag-btn" aria-label="Drag"></button>
            <input type="text" class="item__input">
            <button type="button" class="item__delete">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 5H19.375L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75M7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75V8.75H7.5V23.75Z" fill="#434343"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="todo-list completed">
        <div class="todo-list__header">
          Completed <span>1</span>
        </div>

        <div class="item">
          <label class="item__checked">
            <input type="checkbox">
            <span>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 18L12.0534 23L25.5 8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </label>

          <div class="item__content">
            <button class="item__drag-btn" aria-label="Drag"></button>
            <input type="text" class="item__input">
            <button type="button" class="item__delete">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 5H19.375L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75M7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75V8.75H7.5V23.75Z" fill="#434343"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
