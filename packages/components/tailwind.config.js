/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
        fadeOut: 'fadeOut 0.3s ease-in-out forwards',
        fadeInUp: 'fadeInUp 0.3s ease-in-out forwards',
        fadeOutDown: 'fadeOutDown 0.3s ease-in-out forwards',
        fadeOutZoom: 'fadeOutZoom 0.3s ease-in-out forwards'
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translate3d(0,-100%,0)' },
          '100%': { opacity: 1, transform: 'translateZ(0)' }
        },
        fadeOutDown: {
          '0%': { opacity: 1, transform: 'translateZ(0)' },
          '100%': { opacity: 0, transform: 'translate3d(0,100%,0)' }
        },
        fadeOutZoom: {
          '0%': { opacity: 1, transform: 'scale3d(1, 1, 1)' },
          '100%': { opacity: 0, transform: 'scale3d(0.8, 0.8, 1)' }
        }
      }),
      colors: {
        primary: {
          1: 'rgb(var(--tetap-primary-1, 239 243 255) / <alpha-value>)',
          2: 'rgb(var(--tetap-primary-2, 220 229 253) / <alpha-value>)',
          3: 'rgb(var(--tetap-primary-3, 192 209 253) / <alpha-value>)',
          4: 'rgb(var(--tetap-primary-4, 149 181 251) / <alpha-value>)',
          5: 'rgb(var(--tetap-primary-5, 100 142 246) / <alpha-value>)',
          6: 'rgb(var(--tetap-primary-6, 54 95 241) / <alpha-value>)',
          7: 'rgb(var(--tetap-primary-7, 42 71 230) / <alpha-value>)',
          8: 'rgb(var(--tetap-primary-8, 33 51 212) / <alpha-value>)',
          9: 'rgb(var(--tetap-primary-9, 33 44 172) / <alpha-value>)',
          10: 'rgb(var(--tetap-primary-10, 33 43 135) / <alpha-value>)'
        },
        success: {
          1: 'rgb(var(--tetap-success-1, 239 254 245) / <alpha-value>)',
          2: 'rgb(var(--tetap-success-2, 217 255 234) / <alpha-value>)',
          3: 'rgb(var(--tetap-success-3, 181 253 214) / <alpha-value>)',
          4: 'rgb(var(--tetap-success-4, 123 250 184) / <alpha-value>)',
          5: 'rgb(var(--tetap-success-5, 58 238 145) / <alpha-value>)',
          6: 'rgb(var(--tetap-success-6, 15 194 102) / <alpha-value>)',
          7: 'rgb(var(--tetap-success-7, 7 178 90) / <alpha-value>)',
          8: 'rgb(var(--tetap-success-8, 10 139 73) / <alpha-value>)',
          9: 'rgb(var(--tetap-success-9, 14 109 61) / <alpha-value>)',
          10: 'rgb(var(--tetap-success-10, 13 90 53) / <alpha-value>)'
        },
        warning: {
          1: 'rgb(var(--tetap-warning-1, 255 252 235) / <alpha-value>)',
          2: 'rgb(var(--tetap-warning-2, 255 246 198) / <alpha-value>)',
          3: 'rgb(var(--tetap-warning-3, 255 235 136) / <alpha-value>)',
          4: 'rgb(var(--tetap-warning-4, 255 220 73) / <alpha-value>)',
          5: 'rgb(var(--tetap-warning-5, 255 201 32) / <alpha-value>)',
          6: 'rgb(var(--tetap-warning-6, 250 173 20) / <alpha-value>)',
          7: 'rgb(var(--tetap-warning-7, 221 127 2) / <alpha-value>)',
          8: 'rgb(var(--tetap-warning-8, 183 90 6) / <alpha-value>)',
          9: 'rgb(var(--tetap-warning-9, 149 68 11) / <alpha-value>)',
          10: 'rgb(var(--tetap-warning-10, 122 56 13) / <alpha-value>)'
        },
        error: {
          1: 'rgb(var(--tetap-error-1, 255 242 240) / <alpha-value>)',
          2: 'rgb(var(--tetap-error-2, 255 228 224) / <alpha-value>)',
          3: 'rgb(var(--tetap-error-3, 255 206 198) / <alpha-value>)',
          4: 'rgb(var(--tetap-error-4, 255 171 158) / <alpha-value>)',
          5: 'rgb(var(--tetap-error-5, 255 122 102) / <alpha-value>)',
          6: 'rgb(var(--tetap-error-6, 253 81 54) / <alpha-value>)',
          7: 'rgb(var(--tetap-error-7, 235 51 23) / <alpha-value>)',
          8: 'rgb(var(--tetap-error-8, 198 39 15) / <alpha-value>)',
          9: 'rgb(var(--tetap-error-9, 163 36 17) / <alpha-value>)',
          10: 'rgb(var(--tetap-error-10, 135 36 21) / <alpha-value>)'
        },
        gray: {
          1: 'rgb(var(--tetap-gray-1, 247 247 247) / <alpha-value>)',
          2: 'rgb(var(--tetap-gray-2, 237 237 237) / <alpha-value>)',
          3: 'rgb(var(--tetap-gray-3, 217 217 217) / <alpha-value>)',
          4: 'rgb(var(--tetap-gray-4, 200 200 200) / <alpha-value>)',
          5: 'rgb(var(--tetap-gray-5, 173 173 173) / <alpha-value>)',
          6: 'rgb(var(--tetap-gray-6, 153 153 153) / <alpha-value>)',
          7: 'rgb(var(--tetap-gray-7, 136 136 136) / <alpha-value>)',
          8: 'rgb(var(--tetap-gray-8, 123 123 123) / <alpha-value>)',
          9: 'rgb(var(--tetap-gray-9, 103 103 103) / <alpha-value>)',
          10: 'rgb(var(--tetap-gray-10, 84 84 84) / <alpha-value>)'
        },
        black: {
          1: 'rgb(var(--tetap-black-1, 246 246 246) / <alpha-value>)',
          2: 'rgb(var(--tetap-black-2, 231 231 231) / <alpha-value>)',
          3: 'rgb(var(--tetap-black-3, 209 209 209) / <alpha-value>)',
          4: 'rgb(var(--tetap-black-4, 176 176 176) / <alpha-value>)',
          5: 'rgb(var(--tetap-black-5, 136 136 136) / <alpha-value>)',
          6: 'rgb(var(--tetap-black-6, 109 109 109) / <alpha-value>)',
          7: 'rgb(var(--tetap-black-7, 93 93 93) / <alpha-value>)',
          8: 'rgb(var(--tetap-black-8, 79 79 79) / <alpha-value>)',
          9: 'rgb(var(--tetap-black-9, 69 69 69) / <alpha-value>)',
          10: 'rgb(var(--tetap-black-10, 50 50 50) / <alpha-value>)'
        }
      }
    }
  },
  plugins: []
}
