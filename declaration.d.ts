export {};



declare global {
  interface Window {
    timer: ReturnType<typeof setInterval>,
  }
}