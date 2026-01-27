import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 h-[var(--space-20)] flex items-center px-[var(--space-6)] transition-all duration-300",
        "bg-black/80 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm"
      )}
    >
      <div className="container mx-auto flex justify-center items-center h-full w-full">
        <Link href="/" className="relative h-12 w-48 hover:opacity-90 transition-opacity">
          <Image 
            src="/logo-praca-da-moca-cafe.png" 
            alt="Praça da Moça Café" 
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
