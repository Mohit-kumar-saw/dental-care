interface AdminPageHeaderProps {
  title: string;
  description?: string;
}

export default function AdminPageHeader({ title, description }: AdminPageHeaderProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-sm sm:text-base text-slate-500 max-w-2xl">{description}</p>
      )}
    </div>
  );
}
