import create from "zustand";

const useQuestionStore = create((set) => ({
  isReady: false,
  isComplete: false,
  score: 0,
  questions: [],
  answers: [],
  updateScore: () => set(state => ({ score: state.score + 1})),
  addAnswers: (option) => set((state) => ({ answers: [...state.answers, option]})),
  setQuestions: (questions) => set((state) => ({ questions: questions })),
  changeReadyState: () => set(state => ({ isReady: true})), 
  changeComplete: () => set(state => ({isComplete: !state.isComplete})),
}));

export default useQuestionStore;