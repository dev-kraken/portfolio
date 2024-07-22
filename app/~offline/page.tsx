import type { Metadata } from "next";
import { Link2Off } from "lucide-react";

export const metadata: Metadata = {
  title: "Offline - Dev Kraken",
};

export default function Page() {
  return (
    <div className="container flex min-h-[85vh] flex-col items-center justify-center space-y-3.5 text-center">
      <Link2Off className="size-10 animate-pulse" />
      <h1 className="text-2xl">You Are Currently Offline</h1>
      <h2>It looks like you&apos;re not connected to the internet.</h2>
      <p>
        No worries! You can still browse some parts of the site that have been
        cached for offline use. When you regain your internet connection,
        you&apos;ll be able to access the full functionality of the site.
      </p>
      <p>In the meantime, here are a few tips to help you get back online:</p>
      <ul>
        <li>Check your internet connection.</li>
        <li>Try restarting your router or modem.</li>
        <li>Ensure your device&apos;s Wi-Fi is turned on.</li>
      </ul>
      <p>
        If you continue to experience issues, please contact your internet
        service provider for further assistance.
      </p>
      <p>
        Thank you for visiting <strong>Dev Kraken</strong>. We appreciate your
        patience and understanding.
      </p>
    </div>
  );
}
