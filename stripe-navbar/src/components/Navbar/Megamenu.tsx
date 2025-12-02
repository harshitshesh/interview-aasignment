import Icon from "../IconMapper";
import type { Section } from "../../types";

export default function MegaMenu({ sections }: { sections: Section[] }) {
  return (

    <div
      role="menu"
      aria-label="Solutions menu"
      className="bg-white rounded-lg shadow-lg ring-1 ring-black/5 p-6"
      style={{ width: "max-content", minWidth: 640, maxWidth: 1100 }}
    >
      <div className="">
        {sections.map((sec) => (
          <div key={sec.title} className="mt-8">
            <h4 className="text-xs font-extrabold text-gray-600 mb-1">{sec.title}</h4>

            <ul className=" grid grid-cols-1 md:grid-cols-2 gap-3 py-3">
              {sec.items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.url}
                    className="flex items-start   rounded-md hover:bg-gray-50 transition-colors"
                    role="menuitem"
                    {...(it.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <div className="flex-shrink-0 text-gray-500 ">
                      <Icon name={it.icon} size={18} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900">{it.label}</div>
                    </div>

                    {it.external && (
                      <div className="ml-auto text-gray-400">
                        <Icon name="external" size={14} />
                      </div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
