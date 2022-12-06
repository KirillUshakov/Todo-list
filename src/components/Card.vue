<template>
  <router-link :to="`/todo-list/${ props.list.id }`" class="card dark-theme">
    <span v-if="props.list.important" class="mark center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5875 19.3104L13 17.2521L16.4125 19.3375L15.5188 15.4375L18.525 12.8375L14.5708 12.4854L13 8.80209L11.4292 12.4583L7.475 12.8104L10.4813 15.4375L9.5875 19.3104ZM13 19.7979L8.50417 22.5063C8.30556 22.6326 8.09792 22.6868 7.88125 22.6688C7.66458 22.6507 7.475 22.5785 7.3125 22.4521C7.15 22.3257 7.02361 22.1679 6.93333 21.9787C6.84306 21.7887 6.825 21.5764 6.87917 21.3417L8.07083 16.2229L4.08958 12.7833C3.90903 12.6208 3.79636 12.4356 3.75158 12.2276C3.70608 12.0203 3.71944 11.8174 3.79167 11.6188C3.86389 11.4201 3.97222 11.2576 4.11667 11.1313C4.26111 11.0049 4.45972 10.9236 4.7125 10.8875L9.96667 10.4271L11.9979 5.60625C12.0882 5.38959 12.2283 5.22709 12.4183 5.11875C12.6075 5.01042 12.8014 4.95625 13 4.95625C13.1986 4.95625 13.3929 5.01042 13.5828 5.11875C13.7721 5.22709 13.9118 5.38959 14.0021 5.60625L16.0333 10.4271L21.2875 10.8875C21.5403 10.9236 21.7389 11.0049 21.8833 11.1313C22.0278 11.2576 22.1361 11.4201 22.2083 11.6188C22.2806 11.8174 22.2943 12.0203 22.2495 12.2276C22.204 12.4356 22.091 12.6208 21.9104 12.7833L17.9292 16.2229L19.1208 21.3417C19.175 21.5764 19.1569 21.7887 19.0667 21.9787C18.9764 22.1679 18.85 22.3257 18.6875 22.4521C18.525 22.5785 18.3354 22.6507 18.1188 22.6688C17.9021 22.6868 17.6944 22.6326 17.4958 22.5063L13 19.7979Z" fill="white"/>
      </svg>
    </span>
    <span class="indicator center">
      {{ activeTasksCount }}
    </span>

    <span class="header">
      <span class="title-container">
        <span class="card__title">{{ props.list.name }}</span>
        <span class="description">
          {{ props.list.description }}
        </span>
      </span>

      <span v-if="props.list.todolist.length" class="info-icons">
        <span class="icon-item">
          <span>{{ props.list.todolist.length }}</span>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 2H12.6667V0.666664H11.3333V2H4.66668V0.666664H3.33334V2H2.66668C1.93334 2 1.33334 2.6 1.33334 3.33333V14C1.33334 14.7333 1.93334 15.3333 2.66668 15.3333H13.3333C14.0667 15.3333 14.6667 14.7333 14.6667 14V3.33333C14.6667 2.6 14.0667 2 13.3333 2ZM13.3333 14H2.66668V5.33333H13.3333V14Z" fill="white"/>
          </svg>
        </span>

        <span v-if="props.list.todolist.length - activeTasksCount" class="icon-item">
          <span>{{ props.list.todolist.length - activeTasksCount }}</span>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1852 13.8667H2.81479V5.8H13.1852M13.1852 2.13333H12.4444V0.666664H10.9629V2.13333H5.03702V0.666664H3.55554V2.13333H2.81479C2.42188 2.13333 2.04506 2.28785 1.76723 2.56291C1.4894 2.83796 1.33331 3.21101 1.33331 3.6V13.8667C1.33331 14.2556 1.4894 14.6287 1.76723 14.9038C2.04506 15.1788 2.42188 15.3333 2.81479 15.3333H13.1852C13.5781 15.3333 13.9549 15.1788 14.2327 14.9038C14.5106 14.6287 14.6666 14.2556 14.6666 13.8667V3.6C14.6666 3.21101 14.5106 2.83796 14.2327 2.56291C13.9549 2.28785 13.5781 2.13333 13.1852 2.13333ZM11.3555 8.044L10.5703 7.26666L6.95553 10.8453L5.38516 9.29066L4.59998 10.068L6.95553 12.4L11.3555 8.044Z" fill="white"/>
          </svg>
        </span>
      </span>
    </span>

    <span class="body">
      <ul class="list">
        <li
          v-for="item in props.list.todolist.filter((el, index) => index < 3)"
          :key="item.id"
          :class="{ 'completed' : item.done }"
          class="list-item"
        >
          {{ item.name }}
        </li>
      </ul>

      <span v-if="props.list.icon.length" v-html="props.list.icon" class="category-icon"></span>
    </span>
  </router-link>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name: 'card-item'
}
</script>

<script setup>
const props = defineProps({
  list: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      description: '',
      todolist: [],
      important: false,
      icon: '',
    }),
  }
});

const activeTasksCount = computed(() => props.list.todolist.length - props.list.todolist.filter(el => el.done).length);

</script>

<style lang="scss" scoped>
.card {
  position: relative;

  width: 100%;
  border-radius: 12px;
  text-decoration: none;

  padding: 40px;
  padding-bottom: 35px;

  color: var(--content-color);
  background: linear-gradient(98.13deg, #2B7AD7 2.76%, #16D6BF 96.89%);
  background-color: var(--content-color-alt);
}

.mark {
  position: absolute;
  left: 10px;
  top: 10px;

  width: 26px;
  height: 26px;

  svg {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
  }

  path {
    fill: currentColor;
  }
}

// indicator vars
$card-smooth: 5px;
$border-width: 4px;

.indicator {
  position: absolute;
  right: 0;
  top: 0;

  width: 52px;
  height: 52px;

  font-size: 18px;
  font-weight: bold;
  color: inherit;

  background: var(--content-color-alt);
  border: $border-width solid $background;
  border-radius: 50%;

  background: linear-gradient(98.13deg, #2B7AD7 2.76%, #16D6BF 96.89%);
  transform: translate(calc(50% - $card-smooth), calc(-50% + $card-smooth));

  &::before,
  &::after {
    content: "";

    position: absolute;

    width: $card-smooth * 2;
    height: $card-smooth * 2;

    background-color: transparent;
  }

  /* Left smooth */
  &::before {
    top: 50%;
    left: -$border-width;

    box-shadow: $card-smooth / 5 0 - $card-smooth 0 0 #fff;
    border-top-right-radius: $card-smooth;
    transform: translate(-100%, -50%);
  }

  /* Bottom smooth */
  &::after {
    left: 50%;
    bottom: -$border-width;

    box-shadow: $card-smooth $card-smooth / -5 0 0 #fff;;
    border-top-right-radius: $card-smooth;
    transform: translate(-50%, 100%);
  }
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  margin-bottom: 35px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
}

.title-container {
  display: flex;
  flex-direction: column;
}

.card__title {
  margin: 0;

  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.description {
  margin: 0;
}

.info-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  gap: 15px;

  opacity: 0.9;
}

.icon-item {
  display: flex;
  align-items: center;

  font-size: 14px;

  span {
    margin-right: 7px;
  }

  svg {
    width: 16px;
    height: 16px;

    object-fit: contain;
    object-position: center;
  }

  path {
    fill: currentColor;
  }
}

.body {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.list {
  padding-right: 20px;

  font-size: 14px;
}

.list-item {
  position: relative;

  line-height: 18px;
  padding-left: 15px;
  margin-bottom: 10px;

  opacity: 0.4;

  &::before,
  &::after {
    content: '';

    position: absolute;
    left: 0;
    top: 9px;

    width: 5px;
    height: 5px;

    border: 0.5px solid currentColor;
    background-color: transparent;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &.completed {
    &::after {
      background: currentColor;
    }
  }

  &:first-child {
    opacity: 0.8;
  }

  &:nth-child(2) {
    opacity: 0.6;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.category-icon {
  width: 25px;
  height: 25px;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  path {
    fill: currentColor;
  }
}

</style>
