import { dirname, normalize } from "node:path"
import { fileURLToPath } from "node:url"

export function getFullPathName(url, name = "", subDir = "/files") {
  return normalize(dirname(fileURLToPath(url)) + subDir + name)
}
