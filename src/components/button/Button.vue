<template>
  <button
    @click="handleClick"
    :class="[
      {
        primary: variant === 'primary' && true,
        outline: variant === 'outline' && true,
        small: size === 'small' && true,
        large: size === 'large' && true,
      },
    ]"
  >
    <span>{{ title }}</span>
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => {
      return ["primary", "outline", "filled"].includes(value);
    },
  },
  goTo: {
    type: String,
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => {
      return ["small", "medium", "large"].includes(value);
    },
  },
  onClick: {
    type: Function,
  },
});

// NAVIGATION
const router = useRouter();

const handleClick = () => {
  props.title === "map"
    ? window.open(props.goTo, "_blank")
    : router.push({ name: "propertyDetails", params: { id: props.id } });
};
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
  font-family: Avenir;
  font-weight: 300;

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

  &.small {
    font-size: 14px;
    span {
      padding: 0.4rem 0.8rem;
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
  width: 132%;
  left: -15%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

button:hover::before {
  transform: translate3d(100%, 0, 0);
}
</style>