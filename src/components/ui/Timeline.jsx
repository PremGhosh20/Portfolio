export default function Timeline({ items }) {
  return (
    <ol className="space-y-0">
      {items.map((item, i) => (
        <li
          key={item.year}
          className={`relative pl-8 pb-8 ${i === items.length - 1 ? 'pb-0' : ''}`}
        >
          {i < items.length - 1 && (
            <span
              className="absolute left-[7px] top-4 bottom-0 w-px bg-border"
              aria-hidden="true"
            />
          )}
          <span
            className="absolute left-0 top-1.5 size-4 rounded-full bg-primary border-[3px] border-[var(--color-card)]"
            aria-hidden="true"
          />
          <p className="text-xs font-bold uppercase tracking-wider text-primary">{item.year}</p>
          <p className="text-base font-semibold text-primary-fg mt-1">{item.title}</p>
          <p className="text-small mt-0.5">{item.desc}</p>
        </li>
      ))}
    </ol>
  )
}
