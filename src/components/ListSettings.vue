<template>
  <div class="settings">
    <div class="settings-row">
      <label class="label label--name">
        <p>Name</p>
        <input type="text" class="input-text" placeholder="Todo list name">
      </label>
    </div>
    <div class="settings-row">
      <label class="label label--description">
        <p>Description</p>
        <input type="text" class="input-text" placeholder="Some additional description">
      </label>
    </div>
    <div class="settings-row settings-row--row-grid">
      <div class="label label--colors">
        <p>Colors</p>
        <div class="input-group">
          <input type="color" class="input-color">
          <input type="color" class="input-color">
          <button class="btn d-block colors-btn">
            Random colors
          </button>
        </div>
      </div>
      <label class="label label--icon">
        <p>Icon</p>
        <div class="selector icon-selector">
          <div class="selector__value">
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
          </div>
          <div class="selector__btn btn">
            <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 12L11.991 13.1099C12.5631 13.63 13.4369 13.63 14.009 13.1099L13 12ZM25.009 3.10991C25.622 2.55265 25.6672 1.60398 25.1099 0.990991C24.5526 0.378004 23.604 0.332829 22.991 0.89009L25.009 3.10991ZM3.00901 0.89009C2.39602 0.332829 1.44735 0.378004 0.89009 0.990991C0.332829 1.60398 0.378004 2.55265 0.990991 3.10991L3.00901 0.89009ZM14.009 13.1099L25.009 3.10991L22.991 0.89009L11.991 10.8901L14.009 13.1099ZM14.009 10.8901L3.00901 0.89009L0.990991 3.10991L11.991 13.1099L14.009 10.8901Z" fill="white"/>
            </svg>
          </div>
          <div class="selector__list selector__list--icon-select selector__list--row-grid">
            <button class="selector__list-btn btn" v-for="icon in 10" :key="icon">
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
            </button>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
}

.settings-row {
  width: 100%;
  margin-bottom: 45px;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  &--row-grid {
    & > * {
      width: auto !important;
      flex: 0 1 auto;
    }
  }
}

.label {
  width: 100%;

  & > p {
    margin: 0;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .input-text {
    width: 100%;
    padding: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  &--name {
    font-size: 36px;
    font-weight: bold;
  }

  &--description {
    font-size: 24px;
  }

  &--colors {
    @media (min-width: 768px) {
      min-width: 450px;
    }
  }
}

.input-group {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.input-color {
  position: relative;
  cursor: pointer;

  padding: 0px 2px;
  margin: 0;
  border:0;

  width: 100%;
  max-width: 95px;
  height: 41px;

  overflow: hidden;
  background-color: var(--content-color);
  border: 0;
  border-radius: 7px;

  &::before {
    content: "";
    position: absolute;
    left: 1px;
    top: 1px;

    width: calc(100% - 2px);
    height: calc(100% - 2px);

    background-color: transparent;
    border-radius: 9px;
    border: 4px solid #ffffff;
  }
}

.colors-btn {
  cursor: pointer;

  padding-left: 50px;
  padding-right: 50px;

  transition: .3s;

  &:hover,
  &:focus {
   opacity: 0.7;
  }
}

.icon-selector {
  display: flex;
  align-items: center;
  gap: 20px;

  .selector {
    &__list {
      width: 100vw;
      max-width: 267px;
    }
  }
}

</style>
