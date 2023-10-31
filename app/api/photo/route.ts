import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
  try {
    const { prompt, amount, resolution } = await req.json();
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration)
      return new NextResponse("Miss openAI API key", { status: 500 });

    const response = await openai.images.generate({
      size: resolution,
      prompt,
      n: Number(amount),
    });

    return NextResponse.json(response);
  } catch (error) {
    return new NextResponse("Intenal server error", { status: 500 });
  }
}
