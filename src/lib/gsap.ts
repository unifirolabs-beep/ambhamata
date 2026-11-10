import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Safe registration helper for GSAP plugins
let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(useGSAP);
    isRegistered = true;
  }
}

export { gsap, useGSAP };

