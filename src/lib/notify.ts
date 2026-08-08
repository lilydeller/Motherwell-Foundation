/**
 * Outbound email for form submissions.
 *
 * Nothing is provisioned yet, so this deliberately has one seam: `sendEmail`.
 * With RESEND_API_KEY set it delivers through Resend; without it, submissions
 * are logged to the server so the forms are testable end-to-end and no message
 * is silently dropped.
 *
 * TODO before launch: provision an email provider, set RESEND_API_KEY and
 * MAIL_FROM, and fill in each studio's `email` in src/content/studios.ts.
 */

export type Mail = {
  to: string[];
  replyTo?: string;
  subject: string;
  text: string;
};

export async function sendEmail(mail: Mail): Promise<
  { ok: true; delivered: boolean } | { ok: false; error: string }
> {
  const key = process.env.RESEND_API_KEY;
  const from =
    process.env.MAIL_FROM ?? "MotherWell Foundation <onboarding@resend.dev>";

  const recipients = mail.to.filter(Boolean);
  if (recipients.length === 0) {
    return { ok: false, error: "No recipient configured." };
  }

  if (!key) {
    console.info(
      "[motherwell] email provider not configured — submission logged only\n",
      JSON.stringify({ ...mail, to: recipients }, null, 2),
    );
    return { ok: true, delivered: false };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: recipients,
        reply_to: mail.replyTo,
        subject: mail.subject,
        text: mail.text,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[motherwell] email send failed", res.status, body);
      return { ok: false, error: "Email provider rejected the message." };
    }

    return { ok: true, delivered: true };
  } catch (err) {
    console.error("[motherwell] email send threw", err);
    return { ok: false, error: "Could not reach the email provider." };
  }
}
