import '../styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: 'Celebrity App',
  description: 'AI powered onboarding',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
