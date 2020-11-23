import React from "react";

function Page({ title, paragraph, paragraph2, children }) {
  return (
    <div className="Page slidable">
      <div className="page-content">
        {title && <h1 className="page-title">{title}</h1>}
        {paragraph && <p className="page-paragraph">{paragraph}</p>}
        {paragraph2 && <p className="page-paragraph2">{paragraph2}</p>}
        {children}
      </div>
    </div>
  );
}

export default Page;
