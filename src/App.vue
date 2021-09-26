<template>
  <textarea
    class="editor"
    v-show="mode === 'editor'"
    v-model="input"
  ></textarea>
  <div
    v-show="mode === 'preview'"
    class="preview"
    v-html="markdownToHtml"
  ></div>
  <div class="toolbar">
    <button class="toggler" @click="changeMode">
      <svg
        v-if="mode === 'preview'"
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-eye-off"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="3" y1="3" x2="21" y2="21"></line>
        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
        <path
          d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
        ></path>
      </svg>
      <svg
        v-if="mode === 'editor'"
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-eye"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="12" r="2"></circle>
        <path
          d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import placeholder from "./assets/placeholder";

export default {
  name: "App",
  data() {
    return {
      input: placeholder,
      mode: "editor",
    };
  },
  methods: {
    changeMode() {
      this.mode === "editor" ? (this.mode = "preview") : (this.mode = "editor");
    },
  },
  computed: {
    markdownToHtml() {
      return this.md(this.input);
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: grid;
  place-items: center;
}

html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
}

.editor,
.preview {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
}

.editor {
  border: none;
  resize: none;
}

.editor:focus-visible {
  outline: none;
}

.toggler {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: transparent;
  border: none;
}
</style>
