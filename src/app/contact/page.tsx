import React from "react";
import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact & Devotee Services | Sri Ambamata Devasthana",
  description:
    "Official contact information, administration helpline, temple location directions, and donation guidelines for Sri Ambadevi Devasthana, Siddha Parvatha, Somalapura.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <ContactContent />
    </main>
  );
}
