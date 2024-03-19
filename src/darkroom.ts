import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const darkroom: CustomThemeConfig = {
	name: 'darkroom',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `joly-display`,
		'--theme-font-family-heading': `joly-display`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #197278
		'--color-primary-50': '221 234 235', // #ddeaeb
		'--color-primary-100': '209 227 228', // #d1e3e4
		'--color-primary-200': '198 220 221', // #c6dcdd
		'--color-primary-300': '163 199 201', // #a3c7c9
		'--color-primary-400': '94 156 161', // #5e9ca1
		'--color-primary-500': '25 114 120', // #197278
		'--color-primary-600': '23 103 108', // #17676c
		'--color-primary-700': '19 86 90', // #13565a
		'--color-primary-800': '15 68 72', // #0f4448
		'--color-primary-900': '12 56 59', // #0c383b
		// secondary | #83A8A6
		'--color-secondary-50': '236 242 242', // #ecf2f2
		'--color-secondary-100': '230 238 237', // #e6eeed
		'--color-secondary-200': '224 233 233', // #e0e9e9
		'--color-secondary-300': '205 220 219', // #cddcdb
		'--color-secondary-400': '168 194 193', // #a8c2c1
		'--color-secondary-500': '131 168 166', // #83A8A6
		'--color-secondary-600': '118 151 149', // #769795
		'--color-secondary-700': '98 126 125', // #627e7d
		'--color-secondary-800': '79 101 100', // #4f6564
		'--color-secondary-900': '64 82 81', // #405251
		// tertiary | #EDDDD4
		'--color-tertiary-50': '252 250 249', // #fcfaf9
		'--color-tertiary-100': '251 248 246', // #fbf8f6
		'--color-tertiary-200': '251 247 244', // #fbf7f4
		'--color-tertiary-300': '248 241 238', // #f8f1ee
		'--color-tertiary-400': '242 231 225', // #f2e7e1
		'--color-tertiary-500': '237 221 212', // #EDDDD4
		'--color-tertiary-600': '213 199 191', // #d5c7bf
		'--color-tertiary-700': '178 166 159', // #b2a69f
		'--color-tertiary-800': '142 133 127', // #8e857f
		'--color-tertiary-900': '116 108 104', // #746c68
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #C44536
		'--color-warning-50': '246 227 225', // #f6e3e1
		'--color-warning-100': '243 218 215', // #f3dad7
		'--color-warning-200': '240 209 205', // #f0d1cd
		'--color-warning-300': '231 181 175', // #e7b5af
		'--color-warning-400': '214 125 114', // #d67d72
		'--color-warning-500': '196 69 54', // #C44536
		'--color-warning-600': '176 62 49', // #b03e31
		'--color-warning-700': '147 52 41', // #933429
		'--color-warning-800': '118 41 32', // #762920
		'--color-warning-900': '96 34 26', // #60221a
		// error | #772E25
		'--color-error-50': '235 224 222', // #ebe0de
		'--color-error-100': '228 213 211', // #e4d5d3
		'--color-error-200': '221 203 201', // #ddcbc9
		'--color-error-300': '201 171 168', // #c9aba8
		'--color-error-400': '160 109 102', // #a06d66
		'--color-error-500': '119 46 37', // #772E25
		'--color-error-600': '107 41 33', // #6b2921
		'--color-error-700': '89 35 28', // #59231c
		'--color-error-800': '71 28 22', // #471c16
		'--color-error-900': '58 23 18', // #3a1712
		// surface | #243736
		'--color-surface-50': '222 225 225', // #dee1e1
		'--color-surface-100': '211 215 215', // #d3d7d7
		'--color-surface-200': '200 205 205', // #c8cdcd
		'--color-surface-300': '167 175 175', // #a7afaf
		'--color-surface-400': '102 115 114', // #667372
		'--color-surface-500': '36 55 54', // #243736
		'--color-surface-600': '32 50 49', // #203231
		'--color-surface-700': '27 41 41', // #1b2929
		'--color-surface-800': '22 33 32', // #162120
		'--color-surface-900': '18 27 26' // #121b1a
	}
};
