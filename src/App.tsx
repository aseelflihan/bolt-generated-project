import React, { useState, useEffect } from 'react';
    import { Trophy, AlertCircle, Gift, Volume2 } from 'lucide-react';
    import { questions } from './data/questions';
    import { ProgressBar } from './components/ProgressBar';
    import { WelcomePage } from './components/WelcomePage';
    import { Footer } from './components/Footer';
    import type { QuizState } from './types';

    function App() {
      const [showWelcome, setShowWelcome] = useState(true);
      const [quizState, setQuizState] = useState<QuizState>({
        currentQuestion: 0,
        score: 0,
        showResults: false,
        answers: [],
        sectionScores: {
          grammar: 0,
          vocabulary: 0,
          sound: 0,
          reading: 0
        }
      });

      const [timeLeft, setTimeLeft] = useState(600); // Total quiz time in seconds (10 minutes)
      const [quizEndedByTime, setQuizEndedByTime] = useState(false);
      const [quizPassed, setQuizPassed] = useState(false);

      const allQuestions = [
        ...questions.grammar,
        ...questions.vocabulary,
        ...questions.sound,
        ...questions.reading
      ];

      const currentQuestion = allQuestions[quizState.currentQuestion];

      useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!showWelcome && !quizState.showResults && timeLeft > 0) {
          timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
          }, 1000);
        } else if (timeLeft === 0 && !quizState.showResults) {
            setQuizEndedByTime(true);
            setQuizState(prevState => ({
              ...prevState,
              showResults: true,
            }));
        }
        return () => clearInterval(timer);
      }, [timeLeft, showWelcome, quizState.showResults]);

      const handleAnswer = (selectedOption: number) => {
        if (quizEndedByTime) return;

        const newAnswers = [...quizState.answers, selectedOption];
        const isCorrect = selectedOption === currentQuestion.correctAnswer;
        const newScore = isCorrect ? quizState.score + 1 : quizState.score;

        const newSectionScores = { ...quizState.sectionScores };
        if (isCorrect) {
          newSectionScores[currentQuestion.type] += 1;
        }

        if (quizState.currentQuestion + 1 < allQuestions.length) {
          setQuizState({
            ...quizState,
            currentQuestion: quizState.currentQuestion + 1,
            score: newScore,
            answers: newAnswers,
            sectionScores: newSectionScores
          });
        } else {
          const passPercentage = (newScore / allQuestions.length) * 100;
          setQuizPassed(passPercentage >= 90);
          setQuizState({
            ...quizState,
            showResults: true,
            score: newScore,
            answers: newAnswers,
            sectionScores: newSectionScores
          });
        }
      };

      const playAudio = (audioUrl: string) => {
        if (audioUrl) {
          const audio = new Audio(audioUrl);
          audio.play();
        }
      };

      const restartQuiz = () => {
        setQuizState({
          currentQuestion: 0,
          score: 0,
          showResults: false,
          answers: [],
          sectionScores: {
            grammar: 0,
            vocabulary: 0,
            sound: 0,
            reading: 0
          }
        });
        setShowWelcome(true);
        setTimeLeft(600);
        setQuizEndedByTime(false);
        setQuizPassed(false);
      };

      const startQuiz = () => {
        setShowWelcome(false);
      };

      const getSectionQuestionCount = (type: string) => {
        return allQuestions.filter(q => q.type === type).length;
      };

      const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };

      return (
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow container mx-auto p-4">
            {showWelcome ? (
              <WelcomePage onStartQuiz={startQuiz} />
            ) : !quizState.showResults ? (
              <>
                <ProgressBar progress={quizState.currentQuestion + 1} total={allQuestions.length} />

                <div className="mb-4 flex justify-between items-center">
                  <p className="text-gray-700">
                    Pertanyaan {quizState.currentQuestion + 1} dari {allQuestions.length}
                  </p>
                  <p className="text-gray-700">
                    Waktu Tersisa: {formatTime(timeLeft)}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-purple-600 text-sm font-medium mb-2">
                    Semangat, Ayuu! Kamu hebat! 💫
                  </p>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    {currentQuestion.question}
                    {currentQuestion.type === 'sound' && currentQuestion.audioUrl && (
                      <button
                        onClick={() => playAudio(currentQuestion.audioUrl)}
                        className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
                      >
                        <Volume2 className="w-6 h-6 text-purple-600" />
                      </button>
                    )}
                  </h2>
                </div>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                      <span className="font-medium text-gray-700">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="relative">
                  {quizEndedByTime ? (
                    <AlertCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
                  ) : quizPassed ? (
                    <>
                      <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                      <Gift className="absolute top-0 right-1/4 text-pink-500 animate-bounce" />
                    </>
                  ) : (
                    <AlertCircle className="w-16 h-16 mx-auto text-purple-500 mb-4" />
                  )}
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Hasil Penilaian Bahasa Inggris
                </h2>

                <p className="text-xl text-gray-600 mb-6">
                  {quizEndedByTime
                    ? "Waktu habis! Anda tidak lulus kuis."
                    : quizPassed
                      ? `Skor Keseluruhan: ${quizState.score} dari ${allQuestions.length}. Anda lulus kuis!`
                      : `Skor Keseluruhan: ${quizState.score} dari ${allQuestions.length}. Anda tidak lulus kuis.`}
                </p>

                {!quizEndedByTime && !quizPassed && (
                  <div className="mb-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-700 mb-2">Tata Bahasa</h3>
                        <p className="text-purple-900">
                          {quizState.sectionScores.grammar} / {getSectionQuestionCount('grammar')}
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Kosakata</h3>
                        <p className="text-blue-900">
                          {quizState.sectionScores.vocabulary} / {getSectionQuestionCount('vocabulary')}
                        </p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-pink-700 mb-2">Suara</h3>
                        <p className="text-pink-900">
                          {quizState.sectionScores.sound} / {getSectionQuestionCount('sound')}
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-700 mb-2">Membaca</h3>
                        <p className="text-green-900">
                          {quizState.sectionScores.reading} / {getSectionQuestionCount('reading')}
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-purple-600 h-4 rounded-full transition-all duration-500"
                          style={{ width: `${(quizState.score / allQuestions.length) * 100}%` }}
                        />
                      </div>
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <Gift className="w-6 h-6 text-pink-500" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-purple-600 font-medium">
                    {quizEndedByTime
                      ? "Silakan coba lagi!"
                      : quizPassed
                        ? "Skor sempurna! Kamu luar biasa, Ayuu! 🎉"
                        : "Silakan coba lagi!"}
                  </p>
                  <button
                    onClick={restartQuiz}
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  >
                    Coba Lagi
                  </button>
                </div>
              </div>
            )}
          </main>
          <Footer />
        </div>
      );
    }

    export default App;
