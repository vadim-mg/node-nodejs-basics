/* 
 implement function that reads data from process.stdin, 
 reverses text using Transform Stream and then writes it into process.stdout
*/
import { Transform, pipeline } from "node:stream"
class ReverseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    chunk = [...chunk.toString()]
    chunk.pop()
    chunk = chunk.reverse().join("") + "\n"
    callback(null, chunk)
  }
}

const transform = async () => {
  const reversData = new ReverseTransform()
  pipeline(process.stdin, reversData, process.stdout, (err) => err)
}

await transform()
