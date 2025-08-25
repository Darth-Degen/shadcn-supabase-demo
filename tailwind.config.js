/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		backgroundImage: {
  			'white-gradient': '`linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`'
  		},
  		fontFamily: {
  			primary: 'Manrope'
  		},
  		fontWeight: {
  			light: 300,
  			normal: 400,
  			medium: 500,
  			semibold: 600,
  			bold: 700,
  			extrabold: 800,
  			black: 900
  		},
  		fontStyle: {
  			italic: 'italic'
  		},
  		colors: {
  			bg: 'rgb(var(--bg) / <alpha-value>)',
  			fg: 'rgb(var(--fg) / <alpha-value>)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			page: 'rgb(var(--page) / <alpha-value>)',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			'accent-foreground': 'rgb(var(--accent-foreground) / <alpha-value>)',
  			success: 'rgb(var(--success) / <alpha-value>)',
  			warning: 'rgb(var(--warning) / <alpha-value>)',
  			danger: 'rgb(var(--danger) / <alpha-value>)',
  			link: 'rgb(var(--link) / <alpha-value>)',
  			gray: {
  				'600': '#2C2C2C',
  				'700': '#242424',
  				'800': '#1A1A1A',
  				'900': '#121212'
  			},
  			purple: {
  				'400': '#8852e6',
  				'500': '#7b3fe4',
  				'600': '#6e38cd',
  				'700': '#6232b6',
  				'800': '#562c9f',
  				DEFAULT: '#7b3fe4'
  			},
  			'template-black': '#121212',
  			'template-white': '#F3F1EA',
  			'template-yellow': '#FFBA21',
  			'template-green': '#56BC78',
  			'template-orange': '#FF5722',
  			'template-red': '#DF1D00',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			'2xs': '360px',
  			xs: '420px',
  			'3xl': '2160px',
  			'4xl': '3000px'
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
};
