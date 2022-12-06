<template>
  <div class="item">
    <div class="item__action">
      <label class="item__checked">
        <input type="checkbox">
        <span>
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18L12.0534 23L25.5 8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </label>
    </div>

    <div class="item__content d-block">
      <button class="btn item__drag-btn" aria-label="Drag">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 20C8.45 20 7.97933 19.8043 7.588 19.413C7.196 19.021 7 18.55 7 18C7 17.45 7.196 16.979 7.588 16.587C7.97933 16.1957 8.45 16 9 16C9.55 16 10.021 16.1957 10.413 16.587C10.8043 16.979 11 17.45 11 18C11 18.55 10.8043 19.021 10.413 19.413C10.021 19.8043 9.55 20 9 20ZM15 20C14.45 20 13.9793 19.8043 13.588 19.413C13.196 19.021 13 18.55 13 18C13 17.45 13.196 16.979 13.588 16.587C13.9793 16.1957 14.45 16 15 16C15.55 16 16.021 16.1957 16.413 16.587C16.8043 16.979 17 17.45 17 18C17 18.55 16.8043 19.021 16.413 19.413C16.021 19.8043 15.55 20 15 20ZM9 14C8.45 14 7.97933 13.804 7.588 13.412C7.196 13.0207 7 12.55 7 12C7 11.45 7.196 10.979 7.588 10.587C7.97933 10.1957 8.45 10 9 10C9.55 10 10.021 10.1957 10.413 10.587C10.8043 10.979 11 11.45 11 12C11 12.55 10.8043 13.0207 10.413 13.412C10.021 13.804 9.55 14 9 14ZM15 14C14.45 14 13.9793 13.804 13.588 13.412C13.196 13.0207 13 12.55 13 12C13 11.45 13.196 10.979 13.588 10.587C13.9793 10.1957 14.45 10 15 10C15.55 10 16.021 10.1957 16.413 10.587C16.8043 10.979 17 11.45 17 12C17 12.55 16.8043 13.0207 16.413 13.412C16.021 13.804 15.55 14 15 14ZM9 8C8.45 8 7.97933 7.804 7.588 7.412C7.196 7.02067 7 6.55 7 6C7 5.45 7.196 4.97933 7.588 4.588C7.97933 4.196 8.45 4 9 4C9.55 4 10.021 4.196 10.413 4.588C10.8043 4.97933 11 5.45 11 6C11 6.55 10.8043 7.02067 10.413 7.412C10.021 7.804 9.55 8 9 8ZM15 8C14.45 8 13.9793 7.804 13.588 7.412C13.196 7.02067 13 6.55 13 6C13 5.45 13.196 4.97933 13.588 4.588C13.9793 4.196 14.45 4 15 4C15.55 4 16.021 4.196 16.413 4.588C16.8043 4.97933 17 5.45 17 6C17 6.55 16.8043 7.02067 16.413 7.412C16.021 7.804 15.55 8 15 8Z" fill="#A7A7A7"/>
        </svg>
      </button>
      <input type="text" class="item__input" value="Some name here" placeholder="Type your task">
      <button type="button" class="btn item__delete">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.75 5H19.375L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75M7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75V8.75H7.5V23.75Z" fill="#434343"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scopped>
  .item {
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

    // .item__content

    &__content {
      padding: 9px 10px;
      padding-right: 35px;

      flex: 1 1 auto;
    }

    // .item__input

    input[type="text"] {
      padding-left: 0;
      flex-grow: 1;
    }

    // .item__checked

    &__checked {
      cursor: pointer;
      opacity: 0.6;

      input[type="checkbox"] {
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        color: transparent;
        padding: 0;
        margin: 0;
      }

      span {
        position: relative;
        width: 31px;
        height: 31px;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: .3s;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;

          width: 100%;
          height: 100%;

          border-radius: 50%;
          border: 3px solid var(--content-color);
          transition: inherit;
        }

        svg {
          width: 100%;
          height: 100%;

          object-fit: contain;
          object-position: center;

          opacity: 0;
          transform: scale(0);
          transition: inherit;
        }
      }

      &:hover,
      &:focus {
        opacity: 0.8;

        span {
          &::after {
            opacity: 0;
            transform: scale(0);
          }

          svg {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
    // .item__drag-btn

    &__drag-btn {
      width: 24px;
      height: 24px;

      padding: 0;
      margin-right: 10px;

      svg {
        width: 100%;
        height: 100%;

        display: block;

        object-fit: contain;
        object-position: center;
      }
    }

    // .item__delete

    &__delete {
      width: 30px;
      height: 30px;

      padding: 0;
      opacity: 0.7;
      transition: .3s;

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
</style>
