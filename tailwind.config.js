/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
        },
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        }
      },
      maxWidth: {
        'form': '480px',
        'container': '800px',
      },
      fontSize: {
        'form-label': ['0.875rem', '1.25rem'],
        'form-input': ['0.875rem', '1.25rem'],
      },
      borderRadius: {
        'form': '0.5rem',
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%)',
        'title-gradient': 'linear-gradient(90deg, #0071e3, #42a1ec)',
      },
    },
  },
  plugins: [],
} 