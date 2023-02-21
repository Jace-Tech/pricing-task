import { ControlProps, CSSObjectWithLabel, GroupBase } from "react-select";

export const styles = {
  control: (baseStyles: CSSObjectWithLabel, state: ControlProps<any, false, GroupBase<any>>) => ({
    ...baseStyles,
    padding: ".4rem 1rem",
    // borderColor: state.isFocused ? "grey" : "red",
  }),
  indicatorSeparator: (baseStyles: CSSObjectWithLabel, state: ControlProps<any, false, GroupBase<any>>) => ({
    ...baseStyles,
    display: "none"
  })
};
