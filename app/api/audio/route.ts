import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const configuration = {
  auth: process.env.REPLICATE_API_TOKEN,
};
const replicate = new Replicate(configuration);
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt } = await req.json();

    console.log(prompt);

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!prompt)
      return new NextResponse("UnPrompt request not push", { status: 401 });

    // ai
    const output = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    );

    return NextResponse.json(output, { status: 200 });
  } catch (error) {
    return new NextResponse("Intenal server errorr", { status: 500 });
  }
}
