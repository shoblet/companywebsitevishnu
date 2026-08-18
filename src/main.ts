import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const splashStartedAt = performance.now();

function hideSplash(): void {
  const splash = document.getElementById('app-splash');
  if (!splash) {
    return;
  }

  splash.classList.add('is-done');
  splash.addEventListener(
    'transitionend',
    () => {
      splash.remove();
    },
    { once: true },
  );
}

bootstrapApplication(App, appConfig)
  .then(() => {
    const elapsed = performance.now() - splashStartedAt;
    const remaining = Math.max(0, 1100 - elapsed);
    window.setTimeout(hideSplash, remaining);
  })
  .catch((err) => {
    hideSplash();
    console.error(err);
  });
