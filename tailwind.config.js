module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep authority blue for trust building
        primary: {
          DEFAULT: "#1e3a8a", // blue-900
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        // Secondary Colors - Active blue for interactive elements
        secondary: {
          DEFAULT: "#3b82f6", // blue-500
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
        },
        // Accent Colors - Success green for positive metrics
        accent: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
        },
        // Background Colors
        background: "#ffffff", // white - Clean canvas for data clarity
        surface: {
          DEFAULT: "#f8fafc", // slate-50 - Subtle depth without distraction
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
        },
        // Text Colors
        text: {
          primary: "#1f2937", // gray-800 - High contrast for extended reading
          secondary: "#6b7280", // gray-500 - Clear hierarchy without harshness
          muted: "#9ca3af", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600 - Improvement indicators and positive results
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
        },
        warning: {
          DEFAULT: "#d97706", // amber-600 - Attention for optimization opportunities
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
        },
        error: {
          DEFAULT: "#dc2626", // red-600 - Problem identification in case studies
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
        },
      },
      fontFamily: {
        // Headlines - Modern geometric clarity that conveys technical precision
        inter: ['Inter', 'sans-serif'],
        // Body - Readable serif that adds approachability to complex technical content
        serif: ['Source Serif 4', 'serif'],
        // Accents - Monospace for code examples and technical specifications
        mono: ['JetBrains Mono', 'monospace'],
        // Default sans-serif
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'metric': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'data': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}