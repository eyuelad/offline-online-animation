<template>
  <section
    id="hero-home"
    class="h-screen relative overflow-hidden flex justify-center items-center text-center"
  >
    <div class="">
      <div
        id="light-bg"
        class="absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-sky-400 to-sky-500 transition-all duration-[1.5s]"
        :class="isOffline ? 'opacity-0' : 'opacity-100'"
      ></div>
      <div
        id="dark-bg"
        class="absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-slate-800 to-slate-900 transition-all duration-[1.5s]"
        :class="!isOffline ? 'opacity-0' : 'opacity-100'"
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
        class="toast toast--offline absolute z-10 top-12 left-1/2 px-4 py-3 rounded-md border border-red-500 bg-sky-900/75 text-red-500 font-medium whitespace-nowrap"
      >
        You are offline
      </div>

      <div
        class="toast toast--online absolute z-10 top-12 left-1/2 px-4 py-3 rounded-md border border-green-500 bg-sky-50/75 text-green-600 font-medium whitespace-nowrap"
      >
        You are back online 😀
      </div>

      <div
        class="absolute top-0 left-0 h-screen w-screen transition-all duration-[1.5s]"
        :class="isOffline ? 'opacity-10' : 'opacity-80'"
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
          <h1 class="p-6 mb-6 text-sky-50 text-4xl md:text-6xl font-bold">
            Turn {{ isOffline ? 'on' : 'off' }} your network connection.
          </h1>

          <div class="my-8 text-sky-100 font-medium text-lg">- OR -</div>
          <button class="btn" @click="toggleTheme">Click here</button>
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
      isOffline: false,
    }
  },
  mounted() {
    setInterval(async () => {
      const online = await this.checkConnection()

      if (online == this.isOffline) {
        this.toggleTheme({ isNetwork: true })
      }
    }, 5000)

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
    async checkConnection() {
      try {
        const response = await fetch('/check.txt', {
          cache: 'no-store',
        })

        return response.status >= 200 && response.status < 300
      } catch (error) {
        return false
      }
    },
    toggleTheme({ isNetwork }) {
      this.animate({ showAlert: isNetwork })
      this.isOffline = !this.isOffline
    },
    randomizeStars() {
      gsap.set('.star', {
        x: `random(10,${window.innerWidth - 10})`,
        y: `random(0,${window.innerHeight / 2})`,
      })
    },
    animate({ showAlert }) {
      const onlineToast = document.querySelector('.toast--online')
      const offlineToast = document.querySelector('.toast--offline')

      if (this.isOffline) {
        offlineToast.classList.remove('toast--show')

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

        showAlert && onlineToast.classList.add('toast--show')
        setTimeout(() => {
          onlineToast.classList.remove('toast--show')
        }, 3000)
      } else {
        onlineToast.classList.remove('toast--show')

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

        showAlert && offlineToast.classList.add('toast--show')
        setTimeout(() => {
          offlineToast.classList.remove('toast--show')
        }, 3000)
      }
    },
  },
}
</script>

<style>
.toast {
  transition: all 0.4s ease 0.5s;
  transform: translate(-50%, -10px) scale(0.98);
  opacity: 0;
}

.toast--show {
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
}
</style>
