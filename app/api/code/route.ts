import { auth } from "@clerk/nextjs";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { messages } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("miss OpenAI key", { status: 500 });
    }

    if (!messages)
      return new NextResponse("missing OpenAI message", { status: 400 });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        { role: "system", content: "OpenAI message code" },
        ...messages,
      ],
    });

    const strem = await OpenAIStream(response);

    return new StreamingTextResponse(strem);
  } catch (error) {
    return new NextResponse("internal error", { status: 500 });
  }
}
