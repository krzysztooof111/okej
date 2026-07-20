const fs=require(`fs`)

fs.writeFile("message.txt", "Witaj w Node JS",err => {
  if (err) {
    console.error(err);
  } else {
    console.log("jeeej")  
}
});

fs.readFile('/Users/mac/Desktop/NAUCZKA/2.2 node/message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
