"use client";

import { Menu } from "@/types/types";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

export default function SliderContent({ menu }: { menu: Menu[] }) {
  return (
    <div className="flex flex-col space-y-3">
      {menu.map((item, index) => (
        <CollapseDiv key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function CollapseDiv({ item, index }: { item: Menu; index: number }) {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
  console.log(index, maxHeight);
  return (
    <>
      <div
        className="flex justify-between"
        key={index}
        onClick={(e) =>
          maxHeight === 0
            ? setMaxHeight(e.currentTarget.nextElementSibling?.scrollHeight)
            : setMaxHeight(0)
        }
      >
        <h1>{item.menuTrigger}</h1>
        {item.menuItems && <ChevronDownIcon className="h-4 w-4" />}
      </div>
      {item.menuItems && (
        <ul
          className="w-full transition-all duration-500 overflow-hidden border-l"
          style={{ maxHeight: `${maxHeight}px` }}
        >
          {item.menuItems.map((item, index) => (
            <li className="ml-4" key={index}>
              {item.menubarItem}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
