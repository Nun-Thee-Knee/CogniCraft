import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import TanstackProvider from "providers/TanstackProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CogniCraft - Quizify and Unleash the LLM power",
  description: "CogniCraft is a cutting-edge web application that harnesses the power of Artificial Intelligence to streamline the creation and extraction of multiple-choice questions (MCQs). With CogniCraft, educators, content creators, and students can effortlessly generate MCQs or extract them from PDF documents, saving valuable time and resources.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <TanstackProvider>
          <div>
          {children}
          </div>
          </TanstackProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
