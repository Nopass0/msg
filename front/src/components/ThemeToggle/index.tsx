import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcom";
import { SunIcon } from "./SunIcon";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ThemeToggle = (props: any) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSelected) {
      dispatch({ type: "SET_THEME", payload: "dark" });
    } else {
      dispatch({ type: "SET_THEME", payload: "light" });
    }
  }, [isSelected]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <MoonIcon /> : <SunIcon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeToggle;
