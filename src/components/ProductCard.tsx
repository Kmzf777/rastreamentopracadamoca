import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <div className="bg-[var(--surface-card)] rounded-[var(--radius-xl)] p-[var(--space-6)] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 group cursor-pointer h-full flex flex-col border border-transparent hover:border-[var(--border-subtle)]">
      <div className="relative aspect-[4/3] w-full mb-[var(--space-6)] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--surface-subtle)]">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-[var(--space-3)] group-hover:text-[var(--action-primary)] transition-colors">
          {title}
        </h3>
        <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed mb-[var(--space-4)] flex-grow">
          {description}
        </p>
        <button className="text-[var(--action-primary)] text-sm font-semibold uppercase tracking-widest border-b-2 border-transparent hover:border-[var(--action-primary)] self-start transition-all duration-300 pb-1 mt-auto">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}
