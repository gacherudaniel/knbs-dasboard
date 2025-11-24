export interface SectionProps {
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export interface SidebarProps {
  expandedSections: Record<string, boolean>;
  onToggle: (id: string) => void;
}