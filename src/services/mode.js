import * as KeyCode from "keycode-js";

export const MODE_NONE = "none";
export const MODE_SEARCH = "search";
export const MODE_CREATE = "create";

export function getNextModeByKey(current, keyPressed) {
  switch (current) {
    case MODE_NONE:
      if (keyPressed === KeyCode.KEY_SLASH) return MODE_SEARCH;
      if (keyPressed === KeyCode.KEY_N) return MODE_CREATE;

      break;

    default:
      if (keyPressed === KeyCode.KEY_ESCAPE) return MODE_NONE;
  }
  return current;
}
