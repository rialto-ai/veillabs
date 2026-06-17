/** @type {import('tailwindcss').Config} */

// The Veil violet ramp, anchored on the brand kit:
//   500 = Veil Violet #6E56F0 · 600 = Violet Deep #5840D6
//   400 = Violet on Dark #8E82F2 · 50 = Violet Tint #F1EFFE
const veilViolet = {
  50: '#F1EFFE',
  100: '#E7E2FC',
  200: '#D2C9F9',
  300: '#B4A6F5',
  400: '#8E82F2',
  500: '#6E56F0',
  600: '#5840D6',
  700: '#4733B0',
  800: '#3A2B8C',
  900: '#2F2470',
  950: '#1C1547',
};

module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			// Veil type system: Inter for everything, JetBrains Mono for data/utility.
  			sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
  			mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace']
  		},
  		fontSize: {
  			display: ['32px', { lineHeight: '1.2', fontWeight: '700' }],
  			h1: ['24px', { lineHeight: '1.3', fontWeight: '600' }],
  			h2: ['18px', { lineHeight: '1.4', fontWeight: '500' }],
  			body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
  			small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
  			caption: ['12px', { lineHeight: '1.4', fontWeight: '400' }]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: '#747C8C',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Veil accent ramp. The brand allows ONE accent (violet), so remap the
  			// whole blue family (and stray indigo/purple/sky) used across the
  			// Meetily UI to the Veil violet ramp — recolors every hardcoded
  			// `*-blue-*` utility in one place.
  			violet: { DEFAULT: '#6E56F0', deep: '#5840D6', ondark: '#8E82F2', tint: '#F1EFFE', ...veilViolet },
  			ink: { DEFAULT: '#14181F', deep: '#0E1118' },
  			blue: veilViolet,
  			indigo: veilViolet,
  			purple: veilViolet,
  			sky: veilViolet
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
