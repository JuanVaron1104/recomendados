import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Decidiendo tu carrera',
  description: 'Ayudando a elegir entre UX/UI y Agronomía',
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'UX/UI', link: '/ux-ui/introduccion' },
      { text: 'Agronomía', link: '/agronomia/introduccion' }
    ],
    sidebar: {
      '/ux-ui/': [
        {
          text: 'Diseño UX/UI',
          items: [
            { text: '¿Qué es el diseño UX/UI?', link: '/ux-ui/introduccion' },
            { text: 'Carreras y Universidades', link: '/ux-ui/carreras' },
            { text: 'Herramientas populares', link: '/ux-ui/herramientas' }
          ]
        }
      ],
      '/agronomia/': [
        {
          text: 'Agronomía',
          items: [
            { text: 'Introducción a la Agronomía', link: '/agronomia/introduccion' },
            { text: 'Carreras y Universidades', link: '/agronomia/carreras' },
            { text: 'Temas relacionados con el campo', link: '/agronomia/campo' }
          ]
        }
      ]
    }
  }
})
