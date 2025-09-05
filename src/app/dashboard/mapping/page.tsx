
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Mapping } from '@/components/dashboard/mapping';

export default function MappingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Mapping />
      <Footer />
    </div>
  );
}
