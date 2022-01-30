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
      >
        <div
          v-for="(star, i) in 30"
          class="star absolute top-0 rounded-full bg-white/75 shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]"
          :class="i % 2 ? 'w-0.5 h-0.5' : 'w-1 h-1'"
        ></div>
      </div>

      <div
        id="sun"
        class="w-16 h-16 absolute top-32 left-1/2 -translate-x-1/2 translate-y-0 rounded-full bg-amber-200 shadow-lg shadow-amber-300/50"
      ></div>
      <div
        id="moon"
        class="w-12 h-12 absolute top-32 left-1/2 -translate-x-1/2 -translate-y-[500px] rounded-full bg-white shadow-[0_0_50px_5px_rgba(255,255,255,0.5)]"
      ></div>

      <div
        class="absolute top-0 left-0 h-screen w-screen transition-all duration-[1.5s]"
        :class="isDark ? 'opacity-10' : 'opacity-80'"
      >
        <Cloud
          v-for="(cloud, i) in 8"
          :key="'cloud-' + i"
          :index="i"
          :numOfClouds="8"
        />
      </div>

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
  mounted() {
    this.randomizeStars()

    gsap.to('.star', {
      opacity: 0.8,
      duration: 0.2,
      ease: 'power2.inOut',
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    })
  },
  methods: {
    toggleTheme() {
      this.animate()
      this.isDark = !this.isDark
    },
    randomizeStars() {
      gsap.set('.star', {
        x: `random(10,${window.innerWidth - 10})`,
        y: `random(0,${window.innerHeight / 2})`,
      })
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
        this.randomizeStars()
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
