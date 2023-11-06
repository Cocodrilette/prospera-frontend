interface Item {
  href: string
  label: string
}

interface FooterItemProps {
  title: string
  items: Item[]
  key: string
}

export function FooterItem({ title, items, key }: FooterItemProps) {
  return (
    <div id={key} key={key}>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {items.map((item, idx) => {
          const key = `footer-li-${idx}`

          return (
            <li className="mb-4" id={key} key={key}>
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
