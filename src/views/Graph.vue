<template>
  <div class="chart-container">
    <svg :width="width" :height="height" viewBox="0 0 140 140">
      <defs>
        <radialGradient
          id="skyBlueGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop
            offset="0%"
            style="stop-color: rgb(235, 245, 255); stop-opacity: 1"
          />
          <stop
            offset="20%"
            style="stop-color: rgb(208, 235, 255); stop-opacity: 1"
          />
          <stop
            offset="40%"
            style="stop-color: rgb(181, 225, 255); stop-opacity: 1"
          />
          <stop
            offset="60%"
            style="stop-color: rgb(154, 215, 255); stop-opacity: 1"
          />
          <stop
            offset="80%"
            style="stop-color: rgb(127, 205, 255); stop-opacity: 1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(100, 195, 255); stop-opacity: 1"
          />
        </radialGradient>
        <mask id="levelMask">
          <g v-for="(section, index) in sections" :key="index">
            <path
              v-for="(level, levelIndex) in 5"
              :key="`${index}-${levelIndex}`"
              :d="calculatePath(index, levelIndex)"
              :fill="levelIndex < section.level ? 'white' : 'black'"
            />
          </g>
        </mask>
      </defs>
      <circle cx="70" cy="70" r="50" fill="#ffffff" />
      <circle
        cx="70"
        cy="70"
        r="50"
        fill="url(#skyBlueGradient)"
        mask="url(#levelMask)"
      />
      <g v-for="(section, index) in sections" :key="`lines-${index}`">
        <path
          v-for="levelIndex in 5"
          :key="`line-${index}-${levelIndex}`"
          :d="calculateLinePath(index, levelIndex)"
          fill="none"
          stroke-width="0.5"
          stroke-dasharray="1,1"
        />
      </g>
      <circle
        cx="70"
        cy="70"
        r="50"
        fill="none"
        stroke="#cccccc"
        stroke-width="0.5"
        stroke-dasharray="1,1"
      />
      <g v-for="(label, index) in labels" :key="`label-${index}`">
        <text
          :x="calculateLabelPosition(index).x"
          :y="calculateLabelPosition(index).y"
          text-anchor="middle"
          font-size="6"
          fill="#333333"
        >
          {{ label }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 250,
    },
    levels: {
      type: Array,
      default: () => [1, 2, 3, 4, 5],
      validator: (value) =>
        value.length === 5 && value.every((v) => v >= 0 && v <= 5),
    },
  },
  setup(props) {
    const sections = computed(() => {
      return props.levels.map((level) => ({ level }));
    });

    const labels = ['현금자산', '예적금', '주식', '펀드', '채권'];

    const calculatePath = (sectionIndex, levelIndex) => {
      const startAngle = sectionIndex * (360 / 5);
      const endAngle = (sectionIndex + 1) * (360 / 5);
      const innerRadius = levelIndex * 10;
      const outerRadius = (levelIndex + 1) * 10;

      const startRadians = (startAngle - 90) * (Math.PI / 180);
      const endRadians = (endAngle - 90) * (Math.PI / 180);

      const startX = 70 + innerRadius * Math.cos(startRadians);
      const startY = 70 + innerRadius * Math.sin(startRadians);
      const endX = 70 + outerRadius * Math.cos(endRadians);
      const endY = 70 + outerRadius * Math.sin(endRadians);

      const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

      return `
        M ${startX} ${startY}
        A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${
        70 + innerRadius * Math.cos(endRadians)
      } ${70 + innerRadius * Math.sin(endRadians)}
        L ${endX} ${endY}
        A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${
        70 + outerRadius * Math.cos(startRadians)
      } ${70 + outerRadius * Math.sin(startRadians)}
        Z
      `;
    };

    const calculateLinePath = (sectionIndex, levelIndex) => {
      const angle = sectionIndex * (360 / 5) - 90;
      const radius = levelIndex * 10;
      const radians = angle * (Math.PI / 180);
      const x = 70 + radius * Math.cos(radians);
      const y = 70 + radius * Math.sin(radians);
      return `M 70 70 L ${x} ${y}`;
    };

    const calculateLabelPosition = (index) => {
      const angle = (index * 72 + -60) * (Math.PI / 180);
      const radius = 65;
      return {
        x: 70 + radius * Math.cos(angle),
        y: 70 + radius * Math.sin(angle),
      };
    };

    return {
      sections,
      labels,
      calculatePath,
      calculateLinePath,
      calculateLabelPosition,
    };
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
