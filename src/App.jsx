import { useState, useEffect } from "react";

import "./App.css";
import Loading from "./Loading";

function App() {
  const questions = [
    {
      questionText:
        "Salah satu teori yang paling terkenal adalah soal 'relativitas' yang dikemukakan pada tahun 1915. Teori tersebut menyebutkan bahwa hukum fisika akan selalu sama dan konstan di mana pun. Meskipun akan ada yang berbeda hal itu disebabkan oleh ruang dan waktu. Pertanyaanya siapa yang membuat teori tersebut?",
      answerOptions: [
        { answerText: "Albert Einstein", isCorrect: true },
        { answerText: "Isacc Newton", isCorrect: false },
        { answerText: "Nikola Tesla", isCorrect: false },
        { answerText: "Julius Robert Oppenheimer", isCorrect: false },
      ],
    },
    {
      questionText: "Siapa CEO Tesla?",
      answerOptions: [
        { answerText: "Elon Must", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Ambatu busk", isCorrect: false },
        { answerText: "Saman Brembo", isCorrect: false },
      ],
    },
    {
      questionText: "Perusahaan apa yang membuat Iphone ?",
      answerOptions: [
        { answerText: "Apple Inc", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "Berapa hasil 9 + 10 ?",
      answerOptions: [
        { answerText: "11", isCorrect: false },
        { answerText: "17", isCorrect: false },
        { answerText: "19", isCorrect: true },
        { answerText: "21", isCorrect: false },
      ],
    },
    {
      questionText: "Apa kepanjangan dari HTML ?",
      answerOptions: [
        { answerText: "Hypertext Markup Language", isCorrect: true },
        { answerText: "Hype Beast Language", isCorrect: false },
        { answerText: "Hypertext Markdown Language", isCorrect: false },
        { answerText: "Hyper Text Mark Language", isCorrect: false },
      ],
    },
    {
      questionText: "Apa kepanjangan dari CSS ?",
      answerOptions: [
        { answerText: "Cari Sarjana Sukses", isCorrect: false },
        { answerText: "Cascading Style Sheets", isCorrect: true },
        { answerText: "Cascading Story Style", isCorrect: false },
        { answerText: "Cheap Sauce Strawberry", isCorrect: false },
      ],
    },
    {
      questionText: "HTTP merupakan singkatan dari ?",
      answerOptions: [
        { answerText: "Hypertext Transfer Protocol", isCorrect: true },
        { answerText: "Hype Trans Texture Push", isCorrect: false },
        { answerText: "Hypertext Tips To Pro", isCorrect: false },
        { answerText: "Semua jawaban salah", isCorrect: false },
      ],
    },
    {
      questionText: "Apa kegunaan GIT",
      answerOptions: [
        {
          answerText:
            "mengatur versi dari sebuah source code program dengan cara memberikan tanda baris dan code yang akan ditambah atau diganti",
          isCorrect: true,
        },
        {
          answerText: "Mengganti codingan lama dengan yang baru",
          isCorrect: false,
        },
        {
          answerText: "Mengunci source code di versi yang tetap",
          isCorrect: false,
        },
        { answerText: "Semua jawaban benar", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setQurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setQurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // LOADER
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    <Loading />;
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {showScore ? (
            <div className="score-section">
              anda menjawab {score} dari {score}
              {score >= 8 ? (
                <p>Selamat anda menjawab semua quiz nya</p>
              ) : (
                <p>
                  Anda menjawab sebagian quiznya, tidak masalah jika tidak benar
                  semua, stay curious! :)
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
