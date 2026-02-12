// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// function isValidEmail(email: string) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const name = String(body?.name ?? "").trim();
//     const email = String(body?.email ?? "").trim();
//     const message = String(body?.message ?? "").trim();

//     // honeypot - приховане поле (боти часто його заповнюють)
//     const company = String(body?.company ?? "").trim();
//     if (company) return Response.json({ ok: true });

//     if (!name || !email || !message) {
//       return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
//     }
//     if (!isValidEmail(email)) {
//       return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
//     }
//     if (message.length > 5000) {
//       return Response.json({ ok: false, error: "Message too long" }, { status: 400 });
//     }

//     await resend.emails.send({
//       from: "JPD Ukraine Website <no-reply@yourdomain.com>", // домен має бути верифікований у Resend
//       to: ["info@yourdomain.com"], // куди падатиме форма
//       subject: `New contact form message - ${name}`,
//       replyTo: email,
//       text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
//     });

//     return Response.json({ ok: true });
//   } catch (e) {
//     console.error(e);
//     return Response.json({ ok: false, error: "Failed to send" }, { status: 500 });
//   }
// }
