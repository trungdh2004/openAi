import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";

import { stripe } from "@/lib/stripe";
import { prismaDb } from "@/lib/prismadb";
import { absoluteUrl } from "@/lib/utils";

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userSubscription = await prismaDb.userSubcription.findUnique({
      where: {
        userId,
      },
    });

    const dashboardUrl = absoluteUrl("/dashboard");
    if (userSubscription?.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: dashboardUrl,
      });

      return NextResponse.json({ url: stripeSession.url }, { status: 200 });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: dashboardUrl,
      cancel_url: dashboardUrl,
      payment_method_types: ["card"],
      customer_email: user.emailAddresses[0].emailAddress,
      mode: "subscription",
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Brainfast Pro",
              description: "Unlimited Generations",
            },
            unit_amount: 10000,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    console.log(stripeSession);

    return NextResponse.json({ url: stripeSession.url }, { status: 200 });
  } catch (error) {
    return new NextResponse("Sơmething went wrong.", { status: 500 });
  }
}
