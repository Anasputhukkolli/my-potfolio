import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navigation/Navbar';

export const metadata: Metadata = {
  title: 'Anas | Developer | Web developer',
  description: 'My professional Portfolio for exhibiting my programs and projects, that i make during my college life by extensive research and collabrating with my developer friends.',
  keywords: 'Anas, UI Designer, UX, Developer, Web Developer, Full Stack Developer',
  authors: [{ name: 'Anas' }],
  creator: 'Anas',
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex gap-4 p-4 max-w-[1200px] mx-auto max-lg:flex-col ">
          {/* Sidebar */}
            <Sidebar />

          {/* Main Content */}
          <div className="flex-1 min-w-0 mb-18">
            {/* Navigation */}
            <Navbar />

            {/* Page Content */}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}