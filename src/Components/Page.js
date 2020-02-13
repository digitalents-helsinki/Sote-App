import React from "react";

function Page({ title, paragraph, children }) {
  return (
    <div className="Page slidable">
      <div className="page-content">
        {title && <h1 className="page-title">{title}</h1>}
        {paragraph && <p className="page-paragraph">{paragraph}</p>}
        {children}
      </div>
    </div>
  );
}

export default Page;
