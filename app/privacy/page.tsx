import React from "react";

export default function Privacy() {
  return (
    <main className="mx-auto w-full max-w-3xl p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-600">
          Last updated: 08 October 2025
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-gray-800">
          This Privacy Policy explains how this personal application (the
          “App”), created and maintained by{" "}
          <span className="font-medium">Bahoz Dev</span>, handles data when
          connecting to TikTok and when generating AI videos. The App is used
          solely by its creator and is not offered to third parties.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">1. Data Collected</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>
            <span className="font-medium">OAuth Data:</span> TikTok{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5">
              access_token
            </code>
            ,{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5">
              refresh_token
            </code>
            , and{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5">open_id</code>{" "}
            obtained after login.
          </li>
          <li>
            <span className="font-medium">Generated Content:</span> AI video
            files created and stored in a private Google Cloud Storage bucket or
            locally.
          </li>
          <li>
            The App does not collect names, emails, analytics, or cookies.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">2. Purpose of Processing</h2>
        <p className="text-gray-800">
          Collected tokens are used only to authenticate with TikTok and to
          upload videos in draft mode via the official TikTok API. No data is
          sold or shared with third parties.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">3. Storage & Security</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>
            Tokens and files are stored securely under the control of Bahoz Dev.
          </li>
          <li>Access is restricted to the creator of the App.</li>
          <li>
            Tokens are deleted upon manual request or when revoked via TikTok
            (or when no longer needed).
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">4. Your Control</h2>
        <p className="text-gray-800">
          As this is a personal tool, only the creator can access, revoke, or
          delete stored data at any time.
        </p>
      </section>

      <section className="mt-8 space-y-3">
  <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
  <p className="text-gray-800">
    The App interacts with several third-party services:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-gray-800">
    <li>
      <span className="font-medium">TikTok API:</span> used to upload videos in draft mode
      (Inbox) through TikTok’s official Content Posting API.
    </li>
    <li>
      <span className="font-medium">Google Cloud Storage (GCS):</span> used to securely
      store and retrieve AI-generated video files.
    </li>
    <li>
      <span className="font-medium">Groq API (Llama Model):</span> used to generate short,
      creative video prompts through the Llama language model. These prompts are processed
      locally and are not shared or logged by any third party.
    </li>
  </ul>
  <p className="text-gray-800">
    Each of these services is governed by its own privacy and security policies.
    The App complies with their official API usage terms and never transmits
    additional personal data beyond what is technically required.
  </p>
</section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">6. Contact</h2>
        <p className="text-gray-800">
          For privacy questions or deletion requests, contact:{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="mailto:bahoz.coding@gmail.com"
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
