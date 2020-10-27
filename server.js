
const express=require('express')
let app=express()
 
app.use(express.static(__dirname+ '/public'));

 
// Start the server on port 8000

app.listen(3000, () => {
  console.log('Server started on port 3000')
})