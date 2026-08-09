const DEMO_MODULES = [
  "./gallery-layouts-demo.js",
  "./templates-demo.js",
  "./lightbox-demo.js",
  "./hover-demo.js",
];

function loadDemos() {
  DEMO_MODULES.forEach((path) => {
    import(path);
  });
}

if ("requestIdleCallback" in window) {
  requestIdleCallback(loadDemos, { timeout: 2000 });
} else {
  window.addEventListener("load", () => setTimeout(loadDemos, 1), {
    once: true,
  });
}
