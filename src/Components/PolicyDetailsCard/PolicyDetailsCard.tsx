import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

export const Card = (info: any, title: string) => {
  return (
    <div className="card" style={{ minHeight: "320px", borderRadius: "20px" }}>
      <h1>{title}</h1>
      {info.data.map(
        (
          data:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined,
          i: string | number
        ) => {
          return (
            <div
              className="policy-field"
              style={i == 0 ? { marginTop: "30px" } : { marginTop: "10px" }}
            >
              <div className="field-name">{data}</div>
              <div className="field-value">{info.value[i]}</div>
            </div>
          );
        }
      )}
    </div>
  );
};
