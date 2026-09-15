import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: "auto",
  },
});

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/professional-hello-world",
  trailingSlash: true,
};

export default withVanillaExtract(nextConfig);
