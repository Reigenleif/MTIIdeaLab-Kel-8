import { PopupContextProvider } from "./popupContext";

export default function ContextProviders({
  children,
}: {
  children: JSX.Element;
}) {
  return <PopupContextProvider>{children}</PopupContextProvider>;
}
