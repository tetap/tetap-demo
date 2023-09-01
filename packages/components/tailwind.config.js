/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'rgb(var(--tetap-primary-1, 239 243 255))',
          2: 'rgb(var(--tetap-primary-2, 220 229 253))',
          3: 'rgb(var(--tetap-primary-3, 192 209 253))',
          4: 'rgb(var(--tetap-primary-4, 149 181 251))',
          5: 'rgb(var(--tetap-primary-5, 100 142 246))',
          6: 'rgb(var(--tetap-primary-6, 54 95 241))',
          7: 'rgb(var(--tetap-primary-7, 42 71 230))',
          8: 'rgb(var(--tetap-primary-8, 33 51 212))',
          9: 'rgb(var(--tetap-primary-9, 33 44 172))',
          10: 'rgb(var(--tetap-primary-10, 33 43 135))'
        },
        success: {
          1: 'rgb(var(--tetap-success-1, 239 254 245))',
          2: 'rgb(var(--tetap-success-2, 217 255 234))',
          3: 'rgb(var(--tetap-success-3, 181 253 214))',
          4: 'rgb(var(--tetap-success-4, 123 250 184))',
          5: 'rgb(var(--tetap-success-5, 58 238 145))',
          6: 'rgb(var(--tetap-success-6, 15 194 102))',
          7: 'rgb(var(--tetap-success-7, 7 178 90))',
          8: 'rgb(var(--tetap-success-8, 10 139 73))',
          9: 'rgb(var(--tetap-success-9, 14 109 61))',
          10: 'rgb(var(--tetap-success-10, 13 90 53))'
        },
        warning: {
          1: 'rgb(var(--tetap-warning-1, 255 252 235))',
          2: 'rgb(var(--tetap-warning-2, 255 246 198))',
          3: 'rgb(var(--tetap-warning-3, 255 235 136))',
          4: 'rgb(var(--tetap-warning-4, 255 220 73))',
          5: 'rgb(var(--tetap-warning-5, 255 201 32))',
          6: 'rgb(var(--tetap-warning-6, 250 173 20))',
          7: 'rgb(var(--tetap-warning-7, 221 127 2))',
          8: 'rgb(var(--tetap-warning-8, 183 90 6))',
          9: 'rgb(var(--tetap-warning-9, 149 68 11))',
          10: 'rgb(var(--tetap-warning-10, 122 56 13))'
        },
        error: {
          1: 'rgb(var(--tetap-error-1, 255 242 240))',
          2: 'rgb(var(--tetap-error-2, 255 228 224))',
          3: 'rgb(var(--tetap-error-3, 255 206 198))',
          4: 'rgb(var(--tetap-error-4, 255 171 158))',
          5: 'rgb(var(--tetap-error-5, 255 122 102))',
          6: 'rgb(var(--tetap-error-6, 253 81 54))',
          7: 'rgb(var(--tetap-error-7, 235 51 23))',
          8: 'rgb(var(--tetap-error-8, 198 39 15))',
          9: 'rgb(var(--tetap-error-9, 163 36 17))',
          10: 'rgb(var(--tetap-error-10, 135 36 21))'
        },
        gray: {
          1: 'rgb(var(--tetap-gray-1, 247 247 247))',
          2: 'rgb(var(--tetap-gray-2, 237 237 237))',
          3: 'rgb(var(--tetap-gray-3, 217 217 217))',
          4: 'rgb(var(--tetap-gray-4, 200 200 200))',
          5: 'rgb(var(--tetap-gray-5, 173 173 173))',
          6: 'rgb(var(--tetap-gray-6, 153 153 153))',
          7: 'rgb(var(--tetap-gray-7, 136 136 136))',
          8: 'rgb(var(--tetap-gray-8, 123 123 123))',
          9: 'rgb(var(--tetap-gray-9, 103 103 103))',
          10: 'rgb(var(--tetap-gray-10, 84 84 84))'
        },
        black: {
          1: 'rgb(var(--tetap-black-1, 246 246 246))',
          2: 'rgb(var(--tetap-black-2, 231 231 231))',
          3: 'rgb(var(--tetap-black-3, 209 209 209))',
          4: 'rgb(var(--tetap-black-4, 176 176 176))',
          5: 'rgb(var(--tetap-black-5, 136 136 136))',
          6: 'rgb(var(--tetap-black-6, 109 109 109))',
          7: 'rgb(var(--tetap-black-7, 93 93 93))',
          8: 'rgb(var(--tetap-black-8, 79 79 79))',
          9: 'rgb(var(--tetap-black-9, 69 69 69))',
          10: 'rgb(var(--tetap-black-10, 50 50 50))'
        }
      }
    }
  },
  plugins: []
}
