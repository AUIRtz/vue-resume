Vue.component('editable-span', {
  props: ['value'],
  data() {
    return {
      editing: false
    }
  },
  methods: {
    triggerEdit(aim){
      this.$emit('edit', aim.target.value)
    }
  },
  template: `
        <span>
          <span v-show="!editing">{{ value }}</span>
          <input v-show="editing" type="text" v-bind:value="value" @input="triggerEdit">
          <button @click="editing = !editing">edit</button>
        </span>
      `
})