"use client";
import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdowResponseProps {
  content?: string;
}

const MarkdowResponse = ({ content }: MarkdowResponseProps) => {
  return (
    <>
      <Markdown
        className="text-sm overflow-hidden leading-7"
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                wrapLongLines
                showLineNumbers
                showInlineLineNumbers
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </>
  );
};

export default MarkdowResponse;
