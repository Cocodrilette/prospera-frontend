interface Item {
  href: string
  label: string
}

interface FooterItemProps {
  title: string
  items: Item[]
  id: string
}

export function FooterItem({ title, items, id }: FooterItemProps) {
  return (
    <div id={id}>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {items.map((item, idx) => (
          <li className="mb-4" id={`footer-li-${idx}`}>
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
