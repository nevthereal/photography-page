import { Checkout } from "@polar-sh/astro";
import { POLAR_ACCESS_TOKEN, POLAR_SUCCESS_URL } from "astro:env";

export const GET = Checkout({
  accessToken: POLAR_ACCESS_TOKEN,
  successUrl: POLAR_SUCCESS_URL,
  server: "sandbox", // Use sandbox if you're testing Polar - omit the parameter or pass 'production' otherwise,,
});
