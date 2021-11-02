const sentence = "hello there from lighthouse labs";
let timer = 1000; // starts delay at 1 second
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50; //increments timer by 50ms
}
setTimeout(() => {
  console.log("");
}, timer);