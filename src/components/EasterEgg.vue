<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'

const DRAW_MS = 1200 // stroke-dashoffset animation duration
const FILL_MS = 800 // fill color transition duration
const STAGGER_MS = 100 // delay between each path's draw animation

const visible = ref(false)

const svgRef = useTemplateRef<SVGElement>('svg')
const shineRef = useTemplateRef<SVGRectElement>('shine')

const keys = useMagicKeys()

// Trigger: Ctrl+Alt+T+1 reveals the easter egg
watch(keys['Ctrl+Alt+T+1'], async (pressed) => {
  if (pressed) {
    visible.value = true
  }
})

// When the overlay becomes visible, run the SVG reveal animation sequence
watch(visible, async (value) => {
  if (!value) return

  await nextTick()

  // Collect SVG paths (direct children of root <svg>)
  const paths = svgRef.value?.querySelectorAll<SVGPathElement>('&>path')
  if (!paths) return

  // Initialise each path: hide fill, set dash array/length so they start invisible
  paths.forEach((path) => {
    const length = path.getTotalLength()

    path.style.fill = 'transparent'
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
  })

  const lastPath = paths[paths.length - 1]

  requestAnimationFrame(async () => {
    // Phase 1: draw paths in sequence (stroke-dashoffset → 0)
    paths.forEach((path, i) => {
      path.style.strokeDashoffset = '0'
      path.style.transition = `stroke-dashoffset ${DRAW_MS}ms ease`
      path.style.transitionDelay = `${i * STAGGER_MS}ms`
    })

    await waitTransition(lastPath, 'stroke-dashoffset')

    // Phase 2: fill paths with brand red
    paths.forEach((path) => {
      path.style.transition = `fill ${FILL_MS}ms ease`
      path.style.fill = '#e2012d'
    })

    await waitTransition(lastPath, 'fill')

    // Phase 3: animate a shine (reflection) across the logo
    const shine = shineRef.value

    if (shine) {
      const animation = shine.animate(
        [
          {
            transform: 'translateX(0px)',
          },
          {
            transform: 'translateX(600px)',
          },
        ],
        {
          duration: 450,
          easing: 'ease-out',
          fill: 'forwards',
        },
      )

      await animation.finished
    }

    // Auto-dismiss after animation completes
    visible.value = false
  })
})

// Waits until the given CSS transition finishes for the specified property
function waitTransition(el: Element, property: string): Promise<void> {
  return new Promise((resolve) => {
    el.addEventListener(
      'transitionend',
      (event) => {
        if ((event as TransitionEvent).propertyName === property) resolve()
      },
      { once: true },
    )
  })
}
</script>

<template>
  <Transition
    enter-active-class="animate-in duration-400 fade-in"
    leave-active-class="animate-out duration-500 fade-out"
  >
    <div v-if="visible" class="fixed inset-0 z-100 flex items-center justify-center bg-surface/80 backdrop-blur-xl">
      <svg ref="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 300 119" class="h-24">
        <path
          stroke="#e2012d"
          stroke-width="2"
          d="m140.789 70.253-7.574 11.037h-18.021l-.081-.007q-.165-.015-.329-.036a16 16 0 0 1-1.265-.217 23.6 23.6 0 0 1-4.433-1.425c-3.428-1.473-7.8-4.224-11.774-9.352zm12.392-18.055-7.574 11.037H92.301l-.08-.007a16 16 0 0 1-1.595-.253 23.6 23.6 0 0 1-4.432-1.425c-3.428-1.473-7.8-4.224-11.776-9.352zm12.391-18.055-7.575 11.037H69.526a7 7 0 0 1-.41-.044 16 16 0 0 1-1.265-.217 23.6 23.6 0 0 1-4.433-1.424c-3.428-1.474-7.8-4.225-11.774-9.352z"
        />
        <path
          stroke="#e2012d"
          stroke-width="2"
          d="M243.991 4.052c-8.224 10.85-17.317 16.61-24.405 19.662-3.632 1.564-6.738 2.418-8.932 2.88q-1.27.272-2.557.44-.336.044-.674.075l-.169.013-.041.003h-.009l-.002.001-.245.014-.139.201-59.924 87.065q-.201-.113-.492-.285a44 44 0 0 1-2.274-1.453c-1.85-1.259-4.216-3.062-6.308-5.248-2.096-2.19-3.885-4.733-4.629-7.469-.737-2.71-.456-5.64 1.641-8.672l43.546-63.371.538-.783H46.762l-.04-.003-.17-.013a19 19 0 0 1-.674-.076 32 32 0 0 1-2.557-.439c-2.194-.462-5.3-1.316-8.93-2.88-7.09-3.052-16.183-8.813-24.407-19.662z"
        />
        <path
          stroke="#e2012d"
          stroke-width="2"
          d="m290.069 4.052-75.906 110.354c-.133-.076-.3-.17-.492-.285a45 45 0 0 1-2.275-1.453c-1.849-1.259-4.216-3.062-6.307-5.248-2.096-2.19-3.884-4.733-4.628-7.469-.737-2.71-.457-5.64 1.64-8.672l.001-.001 43.544-63.37.538-.783H229.52a50 50 0 0 0 7.222-2.492c7.359-3.168 16.804-9.187 25.262-20.581z"
        />
        <mask id="a" width="284" height="113" x="8" y="3" maskUnits="userSpaceOnUse" style="mask-type: alpha">
          <path
            fill="#fff"
            stroke="#fff"
            d="m140.789 70.253-7.574 11.037h-18.021l-.081-.007q-.165-.015-.329-.036a16 16 0 0 1-1.265-.217 23.6 23.6 0 0 1-4.433-1.425c-3.428-1.473-7.8-4.224-11.774-9.352zm12.392-18.055-7.574 11.037H92.301l-.08-.007a16 16 0 0 1-1.595-.253 23.6 23.6 0 0 1-4.432-1.425c-3.428-1.473-7.8-4.224-11.776-9.352zm12.391-18.055-7.575 11.037H69.526a7 7 0 0 1-.41-.044 16 16 0 0 1-1.265-.217 23.6 23.6 0 0 1-4.433-1.424c-3.428-1.474-7.8-4.225-11.774-9.352z"
          />
          <path
            fill="#fff"
            stroke="#fff"
            d="M243.991 4.052c-8.224 10.85-17.317 16.61-24.405 19.662-3.632 1.564-6.738 2.418-8.932 2.88q-1.27.272-2.557.44-.336.044-.674.075l-.169.013-.041.003h-.009l-.002.001-.245.014-.139.201-59.924 87.065q-.201-.113-.492-.285a44 44 0 0 1-2.274-1.453c-1.85-1.259-4.216-3.062-6.308-5.248-2.096-2.19-3.885-4.733-4.629-7.469-.737-2.71-.456-5.64 1.641-8.672l43.546-63.371.538-.783H46.762l-.04-.003-.17-.013a19 19 0 0 1-.674-.076 32 32 0 0 1-2.557-.439c-2.194-.462-5.3-1.316-8.93-2.88-7.09-3.052-16.183-8.813-24.407-19.662z"
          />
          <path
            fill="#fff"
            stroke="#fff"
            d="m290.069 4.052-75.906 110.354c-.133-.076-.3-.17-.492-.285a45 45 0 0 1-2.275-1.453c-1.849-1.259-4.216-3.062-6.307-5.248-2.096-2.19-3.884-4.733-4.628-7.469-.737-2.71-.457-5.64 1.64-8.672l.001-.001 43.544-63.37.538-.783H229.52a50 50 0 0 0 7.222-2.492c7.359-3.168 16.804-9.187 25.262-20.581z"
          />
        </mask>
        <g mask="url(#a)">
          <path ref="shine" fill="url(#b)" d="M-212.362-92 9.486 36.084-91.15 210.394-313 82.31z" />
        </g>
        <defs>
          <linearGradient id="b" x1="-40.833" x2="-262.681" y1="123.239" y2="-4.845" gradientUnits="userSpaceOnUse">
            <stop stop-color="#e2012d" />
            <stop offset=".303" stop-color="#e2012d" stop-opacity=".1" />
            <stop offset=".5" stop-color="#fff" />
            <stop offset=".697" stop-color="#e2012d" stop-opacity=".1" />
            <stop offset=".996" stop-color="#e2012d" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </Transition>
</template>
