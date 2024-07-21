import { alpha, beta, delta, gamma } from "@/lib/params";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

/* The formula is needed as a component because we want to embed 
   the values of the parameters alpha, beta, gamma, and delta! */

export default async function FormulaFixed() {
  const P = `(${alpha} \\cdot C + ${beta} \\cdot S + ${gamma} \\cdot L )`;
  const Q = `(${1 - delta} + ${delta} \\cdot E/10)`;
  const formula = `$$\n${P} \\times ${Q}\n$$`;

  return (
    <div className="text-[1.2rem] my-6">
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
