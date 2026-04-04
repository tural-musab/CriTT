import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, sector, message } = body;

    if (!name || !company || !email || !phone) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return NextResponse.json({
        success: true,
        message: "Form alındı (e-posta servisi yapılandırılmamış).",
      });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "CriTT CRM <onboarding@resend.dev>",
      to: process.env.CONTACT_FORM_EMAIL || "info@critt.com.tr",
      subject: `Yeni İletişim Talebi: ${name} — ${company}`,
      html: `
        <h2>Yeni İletişim Formu Gönderimi</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Ad Soyad</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Şirket</td><td style="padding:8px;border:1px solid #ddd">${company}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">E-posta</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Sektör</td><td style="padding:8px;border:1px solid #ddd">${sector || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Mesaj</td><td style="padding:8px;border:1px solid #ddd">${message || "—"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true, message: "Mesajınız başarıyla gönderildi." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
