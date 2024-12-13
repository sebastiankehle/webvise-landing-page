import { contactFormSchema } from "@/content/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, type, budget } =
      contactFormSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@webvise.io>",
      to: ["mail@webvise.io"],
      subject: `New ${type} inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Type: ${type}
${budget ? `Budget: ${budget}` : ""}

Message:
${message}
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
