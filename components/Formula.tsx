import { alpha, beta, delta, gamma } from "@/lib/params";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

/* The formula is needed as a component because we want to embed 
   the values of the parameters alpha, beta, gamma, and delta! */

export default async function RemoteMdxPage() {
  const part1 = `\\big(${alpha} \\cdot C + ${beta} \\cdot S + ${gamma} \\cdot L \\big)`;
  const part2 = `\\big(${1 - delta} + ${delta} \\cdot E/10\\big)`;

  const formula = `$$
${part1} \\times ${part2}
$$`;
  return (
    <div className="text-[1.1rem] my-6">
      <MDXRemote
        source={formula}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }}
      />
    </div>
  );
}
