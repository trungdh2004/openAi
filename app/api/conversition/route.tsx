import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { messages } = await req.json();

    if (!userId) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return NextResponse.json("Miss open AI key", { status: 400 });
    }

    if (!messages) {
      return NextResponse.json("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages,
    });

    

    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      const { name, headers, status, message } = error;
      return NextResponse.json({ name, headers, message, status }, { status });
    } else {
      throw error;
    }
  }
}
