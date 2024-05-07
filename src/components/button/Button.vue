<template>
  <button
    :class="[
      {
        primary: variant === 'primary' && true,
        outline: variant === 'outline' && true,
      },
    ]"
  >
    <span>{{ title }}</span>
  </button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => {
      return ["primary", "outline"].includes(value);
    },
  },
  onClick: {
    type: Function,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
button {
  outline: none;
  cursor: pointer;
  border: solid 2px black;
  text-transform: capitalize;
  margin: 0;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-size: 17px;
  overflow: hidden;
  background: #000000;
  color: ghostwhite;
  font-family: (var(--font-primary));
  &.primary {
    &::before {
      background: #1d1d1d;
    }
  }

  &.outline {
    &::before {
      background: white;
    }

    span {
      color: black;
      &:hover {
        color: white;
      }
    }
  }
}

button span {
  position: relative;
  z-index: 10;
  transition: color 0.4s;
  color: white;
  display: inline-block;
  padding: 0.6rem 1.2rem;
}

button::before,
button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

button::before {
  content: "";
  width: 128%;
  left: -13%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

button:hover::before {
  transform: translate3d(100%, 0, 0);
}
</style>