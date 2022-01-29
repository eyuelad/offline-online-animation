<template>
  <section
    id="hero-home"
    class="h-screen relative overflow-hidden flex justify-center items-center text-center"
  >
    <div class="">
      <div
        id="light-bg"
        class="absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-sky-400 to-sky-500 transition-all duration-[1.5s]"
        :class="isDark ? 'opacity-0' : 'opacity-100'"
      ></div>
      <div
        id="dark-bg"
        class="absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-slate-800 to-slate-900 transition-all duration-[1.5s]"
        :class="!isDark ? 'opacity-0' : 'opacity-100'"
      ></div>

      <div class="relative">
        <div>
          <h1
            class="p-6 mb-6 md:mb-12 text-sky-50 text-3xl md:text-6xl font-bold"
          >
            Sweet Theme Switching Animation
          </h1>

          <button class="btn" @click="toggleTheme">Switch</button>
        </div>
      </div>

      <div
        id="sun"
        class="w-16 h-16 absolute top-32 left-1/2 -translate-x-1/2 translate-y-0 rounded-full bg-amber-200 shadow-lg shadow-amber-300/50"
      ></div>
      <div
        id="moon"
        class="w-12 h-12 absolute top-32 left-1/2 -translate-x-1/2 -translate-y-[500px] rounded-full bg-white shadow-[0_0_50px_5px_rgba(255,255,255,0.5)]"
      ></div>

      <Footer class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    toggleTheme() {
      this.animate()
      this.isDark = !this.isDark
    },
    animate() {
      if (this.isDark) {
        gsap.to('#sun', {
          y: 0,
          duration: 1.2,
          ease: 'back',
        })

        gsap.to('#moon', {
          keyframes: {
            y: [0, 10, -500],
          },
          duration: 0.6,
        })
      } else {
        gsap.to('#moon', {
          y: 0,
          duration: 1,
        })

        gsap.to('#sun', {
          keyframes: {
            y: [0, -10, '110vh'],
            easeEach: 'power2.inOut',
          },
          duration: 0.6,
        })
      }
    },
  },
}
</script>
