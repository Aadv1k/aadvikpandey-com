// Runs in <head> so the theme is set before first paint (no flash).
const root = document.documentElement
let stored = null
try { stored = localStorage.getItem('theme') } catch (e) {}
root.dataset.theme = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeBtn')
  const label = () => btn.textContent = root.dataset.theme === 'dark' ? 'light' : 'dark'
  label()
  btn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'
    try { localStorage.setItem('theme', root.dataset.theme) } catch (e) {}
    label()
  })
})
