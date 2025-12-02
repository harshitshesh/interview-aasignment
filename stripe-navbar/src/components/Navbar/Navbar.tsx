import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navbarItems } from "../../data/Navbaritems";
import MegaMenu from "./Megamenu";
import Icon from "../IconMapper";



export default function Navbar() {

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const [pinnedMenu, setPinnedMenu] = useState<string | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setPinnedMenu(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);


  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setPinnedMenu(null);
        setMobileOpen(false);
        setMobileSolutionsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  return (

    <nav className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          <div className="flex items-center gap-6">
            <div className="text-lg font-bold">Logo</div>

            <ul className="hidden md:flex items-center gap-6">
              {navbarItems.map((item) => (
                <li
                  key={item.menu}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.sections) {
                      setOpenMenu(item.menu);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.sections) {
                      if (pinnedMenu === item.menu) {
                        setOpenMenu(item.menu);
                      } else {
                        setOpenMenu((prev) => (prev === item.menu ? null : prev));
                      }
                    }
                  }}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium"
                    aria-haspopup={!!item.sections}
                    aria-expanded={openMenu === item.menu}
                    onFocus={() => item.sections && setOpenMenu(item.menu)} // open on keyboard focus
                    onBlur={() => {
                      if (item.sections && pinnedMenu !== item.menu) {
                        setOpenMenu((prev) => (prev === item.menu ? null : prev));
                      }
                    }}
                    onClick={() => {
                      if (!item.sections) return;
                      if (pinnedMenu === item.menu) {
                        setPinnedMenu(null);
                        setOpenMenu(null);
                      } else {
                        setPinnedMenu(item.menu);
                        setOpenMenu(item.menu);
                      }
                    }}
                  >
                    {item.menu}
                    {item.sections && (
                      <ChevronDown
                        size={14}
                        className={`ml-1 transition-transform duration-150 ${openMenu === item.menu ? "rotate-0" : "rotate-180"}`}
                      />
                    )}
                  </button>

                  {item.sections && openMenu === item.menu && (
                    <div className="absolute left-0 top-full mt-3 z-50">
                      <div className="animate-slideDown">
                        <MegaMenu sections={item.sections} />
                      </div>
                    </div>
                  )}
                </li>

              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-full bg-white/20 text-white text-sm">Sign in</button>
              <button className="px-4 py-2 rounded-full bg-white text-black text-sm">Contact sales</button>
            </div>

            <div className="md:hidden">
              <button
                aria-label="Open menu"
                onClick={() => {
                  setMobileOpen(true);
                  setMobileSolutionsOpen(false);
                }}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white text-black overflow-auto">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="text-lg font-bold">Logo</div>
            <div>
              <button
                aria-label="Close menu"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileSolutionsOpen(false);
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="p-4">
            {!mobileSolutionsOpen && (
              <div>
                <ul className="space-y-4">
                  {navbarItems.map((item) => (
                    <li key={item.menu}>
                      {item.sections ? (
                        <button
                          className="flex items-center justify-between w-full py-3 text-left"
                          onClick={() => setMobileSolutionsOpen(true)}
                        >
                          <span className="text-base font-medium">{item.menu}</span>
                          <ChevronDown size={16} />
                        </button>
                      ) : (
                        <a href={item.url} className="block py-3 text-base font-medium">
                          {item.menu}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3">
                  <button className="w-full py-3 border rounded">Sign in</button>
                  <button className="w-full py-3 bg-black text-white rounded">Contact sales</button>
                </div>
              </div>
            )}

            {mobileSolutionsOpen && (
              <div>
                <div className="mb-4">
                  <button
                    className="text-sm font-medium"
                    onClick={() => {
                      setMobileSolutionsOpen(false);
                    }}
                  >
                    ← Back
                  </button>
                </div>

                <div className="space-y-6">
                  {navbarItems
                    .filter((ni) => ni.menu === "Solutions")
                    .map((sol) =>
                      sol.sections?.map((sec) => (
                        <div key={sec.title}>
                          <h4 className="text-sm font-semibold mb-2">{sec.title}</h4>
                          <ul className="space-y-2">
                            {sec.items.map((it) => (
                              <li key={it.label}>
                                <a href={it.url} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                                  <div className="text-sky-500">
                                    <Icon name={it.icon} size={18} />
                                  </div>
                                  <div>{it.label}</div>
                                  {it.external && <div className="ml-auto text-gray-400"><Icon name="external" size={14} /></div>}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    )}
                </div>

                <div className="mt-6 space-y-3">
                  <button className="w-full py-3 border rounded">Sign in</button>
                  <button className="w-full py-3 bg-black text-white rounded">Contact sales</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
