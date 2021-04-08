import { MODE_NONE } from "../../services/mode";

export default function Info(props) {
  const INFO_SHORTCUT_KEYS = "Press '/' to search an 'N' to create a new item.";
  const INFO_CANCEL_SHORTCUT_KEY = "Press 'Esc' to cancel.";
  const message =
    props.mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;

  return <p>{message}</p>;
}
