import React from "react";

function Page({ title, paragraph, children }) {
  return (
    <div className="Page">
      <h1>{title}</h1>
      <p>{paragraph}</p>
      {children}
    </div>
  );
}

export default Page;
