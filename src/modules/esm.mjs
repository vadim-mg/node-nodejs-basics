import path from "node:path"
import { release, version } from "node:os"
import { createServer as createServerHttp } from "node:http"
import "./files/c.js"

const random = Math.random()

const unknownObject = await import(`./files/${random > 0.5 ? "a" : "b"}.json`, {
  assert: { type: "json" },
})
  .then((module) => module.default)
  .catch((err) => console.error(err))

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

console.log(
  `Path to current file is ${path.normalize(import.meta.url).slice(6)}`
)
console.log(
  `Path to current directory is ${path
    .normalize(path.dirname(import.meta.url))
    .slice(6)}`
)

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted")
})

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => { 
  console.log(`Server is listening on port ${PORT}`)
  console.log("To terminate it, use Ctrl+C combination")
})

export { unknownObject, myServer }
