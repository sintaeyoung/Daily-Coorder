import React from "react";

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div style={{ margin: "0 auto", marginTop: "40px" }}>{children}</div>;
}

export default Section;
