<template>
  <div class="section">
    <div class="container">
      <div class="header">
        <h1 class="title">Lists</h1>
        <button class="btn round-btn round-btn--alt-theme" aria-label="Add list">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12.8399H23.6667" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
            <path d="M12.8398 23.6667L12.8398 2.00001" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div class="content">
        <div class="card-grid">
          <todo-list-card
            v-for="(card, index) in 10"
            :key="index"
            :id="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<script setup>
import TodoListCard from "@/components/Card";
</script>

<style lang="scss" scoped>
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
