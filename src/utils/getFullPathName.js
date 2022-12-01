import { dirname, normalize } from "node:path"
import { fileURLToPath } from "node:url"

export function getFullPathName(url, name = "") {
  return normalize(dirname(fileURLToPath(url)) + "/files" + name)
}
