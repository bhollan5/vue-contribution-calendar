<template>
  <div> 
     <svg width="700" height="100">
      <text x="0" y="34" class="day-label" :style="'fill:' + textcolor">Mon</text>
      <text x="0" y="60" class="day-label" :style="'fill:' + textcolor">Wed</text>
      <text x="0" y="86" class="day-label" :style="'fill:' + textcolor">Fri</text>
      <g v-for="(day, index) in days"> 
        <rect
          :x="day.weekIndex * 13 + 24"
          :y="day.dayIndex  * 13 + 13"
          :fill="calculateValue(day.date)"
          width="10"
          height="10"
          v-on:click="cellClick(day.date, history[day.date])"
        >
          <title>{{day.date}}:{{history[day.date]||0}}</title>
        </rect>
      </g>
    </svg>
  </div>
</template>

<style>
.day-label {
  font-size: 10px;
  font-family: courier;
}
</style>

<script>
  import { daysOfTheYear } from './generate-days';

  module.exports = {
    props: {
      year: {
        type: Number,
        default: new Date().getFullYear()
      },
      history: {
        type: Object,
        default: () => ({})
      },
      cellClick: {
        type: Function,
        default: () => ({})
      },
      textcolor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        days: []
      }
    },
    methods: {
      calculateValue(value) {
        const valueExists = this.history[value];
        if (valueExists) {
          if (valueExists >= 10) {
            return '#1e6823'
          }
          if (valueExists >= 7 & valueExists < 10) {
            return '#44a340'
          }
          if (valueExists >= 4 & valueExists < 7) {
            return '#8cc665'
          }
          if (valueExists <= 3) {
            return '#d6e685'
          }

        }
        return '#eeeeee';
      }
    },
    mounted() {
      this.days = daysOfTheYear(this.year);
    }
  }
</script>