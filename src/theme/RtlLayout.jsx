import React, { useEffect } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";


export default function RtlLayout({ children }) {
  useEffect(() => {
    document.dir = "rtl";
  }, []);

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
