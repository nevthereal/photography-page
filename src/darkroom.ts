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
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #F95738
		'--color-primary-50': '254 230 225', // #fee6e1
		'--color-primary-100': '254 221 215', // #feddd7
		'--color-primary-200': '254 213 205', // #fed5cd
		'--color-primary-300': '253 188 175', // #fdbcaf
		'--color-primary-400': '251 137 116', // #fb8974
		'--color-primary-500': '249 87 56', // #F95738
		'--color-primary-600': '224 78 50', // #e04e32
		'--color-primary-700': '187 65 42', // #bb412a
		'--color-primary-800': '149 52 34', // #953422
		'--color-primary-900': '122 43 27', // #7a2b1b
		// secondary | #EE964B
		'--color-secondary-50': '252 239 228', // #fcefe4
		'--color-secondary-100': '252 234 219', // #fceadb
		'--color-secondary-200': '251 229 210', // #fbe5d2
		'--color-secondary-300': '248 213 183', // #f8d5b7
		'--color-secondary-400': '243 182 129', // #f3b681
		'--color-secondary-500': '238 150 75', // #EE964B
		'--color-secondary-600': '214 135 68', // #d68744
		'--color-secondary-700': '179 113 56', // #b37138
		'--color-secondary-800': '143 90 45', // #8f5a2d
		'--color-secondary-900': '117 74 37', // #754a25
		// tertiary | #F4D35E
		'--color-tertiary-50': '253 248 231', // #fdf8e7
		'--color-tertiary-100': '253 246 223', // #fdf6df
		'--color-tertiary-200': '252 244 215', // #fcf4d7
		'--color-tertiary-300': '251 237 191', // #fbedbf
		'--color-tertiary-400': '247 224 142', // #f7e08e
		'--color-tertiary-500': '244 211 94', // #F4D35E
		'--color-tertiary-600': '220 190 85', // #dcbe55
		'--color-tertiary-700': '183 158 71', // #b79e47
		'--color-tertiary-800': '146 127 56', // #927f38
		'--color-tertiary-900': '120 103 46', // #78672e
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
		// surface | #0D3B66
		'--color-surface-50': '219 226 232', // #dbe2e8
		'--color-surface-100': '207 216 224', // #cfd8e0
		'--color-surface-200': '195 206 217', // #c3ced9
		'--color-surface-300': '158 177 194', // #9eb1c2
		'--color-surface-400': '86 118 148', // #567694
		'--color-surface-500': '13 59 102', // #0D3B66
		'--color-surface-600': '12 53 92', // #0c355c
		'--color-surface-700': '10 44 77', // #0a2c4d
		'--color-surface-800': '8 35 61', // #08233d
		'--color-surface-900': '6 29 50' // #061d32
	}
};
