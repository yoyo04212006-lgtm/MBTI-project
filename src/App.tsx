import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  LayoutDashboard, 
  Briefcase, 
  Info, 
  Quote, 
  Heart, 
  Target,
  Check,
  Fingerprint,
  Compass,
  Smile,
  Star,
  Sun,
  Zap,
  Palette
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { questions, MBTI_DETAILS, CORE_VALUE } from './constants';
import { getMBTIAnalysis } from './services/geminiService';

type Step = 'welcome' | 'test' | 'calculating' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [dimensionCounts, setDimensionCounts] = useState<Record<string, number>>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });
  const [resultType, setResultType] = useState<string>('');
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOptionSelect = (dimension: string) => {
    if (isTransitioning) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = dimension;
    setAnswers(newAnswers);
    setIsTransitioning(true);

    // 300ms delay for visual feedback
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        calculateAndShowResult(newAnswers);
      }
    }, 300);
  };

  const calculateAndShowResult = (finalAnswers: string[]) => {
    setStep('calculating');
    
    const counts: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    finalAnswers.forEach(dim => {
      if (dim) counts[dim] = (counts[dim] || 0) + 1;
    });
    setDimensionCounts(counts);

    setTimeout(async () => {
      const type = [
        counts.E >= counts.I ? 'E' : 'I',
        counts.S >= counts.N ? 'S' : 'N',
        counts.T >= counts.F ? 'T' : 'F',
        counts.J >= counts.P ? 'J' : 'P'
      ].join('');

      setResultType(type);
      setStep('result');
      setIsTransitioning(false);
      
      // Fetch AI analysis in background
      setLoadingAnalysis(true);
      const analysis = await getMBTIAnalysis(type);
      setAiAnalysis(analysis || '');
      setLoadingAnalysis(false);
    }, 2500);
  };

  const resetTest = () => {
    setStep('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setDimensionCounts({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResultType('');
    setAiAnalysis('');
    setIsTransitioning(false);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const remainingQuestions = questions.length - (currentQuestionIndex + 1);

  // Prepare data for Radar Chart
  const chartData = [
    { subject: 'Extraversion (E)', A: (dimensionCounts.E / (dimensionCounts.E + dimensionCounts.I || 1)) * 100, fullMark: 100 },
    { subject: 'Sensing (S)', A: (dimensionCounts.S / (dimensionCounts.S + dimensionCounts.N || 1)) * 100, fullMark: 100 },
    { subject: 'Thinking (T)', A: (dimensionCounts.T / (dimensionCounts.T + dimensionCounts.F || 1)) * 100, fullMark: 100 },
    { subject: 'Judging (J)', A: (dimensionCounts.J / (dimensionCounts.J + dimensionCounts.P || 1)) * 100, fullMark: 100 },
  ];

  const currentDimension = questions[currentQuestionIndex]?.options[0].dimension;
  const getDimensionType = (dim: string) => {
    if (['E', 'I'].includes(dim)) return 'ei';
    if (['S', 'N'].includes(dim)) return 'sn';
    if (['T', 'F'].includes(dim)) return 'tf';
    if (['J', 'P'].includes(dim)) return 'jp';
    return 'ei';
  };
  const dimType = getDimensionType(currentDimension);

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-60" />
      </div>

      <main className="relative max-w-4xl mx-auto px-6 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {step === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="text-center space-y-12"
            >
              <motion.div 
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="relative inline-flex items-center justify-center w-36 h-36 rounded-[2.5rem] mbti-gradient text-white shadow-2xl shadow-indigo-200 mb-4 group"
              >
                {/* Multi-layered Aura */}
                <div className="absolute inset-0 bg-white/20 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="absolute inset-0 bg-indigo-400/20 rounded-[2.5rem] blur-2xl -z-10 animate-pulse" />
                
                {/* Rotating Decorative Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border-2 border-dashed border-white/30 rounded-full"
                />
                
                {/* Floating Particles */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 text-white/40"
                >
                  <Sparkles size={20} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -right-4 text-white/40"
                >
                  <Sparkles size={24} />
                </motion.div>

                <Smile size={72} className="relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
              
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-black tracking-tight text-slate-900">
                  MBTI <span className="text-indigo-600">Personality Decoder</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                  Embark on a fun soul exploration and discover your truest self!<br className="hidden md:block" />
                  Unlock your personality code in just a few minutes.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <button
                  onClick={() => setStep('test')}
                  className="mbti-btn arrow-btn group pl-12 pr-24 py-6 mbti-gradient text-white font-bold text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-4"
                >
                  Start Test
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-bold text-slate-400">
                  <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100"><Star size={18} className="text-emerald-500" /> 93 Questions Full Version</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100"><Sparkles size={18} className="text-amber-500" /> AI Deep Analysis</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100"><Heart size={18} className="text-purple-500" /> Professional Terminology</span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-10"
            >
              {/* Progress Header */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <h3 className={`text-sm font-black uppercase tracking-[0.2em] dim-${dimType}-text`}>
                      Question {currentQuestionIndex + 1} / {questions.length}
                    </h3>
                    <p className="text-xs font-bold text-slate-400">
                      Remaining: <span className={`dim-${dimType}-text`}>{remainingQuestions}</span> questions
                    </p>
                  </div>
                  <span className={`text-3xl font-black tabular-nums dim-${dimType}-text`}>
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200/50">
                  <div
                    className="h-full mbti-gradient progress-bar-transition"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="mbti-card p-10 md:p-16 space-y-12 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 dim-${dimType}-bg opacity-50`} />
                <div className="space-y-4 text-center">
                  <div className="flex justify-center mb-6">
                    {dimType === 'ei' && <Sun size={48} className="text-emerald-500" />}
                    {dimType === 'sn' && <Sparkles size={48} className="text-amber-500" />}
                    {dimType === 'tf' && <Zap size={48} className="text-blue-500" />}
                    {dimType === 'jp' && <Palette size={48} className="text-purple-500" />}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight whitespace-pre-line">
                    {questions[currentQuestionIndex].question}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {questions[currentQuestionIndex].options.map((option, idx) => (
                    <button
                      key={idx}
                      disabled={isTransitioning}
                      onClick={() => handleOptionSelect(option.dimension)}
                      className={`option-card dim-${dimType}-hover ${
                        answers[currentQuestionIndex] === option.dimension ? `dim-${dimType} selected` : ''
                      }`}
                    >
                      <span className={`text-xl font-bold transition-colors ${
                        answers[currentQuestionIndex] === option.dimension
                          ? `dim-${dimType}-text`
                          : 'text-slate-600'
                      }`}>
                        {option.text}
                      </span>
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        answers[currentQuestionIndex] === option.dimension
                          ? `dim-${dimType}-bg border-transparent text-white`
                          : 'border-slate-200'
                      }`}>
                        {answers[currentQuestionIndex] === option.dimension && <Check size={18} strokeWidth={3} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-start">
                <button
                  disabled={currentQuestionIndex === 0 || isTransitioning}
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold transition-colors disabled:opacity-0"
                >
                  <ChevronLeft size={20} /> Back
                </button>
              </div>
            </motion.div>
          )}

          {step === 'calculating' && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 space-y-12"
            >
              <div className="relative">
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 border-2 border-dashed border-indigo-200 rounded-full"
                />
                {/* Inner Spinner */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-[12px] border-slate-100 border-t-indigo-600 rounded-full shadow-2xl"
                />
                {/* Scanning Line */}
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-indigo-500/30 blur-sm z-10"
                />
                <div className="absolute inset-0 flex items-center justify-center text-indigo-600">
                  <Fingerprint size={64} className="animate-pulse opacity-50" />
                </div>
              </div>
              <div className="text-center space-y-4">
                <motion.h3 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl font-black text-slate-900"
                >
                  Analyzing your soul traits...
                </motion.h3>
                <p className="text-xl font-bold text-slate-400">AI is building your exclusive personality report</p>
                <div className="flex justify-center gap-2 pt-4">
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 h-2 bg-indigo-600 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              {/* Result Header */}
              <div className="text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-black tracking-widest uppercase border border-indigo-100">
                  <Zap size={18} /> Test Result Analysis
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-center gap-2">
                    {resultType.split('').map((char, i) => {
                      const colors: Record<string, string> = {
                        E: 'text-emerald-500', I: 'text-emerald-500',
                        S: 'text-amber-500', N: 'text-amber-500',
                        T: 'text-blue-500', F: 'text-blue-500',
                        J: 'text-purple-500', P: 'text-purple-500'
                      };
                      return (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                          className={`text-8xl md:text-9xl font-black tracking-tighter ${colors[char] || 'text-indigo-600'}`}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-5xl font-black text-slate-800"
                  >
                    {MBTI_DETAILS[resultType]?.name}
                  </motion.h3>
                  
                  {/* Keyword Tags */}
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    {MBTI_DETAILS[resultType]?.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 shadow-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Core Traits & Chart */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="mbti-card p-8 md:p-12 space-y-10">
                    <section className="space-y-8">
                      <h4 className="flex items-center gap-3 text-2xl font-black text-indigo-900">
                        <Palette className="text-indigo-500" /> Dimension Tendencies
                      </h4>
                      
                      {/* Radar Chart Visualization */}
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                            <PolarGrid stroke="#E2E8F0" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 12, fontWeight: 700 }} />
                            <Radar
                              name="MBTI"
                              dataKey="A"
                              stroke="#6366F1"
                              fill="#6366F1"
                              fillOpacity={0.3}
                            />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <DimensionBar label1="Extraversion (E)" label2="Introversion (I)" val1={dimensionCounts.E} val2={dimensionCounts.I} type="ei" />
                        <DimensionBar label1="Sensing (S)" label2="Intuition (N)" val1={dimensionCounts.S} val2={dimensionCounts.N} type="sn" />
                        <DimensionBar label1="Thinking (T)" label2="Feeling (F)" val1={dimensionCounts.T} val2={dimensionCounts.F} type="tf" />
                        <DimensionBar label1="Judging (J)" label2="Perceiving (P)" val1={dimensionCounts.J} val2={dimensionCounts.P} type="jp" />
                      </div>
                    </section>

                    <div className="h-px bg-slate-100" />

                    <section className="space-y-4">
                      <h4 className="flex items-center gap-3 text-2xl font-black text-indigo-900">
                        <CheckCircle2 className="text-indigo-500" /> Core Traits
                      </h4>
                      <p className="text-xl leading-relaxed text-slate-600 font-medium">
                        {MBTI_DETAILS[resultType]?.traits}
                      </p>
                    </section>

                    <div className="h-px bg-slate-100" />

                    <section className="space-y-4">
                      <h4 className="flex items-center gap-3 text-2xl font-black text-indigo-900">
                        <Heart className="text-indigo-500" /> Interaction Suggestions
                      </h4>
                      <p className="text-xl leading-relaxed text-slate-600 font-medium">
                        {MBTI_DETAILS[resultType]?.interaction}
                      </p>
                    </section>
                  </div>

                  {/* Core Value Footer */}
                  <div className="p-10 bg-white rounded-3xl border border-slate-100 relative overflow-hidden shadow-sm">
                    <Quote size={64} className="absolute -top-4 -left-4 text-slate-100 opacity-50" />
                    <p className="relative z-10 text-base font-bold text-slate-500 leading-relaxed text-center italic">
                      {CORE_VALUE}
                    </p>
                  </div>
                </div>

                {/* Right Column: AI Analysis & Actions */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="mbti-gradient p-8 md:p-12 rounded-[3rem] text-white shadow-2xl shadow-indigo-200 flex flex-col h-full">
                    <div className="space-y-8 flex-grow">
                      <h4 className="flex items-center gap-3 text-2xl font-black">
                        <Sparkles size={28} /> AI Deep Analysis Report
                      </h4>
                      {loadingAnalysis ? (
                        <div className="space-y-6 animate-pulse">
                          <div className="h-5 bg-white/20 rounded-full w-3/4" />
                          <div className="h-5 bg-white/20 rounded-full w-full" />
                          <div className="h-5 bg-white/20 rounded-full w-5/6" />
                          <div className="h-5 bg-white/20 rounded-full w-4/5" />
                          <div className="h-5 bg-white/20 rounded-full w-full" />
                          <div className="h-5 bg-white/20 rounded-full w-2/3" />
                        </div>
                      ) : (
                        <div className="markdown-body prose prose-invert prose-indigo max-w-none">
                          <ReactMarkdown>
                            {aiAnalysis}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={resetTest}
                      className="mt-12 flex items-center justify-center gap-3 w-full py-5 bg-white/10 hover:bg-white/20 rounded-2xl transition-all text-xl font-black border border-white/20 backdrop-blur-sm shadow-lg"
                    >
                      <RotateCcw size={24} /> Restart Test
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function DimensionBar({ label1, label2, val1, val2, type }: { label1: string, label2: string, val1: number, val2: number, type: 'ei' | 'sn' | 'tf' | 'jp' }) {
  const total = val1 + val2 || 1;
  const p1 = Math.round((val1 / total) * 100);
  const p2 = 100 - p1;

  const colorClass = {
    ei: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
    sn: 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
    tf: 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]',
    jp: 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
  }[type];

  const lightColorClass = {
    ei: 'bg-emerald-100',
    sn: 'bg-amber-100',
    tf: 'bg-blue-100',
    jp: 'bg-purple-100'
  }[type];

  const textColorClass = {
    ei: 'text-emerald-600',
    sn: 'text-amber-600',
    tf: 'text-blue-600',
    jp: 'text-purple-600'
  }[type];

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
        <span>{label1}</span>
        <span>{label2}</span>
      </div>
      <div className="h-5 w-full bg-slate-100/50 rounded-full overflow-hidden flex border border-slate-200/30 backdrop-blur-sm">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${p1}%` }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className={`h-full relative z-10 ${colorClass}`} 
        />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${p2}%` }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className={`h-full ${lightColorClass}`} 
        />
      </div>
      <div className={`flex justify-between text-sm font-black tabular-nums ${textColorClass}`}>
        <span className="flex items-center gap-1">
          {p1 >= 50 && <Check size={14} strokeWidth={3} />}
          {p1}%
        </span>
        <span className="flex items-center gap-1">
          {p2 > 50 && <Check size={14} strokeWidth={3} />}
          {p2}%
        </span>
      </div>
    </div>
  );
}
