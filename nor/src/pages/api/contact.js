import nodemailer from "nodemailer";

export async function POST({ request }) {
  const { name, email, message } =
    await request.json();

  const transporter =
    nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

  try {
    await transporter.sendMail({
      from: import.meta.env.EMAIL_USER,

      to: "hello@norstudio.com",

      replyTo: email,

      subject: `New inquiry from ${name}`,

      html: `
        <h2>New inquiry</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
}