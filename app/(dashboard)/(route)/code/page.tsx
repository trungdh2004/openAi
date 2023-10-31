"use client";
import AiResponse from "@/components/dashboard/AiResponse";
import MarkdowResponse from "@/components/dashboard/MarkdowResponse";
import ToolsNavigation from "@/components/dashboard/ToolsNavigation";
import UserMesages from "@/components/dashboard/UserMesages";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useProStore } from "@/store/pro-store";
import { useChat } from "ai/react";
import { Send } from "lucide-react";
import React, { useEffect, useRef } from "react";

const CodePage = () => {
  const codeRef = useRef<null | HTMLDivElement>(null);

  const { handleCloseProModal, handleOpenOrCloseProModal } = useProStore();
  const {
    messages,
    setMessages,
    error,
    input,
    stop,

    isLoading,
    handleInputChange,
    handleSubmit,
  } = useChat({
    api: "/api/code",
  });

  const handleClearChat = () => {
    setMessages([]);
  };

  useEffect(() => {
    if (error) {
      const errorParsed = JSON.parse(error?.message);
      if (errorParsed?.status === 403) {
        handleOpenOrCloseProModal();
      }
    }
  }, [error, handleCloseProModal]);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-full relative flex-col justify-between ">
      <div
        className="h-[calc(100vh-180px)] overflow-y-auto space-y-10 scroll-smooth scrollbar-none scrollnone"
        ref={codeRef}
      >
        {messages.length > 0 ? (
          <>
            {messages.map((m) => (
              <div key={m.id} className=" whitespace-pre-wrap">
                {m.role === "user" ? (
                  <UserMesages>
                    <MarkdowResponse content={m.content} />
                  </UserMesages>
                ) : (
                  <AiResponse>
                    <MarkdowResponse content={m.content} />
                  </AiResponse>
                )}
              </div>
            ))}
            <div className="flex absolute left-0 bottom-20 text-right w-full pr-3">
              <Button size="sm" variant="outline" onClick={handleClearChat}>
                Clear Chat
              </Button>
            </div>
            {isLoading && (
              <div className="flex justify-center absolute right-0 bottom-20 text-right w-full pr-3">
                <Button size="sm" variant="outline" onClick={stop}>
                  Stop Chat
                </Button>
              </div>
            )}
          </>
        ) : (
          <ToolsNavigation title="Code" />
        )}
      </div>

      <div className="mb-[13px]">
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full relative"
        >
          <Textarea
            placeholder="Do you have any questions todays"
            value={input}
            onChange={handleInputChange}
            className="min-h-1 resize-none outline-none"
          />

          <Button
            type="submit"
            disabled={!input}
            className="absolute right-2 gradient-btn"
            onClick={() => {
              return isLoading && stop;
            }}
          >
            {isLoading ? "Stop" : <Send />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CodePage;
