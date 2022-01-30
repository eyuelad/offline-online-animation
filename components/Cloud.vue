<template>
  <div>
    <div
      id="cloud-circle"
      class="absolute top-0 left-0 z-10"
      :class="'cloud-circle-' + (index + 1)"
      :style="cloudStyle"
    ></div>
    <svg width="0" height="0">
      <filter :id="'filter-' + (index + 1)">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".01"
          :numOctaves="index + 1"
        />
        <feDisplacementMap in="SourceGraphic" :scale="100 + 5 * (index + 1)" />
      </filter>
    </svg>
  </div>
</template>

<style scoped>
#cloud-circle {
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  filter: var(--filter);
  box-shadow: var(--width) var(--height) var(--height) 0px #fff;
}
</style>

<script>
export default {
  props: ['index', 'numOfClouds'],
  computed: {
    cloudStyle() {
      return {
        '--filter': `url(#filter-${this.index + 1})`,
        '--width': this.width,
        '--height': this.height,
      }
    },
    rand() {
      return Math.floor(Math.random() * 10) + 2
    },
    width() {
      return `${this.rand * 40}px`
    },
    height() {
      return `${this.rand * 20}px`
    },
  },
  mounted() {
    gsap.set('.cloud-circle-' + (this.index + 1), {
      left:
        this.index % 2
          ? window.innerWidth / 2 - window.innerWidth / (this.index + 1) - 100
          : window.innerWidth / 2 + window.innerWidth / (this.index + 1) - 100,
      y: `random(-200,${window.innerHeight / 4})`,
    })
  },
}
</script>
