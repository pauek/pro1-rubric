import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

/** @type {import('@next/mdx').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
