import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Highlight, themes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        code: ({ node, className, children, ...props }) => {
          //   console.log("Code props:", { className, children, node, ...props });
          const isBlock = node?.properties.className ? true : false;
          const match = /language-(\w+)/.exec(className || "");
          const language = match?.[1] || "text";
          const theme = themes.jettwaveLight;

          return isBlock ? (
            <Highlight
              theme={theme}
              code={String(children).replace(/\n$/, "")}
              language={language}
            >
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style} className="rounded-[5px] px-3 pb-3">
                  <p className="pointer-events-none pt-2 text-right text-[15px] select-none">
                    {language}
                  </p>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })} className="">
                      <span className="pointer-events-none mr-3 opacity-50 select-none">
                        {i + 1}
                      </span>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          ) : (
            <code
              className={`rounded-[5px] p-1 ${className || ""}`}
              {...props}
              style={{
                backgroundColor: theme.plain.backgroundColor,
                color: theme.plain.color,
              }}
            >
              {children}
            </code>
          );
        },
        h1: ({ children, ...props }) => {
          return (
            <h1 className="text-2xl font-bold" {...props}>
              {children}
            </h1>
          );
        },
        h2: ({ children, ...props }) => {
          return (
            <h2 className="text-xl font-bold" {...props}>
              {children}
            </h2>
          );
        },
        blockquote: ({ children, ...props }) => {
          return (
            <blockquote
              className="m-1 border-l-4 border-blue-400 bg-gray-100 p-4 text-gray-700 italic shadow-xl"
              {...props}
            >
              {children}
            </blockquote>
          );
        },
        table: ({ children, ...props }) => {
          return (
            <table
              className="border-2xl border-gray-7000 w-full border-collapse border"
              {...props}
            >
              {children}
            </table>
          );
        },
        tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
        tr: ({ children, ...props }) => (
          <tr className="border border-gray-300 odd:bg-gray-100" {...props}>
            {children}
          </tr>
        ),
        th: ({ children, ...props }) => (
          <th
            className="border border-gray-300 bg-gray-50 px-2 py-1"
            {...props}
          >
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td className="border border-gray-300 px-2 py-1" {...props}>
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
