import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  NAVIGATION_STRUCTURE,
  type NavigationItem,
} from "../../types/navigation";

interface MainNavigationProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
}

export function MainNavigation({
  onNavigate,
  currentPath,
}: MainNavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const subMenuTimeoutRef = useRef<number | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleItemClick = (item: NavigationItem) => {
    if (item.path) {
      onNavigate(item.path);
      setOpenDropdown(null);
      setHoveredSubMenu(null);
    }
  };

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredSubMenu(null);
    }, 500); // Increased to 300ms for better usability
  };

  const handleSubMenuEnter = (id: string) => {
    if (subMenuTimeoutRef.current) {
      clearTimeout(subMenuTimeoutRef.current);
    }
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredSubMenu(id);
  };

  const handleSubMenuLeave = () => {
    subMenuTimeoutRef.current = setTimeout(() => {
      setHoveredSubMenu(null);
    }, 500); // Increased to 500ms for much better submenu navigation
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (subMenuTimeoutRef.current) {
        clearTimeout(subMenuTimeoutRef.current);
      }
    };
  }, []);

  const renderDropdownItems = (items: NavigationItem[]) => {
    return (
      <div
        className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]"
        onMouseEnter={() => {
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }
          if (subMenuTimeoutRef.current) {
            clearTimeout(subMenuTimeoutRef.current);
          }
        }}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item) => {
          const isActive = currentPath === item.path;
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => {
                if (hasChildren) {
                  handleSubMenuEnter(item.id);
                } else {
                  // Clear submenu when hovering over non-submenu items
                  if (subMenuTimeoutRef.current) {
                    clearTimeout(subMenuTimeoutRef.current);
                  }
                  setHoveredSubMenu(null);
                }
              }}
              onMouseLeave={() => {
                if (hasChildren) {
                  handleSubMenuLeave();
                }
              }}
            >
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                  isActive
                    ? "bg-knbs-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                } first:rounded-t-lg last:rounded-b-lg`}
              >
                {item.label}
                {hasChildren && (
                  <ChevronDown
                    size={14}
                    className="inline-block ml-2 transform -rotate-90"
                  />
                )}
              </button>

              {hasChildren && hoveredSubMenu === item.id && (
                <div
                  className="absolute left-full top-0 -ml-1 pl-2 pt-1 pb-1"
                  onMouseEnter={() => {
                    handleSubMenuEnter(item.id);
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    if (subMenuTimeoutRef.current) {
                      clearTimeout(subMenuTimeoutRef.current);
                    }
                  }}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-[220px]">
                    {item.children!.map((subItem) => {
                      const isSubActive = currentPath === subItem.path;
                      return (
                        <button
                          key={subItem.id}
                          onClick={() => handleItemClick(subItem)}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                            isSubActive
                              ? "bg-knbs-500 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          } first:rounded-t-lg last:rounded-b-lg`}
                        >
                          {subItem.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <div className="flex items-center space-x-0">
          <div className="flex items-center space-x-1">
            {NAVIGATION_STRUCTURE.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      handleMouseEnter(item.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) {
                      handleMouseLeave();
                    }
                  }}
                >
                  <button
                    onClick={() => {
                      if (hasChildren) {
                        toggleDropdown(item.id);
                      } else if (item.path) {
                        onNavigate(item.path);
                      }
                    }}
                    className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-150 rounded-lg ${
                      // Check if current item is active (for items with direct paths) or if any child path matches
                      (item.path && currentPath === item.path) ||
                      (hasChildren && currentPath?.startsWith(`/${item.id}/`))
                        ? "bg-knbs-500 text-white"
                        : "text-knbs-700 hover:bg-knbs-50 hover:text-knbs-800"
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        size={16}
                        className={`ml-2 transform transition-transform duration-150 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {hasChildren && isOpen && renderDropdownItems(item.children!)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
