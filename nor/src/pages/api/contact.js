import nodemailer from "nodemailer";

export async function POST({ request }) {
  const formData =
    await request.formData();

  const name =
    formData.get("name");

  const email =
    formData.get("email");

  const message =
    formData.get("message");

  const transporter =
    nodemailer.createTransport({
      service: "gmail",

      auth: {
        user:
          import.meta.env.EMAIL_USER,
        pass:
          import.meta.env.EMAIL_PASS,
      },
    });

  try {
    await transporter.sendMail({
      from:
        import.meta.env.EMAIL_USER,

      to:
        "hello@norstudio.com",

      replyTo: email,

      subject:
        `New inquiry from ${name}`,

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

    return Response.redirect(
      new URL(
        "/contact?success=true",
        request.url
      ),
      303
    );
  } catch (error) {
    console.error(error);

    return Response.redirect(
      new URL(
        "/contact?error=true",
        request.url
      ),
      303
    );
  }
}