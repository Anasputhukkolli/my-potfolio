import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navigation/Navbar';

export const metadata: Metadata = {
  title: 'Anas | Full Stack Developer',
  description:
    'Professional portfolio of Anas Puthukkolli — Full Stack & React Native developer building web and mobile experiences.',
  keywords: 'Anas, Full Stack Developer, React, Django, Web Developer, UI/UX',
  authors: [{ name: 'Anas Puthukkolli' }],
  creator: 'Anas Puthukkolli',
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 antialiased">

        {/* Outer centering shell */}
        <div className="min-h-screen max-w-[1200px] mx-auto">

          <main className="flex gap-6 p-4 lg:p-6 max-lg:flex-col">

            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 min-w-0 pb-24 lg:pb-0">

              {/* White content card */}
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                <Navbar />
                <div className="p-1">
                  {children}
                </div>
              </div>

            </div>
          </main>
        </div>

      </body>
    </html>
  );
}