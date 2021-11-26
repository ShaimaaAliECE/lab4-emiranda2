const express = require('express');
let questionList = require('./questions.json');

const app = express();

//serve static contents
app.use(express.static('static'));

//dynamic handling
//app.get('/questions', (request, response) => {
    //let content ='';
   // for (q of questionList)
  //  {
       // content += '<div>';
        //content += '<'
       // content += q.stem + '<br/>' + q.options + '<br/>' + q.answerIndex 
        //content += '<br>'
       // content += '</div>'
       // content += '<br/>';
    //}

   // response.send(content);
//})


//get questions from JSON and parse them
app.get('/questionsInJson', (req,res) => {
  //  res.send(JSON.stringify(questionList));

  let newQuestionList =JSON.parse(JSON.stringify(questionList));

  //for each question delete the answer
for(i in newQuestionList){
    delete newQuestionList[i].answerIndex;
}


    res.json(newQuestionList);
})


//get the answers from the JSON
app.get('/answersInJson', function(req,res){

    let qIndex = req.query.q;
    let aIndex = req.query.a;
    let feedback = "";


    //handle feedback
    let question = questionList[qIndex];

    if(question.answerIndex == aIndex){
        feedback = "Correct! " + qIndex;
    }
    else{
        feedback = "Incorrect! " + qIndex;
    }

    res.send(feedback);
})


app.listen(80);