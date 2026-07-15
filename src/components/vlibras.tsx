"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
  }
}

export function VLibras() {
  useEffect(() => {
    if (document.getElementById("vlibras-root")) return;

    const root = document.createElement("div");
    root.id = "vlibras-root";
    root.setAttribute("vw", "");
    root.className = "enabled";

    const button = document.createElement("div");
    button.setAttribute("vw-access-button", "");
    button.className = "active";

    const wrapper = document.createElement("div");
    wrapper.setAttribute("vw-plugin-wrapper", "");

    const plugin = document.createElement("div");
    plugin.setAttribute("vp", "");

    wrapper.appendChild(plugin);
    root.appendChild(button);
    root.appendChild(wrapper);
    document.body.appendChild(root);

    return () => {
      root.remove();
    };
  }, []);

  return (
    <Script
      src="https://vlibras.gov.br/app/vlibras-plugin.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      }}
    />
  );
}
