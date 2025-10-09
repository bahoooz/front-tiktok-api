import React from "react";

export default function Terms() {
  return (
    <main className="mx-auto w-full max-w-3xl p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: 08 October 2025</p>
      </header>

      <section className="space-y-4">
        <p className="text-gray-800">
          Welcome to this personal application (the “App”), developed and maintained by{" "}
          <span className="font-medium">Bahoz Dev</span>. The App allows its creator to
          generate short AI-based videos and upload them to TikTok using the official
          TikTok API.
        </p>
        <p className="text-gray-800">
          By using this App, you agree to these Terms of Service. This tool is for
          personal use only and is not provided to third parties.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">1. Purpose</h2>
        <p className="text-gray-800">
          The App is a private automation system designed to create and upload AI-generated
          videos to TikTok in <span className="font-medium">draft mode</span>. It does not
          perform automatic public posting or any action without user consent.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">2. Usage Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>The App must be used in compliance with TikTok’s Terms of Service.</li>
          <li>
            The creator is solely responsible for the content generated and uploaded via
            the App.
          </li>
          <li>
            The App may not be used to distribute harmful, illegal, or infringing content.
          </li>
          <li>
            Automated posting or misuse of the TikTok API is strictly prohibited.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
        <p className="text-gray-800">
          All source code, generated assets, and video outputs belong to{" "}
          <span className="font-medium">Bahoz Dev</span>. TikTok and its trademarks are
          property of TikTok Pte. Ltd. and are not affiliated with this project.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">4. Liability</h2>
        <p className="text-gray-800">
          This App is provided “as is”, without warranties of any kind. Bahoz Dev shall not
          be held liable for any issues arising from the use of this App, including but not
          limited to account suspension, data loss, or API restrictions applied by TikTok.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">5. Modifications</h2>
        <p className="text-gray-800">
          Bahoz Dev reserves the right to modify these Terms at any time without prior
          notice. Continued use of the App after updates constitutes acceptance of the
          revised Terms.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">6. Contact</h2>
        <p className="text-gray-800">
          For any inquiries regarding this App or these Terms, contact:{" "}
          <a
            href="mailto:bahoz.coding@gmail.com"
            className="font-medium underline underline-offset-4"
          >
            bahoz.coding@gmail.com
          </a>
          .
        </p>
      </section>

      <footer className="mt-12 border-t pt-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Bahoz Dev — All rights reserved.
      </footer>
    </main>
  );
}
