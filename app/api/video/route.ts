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
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt,
        },
      }
    );

    return NextResponse.json(output, { status: 200 });
  } catch (error) {
    return new NextResponse("Intenal server errorr", { status: 500 });
  }
}
