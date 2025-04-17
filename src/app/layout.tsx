import "@/app/globals.css";
import { ClientBody } from "./ClientBody";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maquette Uloum | Cours de religion musulmane",
  description: "L'Institut maquette ouloum offre des cours immersifs de religion musulmane pour tous niveaux et un suivi personnalisé pour la mémorisation du Coran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
