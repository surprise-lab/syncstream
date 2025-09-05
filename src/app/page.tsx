import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Dashboard } from '@/components/dashboard/dashboard';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
