const express = require('express');
let questionList = require('./questions.json');

const app = express();

//serve static contents
app.use(express.static('static'));

//dynamic handling
app.get('/questions', (request, response) => {
    let content ='';
    for (q of questionList)
    {
        content += '<div>';
        content += p.stem + '<br/>' + p.options + '<br/>' + p.answerIndex 
        //content += '<br>'
        content += '</div>'
        content += '<br/>';
    }

    response.send(content);
})

app.get('/questionsInJson', (req,res) => {
  //  res.send(JSON.stringify(questionList));
    res.json(questionList);
})



app.listen(80);