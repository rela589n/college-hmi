<template>
  <div class="date-picker-wrapper">
    <label>
      {{ title }}:
      <input type="text" :value="formatDateValue()" @focusin="openPicker" @input="closePicker">
    </label>
    <div class="date-picker">
    </div>
  </div>
</template>

<script lang="ts">
import WindowDatePicker from 'window-date-picker';
import Vue from "vue";

export default Vue.extend({
  name: "date-picker",
  props: [
    'title',
    'value',
  ],
  data: function () {
    return {
      picker: new WindowDatePicker(),
    }
  },
  methods: {
    openPicker: function (): void {
      this.picker.open();
    },
    closePicker: function (): void {
      this.picker.close();
    },
    reactChange: function (): void {
      this.$emit('input', this.picker.get());
    },
    formatDateValue: function (): string {
      try {
        if (!this.value.day || !this.value.month || !this.value.year) {
          return '';
        }
      } catch (e) {
        return '';
      }

      return `${this.value.day}/${this.value.month}/${this.value.year}`; // "DD/MM/YYYY"
    }
  },
  mounted() {
    this.picker = new WindowDatePicker({
      el: this.$el.querySelector('.date-picker'),
      inputEl: this.$el.querySelector('input'),
      dateType: "DD/MM/YYYY",
    });

    this.picker.el.addEventListener('wdp.change', this.reactChange);
  },
});
</script>

<style src="window-date-picker/dist/css/window-date-picker.min.css"></style>
