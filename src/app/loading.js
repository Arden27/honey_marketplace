import React from "react";

export default function Loading() {
  return (
    <React.Fragment>
      <div className="fixed left-0 top-0 z-[100] h-3xs w-full bg-text">
        <div className="h-2 w-2/5 animate-loading bg-primary"></div>
      </div>
    </React.Fragment>
  );
}
