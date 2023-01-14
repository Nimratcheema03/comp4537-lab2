const express = require('express');
const app = express(); 
const cors = require('cors');
app.use(express.json()); // read JSON BODY
app.use(express.urlencoded({ extended: true })); // read URL encoded body
app.use(express.static("C:/Users/Nimrat Cheema/Desktop/Term4/Internet Architecture/lab2/comp4537-lab2/frontend"));
app.use(cors());
app.post('/chatbot', (req, res) => {
	const message = req.body.message;
	const number = message.match(/\d+/);
	if (number) {
		fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
			res.json({
				text: data
			});
		}).catch(error => {
			res.json({
				text: "Sorry, I couldn't find any information about that number."
			});
		});
	} else {
		res.json({
			text: "I'm sorry, I didn't understand your question. Please provide a number for me to give you information about."
		});
	}
});

app.get("/",(req, res)=>{
	res.sendFile("/frontend/index.html")
} )

const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

url = "https://chatbot-bsh7.onrender.com"
backend = process.env.url