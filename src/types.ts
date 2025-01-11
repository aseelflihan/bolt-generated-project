export interface Question {
      question: string;
      options: string[];
      correctAnswer: number;
      type: 'grammar' | 'vocabulary' | 'sound' | 'reading';
      audioUrl?: string;
    }

    export interface QuizState {
      currentQuestion: number;
      score: number;
      showResults: boolean;
      answers: number[];
      sectionScores: {
        grammar: number;
        vocabulary: number;
        sound: number;
        reading: number;
      };
    }
