"use client";

import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  File as FileIcon,
  Folder as FolderIcon,
} from "lucide-react";
import { useState } from "react";

interface TreeElement {
  id: string;
  name: string;
  children?: TreeElement[];
}

interface TreeProps {
  elements: TreeElement[];
  initialExpandedItems?: string[];
  initialSelectedId?: string;
  className?: string;
}

interface TreeItemProps {
  element: TreeElement;
  level: number;
  expandedItems: string[];
  onToggle: (id: string) => void;
}

export function Tree({
  className,
  elements,
  initialExpandedItems = [],
}: TreeProps) {
  const [expandedItems, setExpandedItems] =
    useState<string[]>(initialExpandedItems);

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className={cn("text-sm", className)}>
      {elements.map((element) => (
        <TreeItem
          key={element.id}
          element={element}
          level={0}
          expandedItems={expandedItems}
          onToggle={toggleItem}
        />
      ))}
    </div>
  );
}

function TreeItem({ element, level, expandedItems, onToggle }: TreeItemProps) {
  const isExpanded = expandedItems.includes(element.id);
  const hasChildren = element.children && element.children.length > 0;

  return (
    <div style={{ paddingLeft: `${level * 12}px` }}>
      <div
        className="flex cursor-pointer items-center gap-1 rounded-sm py-1 text-muted-foreground hover:text-foreground"
        onClick={() => hasChildren && onToggle(element.id)}
      >
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )
        ) : (
          <span className="w-4" />
        )}
        {hasChildren ? (
          <FolderIcon className="h-4 w-4" />
        ) : (
          <FileIcon className="h-4 w-4" />
        )}
        <span>{element.name}</span>
      </div>
      {isExpanded && hasChildren && (
        <div>
          {element.children.map((child) => (
            <TreeItem
              key={child.id}
              element={child}
              level={level + 1}
              expandedItems={expandedItems}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
