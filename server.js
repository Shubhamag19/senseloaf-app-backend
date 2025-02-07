const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

const questionSets = require("./data");

wss.on("connection", (ws) => {
  const assessmentTitles = questionSets.map(({ setId, title }) => ({
    setId,
    title,
  }));
  ws.send(JSON.stringify({ type: "titles", data: assessmentTitles }));

  let currentSetIndex = 0;
  let currentQuestionIndex = 0;

  function sendQuestion() {
    const currentSet = questionSets[currentSetIndex];
    if (!currentSet || currentQuestionIndex >= currentSet.questions.length) {
      currentSetIndex++;
      currentQuestionIndex = 0;
    }

    if (currentSetIndex < questionSets.length) {
      const nextSet = questionSets[currentSetIndex];
      const questionData = nextSet.questions[currentQuestionIndex];

      ws.send(
        JSON.stringify({
          type: "question",
          questionMetaData: {
            currentSetIndex: currentSetIndex + 1,
            assessmentTitle: nextSet.title,
            questionData: questionData,
            currentQuestionIndex: currentQuestionIndex + 1,
            totalQuestions: nextSet.questions.length,
          },
        })
      );
    } else {
      ws.send(JSON.stringify({ type: "end" }));
    }
  }

  sendQuestion();

  ws.on("message", (message) => {
    try {
      const userResponse = JSON.parse(message);

      currentQuestionIndex++;
      sendQuestion();
    } catch (error) {
      console.error("error:", error);
    }
  });
});
