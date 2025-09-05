import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-6 px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <nav className="flex gap-6">
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
              Contact Us
            </Link>
          </nav>
          <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
            © 2024 SyncStream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
