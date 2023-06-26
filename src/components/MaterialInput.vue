<template>
  <div class="container">
    <input
      :id="inputKey"
      type="text"
      :value="value"
      @input="updateValue"
      required
    />
    <span class="bar"></span>
    <label :for="inputKey">{{ label }}</label>
  </div>
</template>

<style scoped>
.container {
  width: 200px;
  height: 40px;
  border-bottom: 1px solid #ddd;
  position: relative;
}

input {
  width: 200px;
  height: 36px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  font-weight: bold;
}

input:focus,
input:valid {
  padding-left: 4px;
}

input:focus ~ .bar,
input:valid ~ .bar {
  width: 200px;
  background: #000080;
}

input:focus ~ label,
input:valid ~ label {
  font-size: 16px;
  transform: translateY(-40px);
  color: #000080;
}

input:focus-visible {
  outline: none;
}

.bar {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 0px;
  height: 4px;
  border-radius: 2px;
  background: #ddd;
  opacity: 0.9;
  box-sizing: border-box;
  transition: 0.4s ease;
}

label {
  position: absolute;
  left: 4px;
  top: 50%;
  font-size: 20px;
  transform: translateY(-50%);
  color: #778899;
  text-shadow: 1px 1px #ddd, 2px 2px #ddd;
  transition: 0.4s ease;
}
</style>

<script lang="ts">
export default {
  props: {
    inputKey: {
      type: String,
      default: "inputKey",
    },
    label: {
      type: String,
      default: "Label Text",
    },
    value: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    function updateValue(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        // 触发自定义的input事件，将值传递给父组件
        emit("update:value", event.target.value);
      }
    }

    return {
      updateValue,
    };
  },
};
</script>
