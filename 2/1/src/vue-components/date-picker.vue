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

<script>
import WindowDatePicker from 'window-date-picker';

export default {
  name: "date-picker",
  props: [
    'title',
    'value',
  ],
  data: function () {
    return {
      picker: {},
    }
  },
  methods: {
    openPicker: function () {
      this.picker.open();
    },
    closePicker: function () {
      this.picker.close();
    },
    reactChange: function () {
      this.$emit('input', this.picker.get());
    },
    formatDateValue: function () {
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
}
</script>

<style src="window-date-picker/dist/css/window-date-picker.min.css"></style>