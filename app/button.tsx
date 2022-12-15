import React from "react";
import Link from "next/link";

export function ButtonExternal ({ children, href }) {
  return <div className="text-center p-8">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer">
          <div className="p-7 drop-shadow-2xl max-h-21 min-w-20 justify-center leading-tight mx-auto">
              <button 
              className="hover:scale-105 iwbuttonsolid">
                <h4 className="align-middle grow p-2 shrink font-normal leading-tight">
                {children}
                </h4>
              </button>
          </div>

        </Link>
    </div>
}

export function ButtonInternal ({ children, href}) {
  return <div className="mx-auto text-center p-8">
        <Link href={href}>
        <div className="drop-shadow-2xl max-h-21 min-w-20 justify-center leading-tight mx-auto">
            <button 
            className="hover:scale-105 iwbuttonsolid">
              <h4 className="align-middle p-2 shrink font-normal leading-tight">
              {children}
              </h4>
            </button>
        </div>
        </Link>
    </div>
}

