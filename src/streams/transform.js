/* 
 implement function that reads data from process.stdin, 
 reverses text using Transform Stream and then writes it into process.stdout
*/

const transform = async () => {
  process.stdin.on("data", (data) => {
    data = [...data.toString()]
    data.pop()
    data = data.reverse().join("") + "\n"
    process.stdout.write(data)
  })
}

await transform()
