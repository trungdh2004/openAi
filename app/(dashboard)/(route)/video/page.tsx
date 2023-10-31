"use client";
import React, { useRef, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import ToolsNavigation from "@/components/dashboard/ToolsNavigation";
import UserMesages from "@/components/dashboard/UserMesages";
import AiResponse from "@/components/dashboard/AiResponse";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PHOTO_AMOUNT_OPTIONS, PHOTO_RESOLUTION_OPTIONS } from "@/constants";

interface MessagesType {
  id: string;
  content: string;
  role: "user" | "assistant";
}

const formSchema = z.object({
  prompt: z.string().min(1, { message: "Photo prompt is required" }),
});
const VideoPage = () => {
  const [messages, setMessages] = useState<MessagesType[]>([]);
  const containerRef = useRef<null | HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const handleScrollToButton = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const isLoading = form.formState.isLoading;

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      setMessages((current) => [
        ...current,
        {
          id: uuidv4(),
          role: "user",
          content: `${value.prompt} `,
        },
        {
          id: uuidv4(),
          role: "assistant",
          content: "",
        },
      ]);

      handleScrollToButton();
      form.reset();

      const { data } = await axios.post("/api/video", value);

      setMessages((current) => {
        const newMessage = [...current];
        newMessage[newMessage.length - 1].content = data[0];
        return newMessage;
      });

      handleScrollToButton();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="h-full relative flex flex-col justify-between">
      <div
        className="h-[calc(100vh-180px)] overflow-y-auto space-y-10 scroll-smooth scrollbar-none scrollnone"
        ref={containerRef}
      >
        {messages.length > 0 ? (
          <>
            {messages.map((m) => (
              <div key={m.id} className=" whitespace-pre-wrap">
                {m.role === "user" ? (
                  <UserMesages>{m.content}</UserMesages>
                ) : (
                  <AiResponse>
                    {m.content ? (
                      <div
                        className={cn(
                          "block mb-4 space-y-4",
                          "lg:flex lg:flex-wrap lg:items-center lg:space-x-4 "
                        )}
                      >
                        <video src={m.content} controls />
                      </div>
                    ) : (
                      <Loading />
                    )}
                  </AiResponse>
                )}
              </div>
            ))}
            <div className="absolute left-0 bottom-6 text-right w-full pr-3">
              <Button size="sm" variant="outline" onClick={handleClearChat}>
                Clear Chat
              </Button>
            </div>
          </>
        ) : (
          <ToolsNavigation title="Video" />
        )}
      </div>
      <div className="mb-[13px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center w-full relative"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      placeholder="Cat kiss dog .."
                      className="min-h-1 resize-none outline-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex absolute right-2 items-center space-x-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="gradient-btn"
              >
                <Send />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VideoPage;
