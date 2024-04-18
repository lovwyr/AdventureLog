import type { LayoutServerLoad, PageServerLoad } from "./$types";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

if (process.env.USING_VERCEL === "true") {
  inject();
  injectSpeedInsights();
}

export const load: LayoutServerLoad = async (event) => {
  if (event.locals.user) {
    return {
      user: event.locals.user,
      isServerSetup: event.locals.isServerSetup,
    };
  }
  return {
    user: null,
    isServerSetup: event.locals.isServerSetup,
  };
};
