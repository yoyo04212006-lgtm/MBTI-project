export interface Option {
  text: string;
  dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
  id: number;
  question: string;
  options: [Option, Option];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "At a social gathering, do you usually:",
    options: [
      { text: "Initiate conversations with many people, including strangers", dimension: 'E' },
      { text: "Stay with a few friends you know well", dimension: 'I' }
    ]
  },
  {
    id: 2,
    question: "Do you consider yourself more:",
    options: [
      { text: "Down-to-earth and practical", dimension: 'S' },
      { text: "Imaginative and creative", dimension: 'N' }
    ]
  },
  {
    id: 3,
    question: "Which state do you find worse:",
    options: [
      { text: "Having your head in the clouds and being impractical", dimension: 'N' },
      { text: "Being stuck in a rut and lacking change", dimension: 'S' }
    ]
  },
  {
    id: 4,
    question: "Which trait do you admire more:",
    options: [
      { text: "Emphasis on principles and logic", dimension: 'T' },
      { text: "Valuing emotions and empathy", dimension: 'F' }
    ]
  },
  {
    id: 5,
    question: "What usually moves you more:",
    options: [
      { text: "Persuasive facts and reason", dimension: 'T' },
      { text: "Touching emotional stories", dimension: 'F' }
    ]
  },
  {
    id: 6,
    question: "Your preferred way of working is:",
    options: [
      { text: "Strictly following a schedule and finishing before the deadline", dimension: 'J' },
      { text: "Being more casual and deciding when to work based on your mood", dimension: 'P' }
    ]
  },
  {
    id: 7,
    question: "When making a decision, do you usually:",
    options: [
      { text: "Choose after careful consideration", dimension: 'J' },
      { text: "Decide based on intuition or the impulse of the moment", dimension: 'P' }
    ]
  },
  {
    id: 8,
    question: "After staying at a social event for a long time, do you usually:",
    options: [
      { text: "Get more excited and feel full of energy", dimension: 'E' },
      { text: "Feel tired and want to go home to recharge alone", dimension: 'I' }
    ]
  },
  {
    id: 9,
    question: "Which type of person are you more attracted to:",
    options: [
      { text: "Someone who is steady and practical", dimension: 'S' },
      { text: "Someone who has many ideas and is imaginative", dimension: 'N' }
    ]
  },
  {
    id: 10,
    question: "What are you more interested in:",
    options: [
      { text: "Actual situations happening now", dimension: 'S' },
      { text: "Various opportunities that might happen in the future", dimension: 'N' }
    ]
  },
  {
    id: 11,
    question: "When evaluating others, what do you value more:",
    options: [
      { text: "Laws and rules", dimension: 'T' },
      { text: "The circumstances and human feelings at the time", dimension: 'F' }
    ]
  },
  {
    id: 12,
    question: "When interacting with people, the impression you usually give is:",
    options: [
      { text: "Objective, rational, and business-like", dimension: 'T' },
      { text: "Kind, warm, and valuing feelings", dimension: 'F' }
    ]
  },
  {
    id: 13,
    question: "Regarding time management, are you usually:",
    options: [
      { text: "Punctual and dislike being late", dimension: 'J' },
      { text: "Leisurely and casual, dislike being tied down by time", dimension: 'P' }
    ]
  },
  {
    id: 14,
    question: "Which situation makes you more anxious:",
    options: [
      { text: "Things being left hanging and unfinished", dimension: 'J' },
      { text: "Things being finalized too early with no room for adjustment", dimension: 'P' }
    ]
  },
  {
    id: 15,
    question: "In your circle of friends, are you usually:",
    options: [
      { text: "Well-informed and always aware of everyone's latest news", dimension: 'E' },
      { text: "More low-key and usually the last to know the news", dimension: 'I' }
    ]
  },
  {
    id: 16,
    question: "When handling daily chores, do you prefer to:",
    options: [
      { text: "Follow old, established methods for safety", dimension: 'S' },
      { text: "Try your own new methods to see if there's a change", dimension: 'N' }
    ]
  },
  {
    id: 17,
    question: "Which speaking style do you admire more:",
    options: [
      { text: "Straightforward and frank, saying what's on your mind", dimension: 'S' },
      { text: "Euphemistic and subtle, liking to use metaphors", dimension: 'N' }
    ]
  },
  {
    id: 18,
    question: "Which do you think is more important:",
    options: [
      { text: "Maintaining logical consistency", dimension: 'T' },
      { text: "Maintaining harmony in interpersonal relationships", dimension: 'F' }
    ]
  },
  {
    id: 19,
    question: "When making a decision, which way makes you more comfortable:",
    options: [
      { text: "Objective logical analysis", dimension: 'T' },
      { text: "Inner value judgment", dimension: 'F' }
    ]
  },
  {
    id: 20,
    question: "Do you prefer your life to be:",
    options: [
      { text: "Orderly and everything according to plan", dimension: 'J' },
      { text: "Flexible and always ready to adapt", dimension: 'P' }
    ]
  },
  {
    id: 21,
    question: "In the eyes of others, you are usually more:",
    options: [
      { text: "Rigorous, serious, and responsible", dimension: 'J' },
      { text: "Easy-going and informal", dimension: 'P' }
    ]
  },
  {
    id: 22,
    question: "Before calling someone, do you usually:",
    options: [
      { text: "Dial directly without thinking too much", dimension: 'E' },
      { text: "Rehearse what you're going to say in your mind first", dimension: 'I' }
    ]
  },
  {
    id: 23,
    question: "You believe the meaning of 'facts' lies in:",
    options: [
      { text: "Facts themselves are the answer", dimension: 'S' },
      { text: "Facts are tools used to prove a certain principle", dimension: 'N' }
    ]
  },
  {
    id: 24,
    question: "How do you feel about people who love to fantasize:",
    options: [
      { text: "A bit annoying and too impractical", dimension: 'S' },
      { text: "Very charming and their ideas are very attractive", dimension: 'N' }
    ]
  },
  {
    id: 25,
    question: "When dealing with problems, are you usually:",
    options: [
      { text: "A calm and rational analyzer", dimension: 'T' },
      { text: "A warm and enthusiastic coordinator", dimension: 'F' }
    ]
  },
  {
    id: 26,
    question: "Which behavior do you find more unforgivable:",
    options: [
      { text: "Being unfair and biased", dimension: 'T' },
      { text: "Being cruel and heartless, ignoring feelings", dimension: 'F' }
    ]
  },
  {
    id: 27,
    question: "Do you think things should happen:",
    options: [
      { text: "Through careful planning and arrangement", dimension: 'J' },
      { text: "Naturally and by adapting to circumstances", dimension: 'P' }
    ]
  },
  {
    id: 28,
    question: "When buying something, which feeling makes you more satisfied:",
    options: [
      { text: "It's already bought and settled", dimension: 'J' },
      { text: "Still choosing and keeping options open", dimension: 'P' }
    ]
  },
  {
    id: 29,
    question: "In a social setting, do you usually:",
    options: [
      { text: "Initiate topics to chat with people", dimension: 'E' },
      { text: "Wait for others to initiate conversation with you", dimension: 'I' }
    ]
  },
  {
    id: 30,
    question: "You feel that 'common sense' is usually:",
    options: [
      { text: "Very reliable and doesn't need to be questioned", dimension: 'S' },
      { text: "Questionable and there might be a better way", dimension: 'N' }
    ]
  },
  {
    id: 31,
    question: "When you were a child, were you usually:",
    options: [
      { text: "Lively and talkative, able to chat with anyone", dimension: 'E' },
      { text: "Relatively quiet and introverted, liked playing alone", dimension: 'I' }
    ]
  },
  {
    id: 32,
    question: "Which type of course or topic do you prefer:",
    options: [
      { text: "Practical knowledge that can be applied immediately", dimension: 'S' },
      { text: "Abstract theories that trigger thinking", dimension: 'N' }
    ]
  },
  {
    id: 33,
    question: "Do you consider yourself more:",
    options: [
      { text: "Firm in your stance, emphasizing right and wrong", dimension: 'T' },
      { text: "Gentle and considerate, emphasizing interpersonal relationships", dimension: 'F' }
    ]
  },
  {
    id: 34,
    question: "The pace of life you prefer is:",
    options: [
      { text: "A regular and systematic arrangement", dimension: 'J' },
      { text: "A casual and stress-free pace", dimension: 'P' }
    ]
  },
  {
    id: 35,
    question: "In a group, do you usually:",
    options: [
      { text: "Not mind being the center of attention", dimension: 'E' },
      { text: "Prefer to stay in the corner and keep a low profile", dimension: 'I' }
    ]
  },
  {
    id: 36,
    question: "When making a decision, do you trust more in:",
    options: [
      { text: "Past successful experiences", dimension: 'S' },
      { text: "Your own intuition or inspiration", dimension: 'N' }
    ]
  },
  {
    id: 37,
    question: "Are you more likely to notice people's:",
    options: [
      { text: "Shortcomings or areas needing improvement", dimension: 'T' },
      { text: "Strengths or areas worth praising", dimension: 'F' }
    ]
  },
  {
    id: 38,
    question: "Is your style of handling things more:",
    options: [
      { text: "Decisive, disliking procrastination", dimension: 'J' },
      { text: "Open, liking to listen and see more before deciding", dimension: 'P' }
    ]
  },
  {
    id: 39,
    question: "Your view on friendship is:",
    options: [
      { text: "The more friends the better, broad social circle", dimension: 'E' },
      { text: "Friends don't have to be many, just a few close ones", dimension: 'I' }
    ]
  },
  {
    id: 40,
    question: "When reading a book or watching a movie, do you more easily remember:",
    options: [
      { text: "Specific details and dialogue", dimension: 'S' },
      { text: "The overall theme and moral", dimension: 'N' }
    ]
  },
  {
    id: 41,
    question: "When someone is complaining, do you usually:",
    options: [
      { text: "Help them analyze the problem and find the logic", dimension: 'T' },
      { text: "Soothe their emotions first and empathize", dimension: 'F' }
    ]
  },
  {
    id: 42,
    question: "When traveling abroad, do you prefer to:",
    options: [
      { text: "Plan a daily itinerary", dimension: 'J' },
      { text: "Decide where to go after arriving, going with the flow", dimension: 'P' }
    ]
  },
  {
    id: 43,
    question: "In a discussion, do you usually:",
    options: [
      { text: "Think while speaking and express views directly", dimension: 'E' },
      { text: "Think clearly in your mind before speaking", dimension: 'I' }
    ]
  },
  {
    id: 44,
    question: "Which work environment do you prefer:",
    options: [
      { text: "A stable environment with clear regulations", dimension: 'S' },
      { text: "A challenging environment with new changes every day", dimension: 'N' }
    ]
  },
  {
    id: 45,
    question: "Do you think a good leader should be:",
    options: [
      { text: "Clear about rewards and punishments, emphasizing justice", dimension: 'T' },
      { text: "Considerate of subordinates, emphasizing kindness", dimension: 'F' }
    ]
  },
  {
    id: 46,
    question: "Which feeling do you prefer:",
    options: [
      { text: "Things are settled and can be crossed off the list", dimension: 'J' },
      { text: "Things still have various possibilities, no rush to finish", dimension: 'P' }
    ]
  },
  {
    id: 47,
    question: "When meeting for the first time, the impression you usually give is:",
    options: [
      { text: "Enthusiastic, generous, and easy to approach", dimension: 'E' },
      { text: "Gentle, polite, and a bit distant", dimension: 'I' }
    ]
  },
  {
    id: 48,
    question: "Do you prefer to discuss:",
    options: [
      { text: "Practical problems that can be solved now", dimension: 'S' },
      { text: "Visions and blueprints for ten years in the future", dimension: 'N' }
    ]
  },
  {
    id: 49,
    question: "When handling conflict, are you usually more:",
    options: [
      { text: "Hard-line, insisting on what's right", dimension: 'T' },
      { text: "Soft-line, trying to maintain harmony", dimension: 'F' }
    ]
  },
  {
    id: 50,
    question: "When faced with the unexpected, do you usually:",
    options: [
      { text: "Feel your plan is disrupted and a bit annoyed", dimension: 'J' },
      { text: "Find it interesting and like to adapt on the fly", dimension: 'P' }
    ]
  },
  {
    id: 51,
    question: "On weekends, do you usually:",
    options: [
      { text: "Ask friends out for dinner or activities", dimension: 'E' },
      { text: "Stay home to read, watch shows, or rest", dimension: 'I' }
    ]
  },
  {
    id: 52,
    question: "When buying a new product, do you care more about:",
    options: [
      { text: "Its practicality and function", dimension: 'S' },
      { text: "Its design and innovative concept", dimension: 'N' }
    ]
  },
  {
    id: 53,
    question: "Do you think you are usually:",
    options: [
      { text: "Rational more than emotional", dimension: 'T' },
      { text: "Emotional more than rational", dimension: 'F' }
    ]
  },
  {
    id: 54,
    question: "Is your desk or room usually:",
    options: [
      { text: "Orderly and everything has a fixed place", dimension: 'J' },
      { text: "Messy but organized, you can find things easily", dimension: 'P' }
    ]
  },
  {
    id: 55,
    question: "Are your emotions usually:",
    options: [
      { text: "Easily written on your face", dimension: 'E' },
      { text: "Habitually hidden in your heart, not easily shown", dimension: 'I' }
    ]
  },
  {
    id: 56,
    question: "Which type of conversation do you prefer:",
    options: [
      { text: "Specific daily trivia or gossip", dimension: 'S' },
      { text: "Abstract life philosophy or concepts", dimension: 'N' }
    ]
  },
  {
    id: 57,
    question: "Do you think telling the truth is:",
    options: [
      { text: "More important than worrying about someone's feelings", dimension: 'T' },
      { text: "Should depend on the occasion, don't hurt someone's self-esteem", dimension: 'F' }
    ]
  },
  {
    id: 58,
    question: "Before a meeting or event, do you usually:",
    options: [
      { text: "Do your homework and prepare all the information", dimension: 'J' },
      { text: "Decide how to act once you're there", dimension: 'P' }
    ]
  },
  {
    id: 59,
    question: "Is your energy source mainly:",
    options: [
      { text: "Interacting with people and participating in lively activities", dimension: 'E' },
      { text: "Solitude, thinking, or a quiet environment", dimension: 'I' }
    ]
  },
  {
    id: 60,
    question: "Do you think you are better at:",
    options: [
      { text: "Observing details and remembering facts seen", dimension: 'S' },
      { text: "Using imagination and connecting different ideas", dimension: 'N' }
    ]
  },
  {
    id: 61,
    question: "In a party, are you usually:",
    options: [
      { text: "The person who initiates topics", dimension: 'E' },
      { text: "The person who quietly listens to others", dimension: 'I' }
    ]
  },
  {
    id: 62,
    question: "Which type of explanation do you prefer:",
    options: [
      { text: "Clear and well-organized explanation", dimension: 'S' },
      { text: "Inspirational explanation that triggers imagination", dimension: 'N' }
    ]
  },
  {
    id: 63,
    question: "When a friend has a problem, do you usually:",
    options: [
      { text: "Help them analyze pros and cons and find a solution", dimension: 'T' },
      { text: "Give emotional support and help them through the hard time", dimension: 'F' }
    ]
  },
  {
    id: 64,
    question: "Which type of life do you find more relaxing:",
    options: [
      { text: "Everything planned and step-by-step", dimension: 'J' },
      { text: "Taking one step at a time and adapting on the fly", dimension: 'P' }
    ]
  },
  {
    id: 65,
    question: "Which work mode do you prefer:",
    options: [
      { text: "A lively open office, communicating at any time", dimension: 'E' },
      { text: "A quiet independent space, focusing on work", dimension: 'I' }
    ]
  },
  {
    id: 66,
    question: "In making judgments, do you trust more in:",
    options: [
      { text: "Facts and data seen with your own eyes", dimension: 'S' },
      { text: "A flash of inspiration and intuition in your mind", dimension: 'N' }
    ]
  },
  {
    id: 67,
    question: "In the workplace, which trait is more important:",
    options: [
      { text: "Professional ability and work efficiency", dimension: 'T' },
      { text: "Team atmosphere and interpersonal harmony", dimension: 'F' }
    ]
  },
  {
    id: 68,
    question: "When handling tasks, do you usually:",
    options: [
      { text: "Finish serious business first then relax and play", dimension: 'J' },
      { text: "Play first then rush to finish at the last minute", dimension: 'P' }
    ]
  },
  {
    id: 69,
    question: "Others usually think you are:",
    options: [
      { text: "Easy to understand, like an open book", dimension: 'E' },
      { text: "Mysterious, not easy to see through", dimension: 'I' }
    ]
  },
  {
    id: 70,
    question: "Do you prefer to handle:",
    options: [
      { text: "Specific details and execution", dimension: 'S' },
      { text: "Conceiving a macro direction", dimension: 'N' }
    ]
  },
  {
    id: 71,
    question: "Do you find it easier to:",
    options: [
      { text: "Point out others' mistakes and logical loopholes", dimension: 'T' },
      { text: "Understand others' difficulties and emotional needs", dimension: 'F' }
    ]
  },
  {
    id: 72,
    question: "Which way of deciding do you prefer:",
    options: [
      { text: "Making a decision quickly to feel at ease", dimension: 'J' },
      { text: "Taking more time to consider, not rushing to finalize", dimension: 'P' }
    ]
  },
  {
    id: 73,
    question: "After work, do you usually want to:",
    options: [
      { text: "Meet friends to chat and relax", dimension: 'E' },
      { text: "Stay quiet by yourself and enjoy solitude", dimension: 'I' }
    ]
  },
  {
    id: 74,
    question: "Do you consider yourself more:",
    options: [
      { text: "Down-to-earth, a realist living in the moment", dimension: 'S' },
      { text: "Looking at the stars, an idealist pursuing dreams", dimension: 'N' }
    ]
  },
  {
    id: 75,
    question: "When making judgments, do you value more:",
    options: [
      { text: "Objective data and factual evidence", dimension: 'T' },
      { text: "Subjective intuition and inner feelings", dimension: 'F' }
    ]
  },
  {
    id: 76,
    question: "Which lifestyle do you prefer:",
    options: [
      { text: "A life with regularity and rhythmic arrangement", dimension: 'J' },
      { text: "A life full of surprises and casual variables", dimension: 'P' }
    ]
  },
  {
    id: 77,
    question: "When something happy happens, do you usually:",
    options: [
      { text: "Share it with friends or post on social media immediately", dimension: 'E' },
      { text: "Be happy silently, not necessarily saying it", dimension: 'I' }
    ]
  },
  {
    id: 78,
    question: "Which type of person do you admire more:",
    options: [
      { text: "Someone experienced and steady", dimension: 'S' },
      { text: "Someone with novel ideas who doesn't follow the rules", dimension: 'N' }
    ]
  },
  {
    id: 79,
    question: "Which praise makes you happier:",
    options: [
      { text: "Being praised for being smart and logical", dimension: 'T' },
      { text: "Being praised for being kind and empathetic", dimension: 'F' }
    ]
  },
  {
    id: 80,
    question: "Which style of doing things do you prefer:",
    options: [
      { text: "Arranging things properly", dimension: 'J' },
      { text: "Going with the flow, adapting flexibly to the situation", dimension: 'P' }
    ]
  },
  {
    id: 81,
    question: "In group activities, do you usually:",
    options: [
      { text: "Actively lead everyone and assign tasks", dimension: 'E' },
      { text: "Cooperate with everyone's arrangements and do your part", dimension: 'I' }
    ]
  },
  {
    id: 82,
    question: "What are you more interested in:",
    options: [
      { text: "The current state and actual operation of things", dimension: 'S' },
      { text: "The potential and future development of things", dimension: 'N' }
    ]
  },
  {
    id: 83,
    question: "Do you consider yourself more:",
    options: [
      { text: "Focusing on right and wrong, objective", dimension: 'T' },
      { text: "Focusing on feelings, gentle with people", dimension: 'F' }
    ]
  },
  {
    id: 84,
    question: "Which environment do you prefer:",
    options: [
      { text: "An organized and systematic regulated environment", dimension: 'J' },
      { text: "A free and unconstrained flexible environment", dimension: 'P' }
    ]
  },
  {
    id: 85,
    question: "Do you think you are more:",
    options: [
      { text: "Outgoing and cheerful, liking social interaction", dimension: 'E' },
      { text: "Reserved and steady, liking solitude", dimension: 'I' }
    ]
  },
  {
    id: 86,
    question: "Which type of learning do you prefer:",
    options: [
      { text: "Specific examples and applications", dimension: 'S' },
      { text: "Abstract concepts and theories", dimension: 'N' }
    ]
  },
  {
    id: 87,
    question: "When making decisions, do you usually use your:",
    options: [
      { text: "Head (Rational analysis)", dimension: 'T' },
      { text: "Heart (Emotional feeling)", dimension: 'F' }
    ]
  },
  {
    id: 88,
    question: "Which way of handling tasks do you prefer:",
    options: [
      { text: "Completing tasks step-by-step", dimension: 'J' },
      { text: "Handling tasks flexibly", dimension: 'P' }
    ]
  },
  {
    id: 89,
    question: "Do you think you are more:",
    options: [
      { text: "Active and full of energy", dimension: 'E' },
      { text: "Calm and like to think", dimension: 'I' }
    ]
  },
  {
    id: 90,
    question: "Are you better at:",
    options: [
      { text: "Observing the surrounding environment and details", dimension: 'S' },
      { text: "Insight into the meaning and connection behind things", dimension: 'N' }
    ]
  },
  {
    id: 91,
    question: "Which type of interaction do you prefer:",
    options: [
      { text: "Debate of truth and logical collision", dimension: 'T' },
      { text: "Exchange of emotions and soul connection", dimension: 'F' }
    ]
  },
  {
    id: 92,
    question: "Which state do you find more comfortable:",
    options: [
      { text: "Things already have a conclusion and result", dimension: 'J' },
      { text: "Things are still developing, keeping room for adjustment", dimension: 'P' }
    ]
  },
  {
    id: 93,
    question: "Do you prefer to:",
    options: [
      { text: "Learn practical skills and knowledge", dimension: 'S' },
      { text: "Explore profound theories and concepts", dimension: 'N' }
    ]
  }
];

export interface MBTIDetail {
  name: string;
  traits: string;
  interaction: string;
  tags: string[];
}

export const MBTI_DETAILS: Record<string, MBTIDetail> = {
  ISTJ: { 
    name: "Inspector", 
    traits: "Practical, fact-minded, and reserved. Value traditions and regulations, prefer to plan ahead, and are responsible and reliable.", 
    interaction: "Provide clear details and facts, respect their procedures and schedules, and show your reliability.",
    tags: ["Practical", "Responsible", "Traditional", "Organized"]
  },
  ISTP: { 
    name: "Craftsman", 
    traits: "Calm observers, flexible and skilled at using tools to solve problems. Like to take things apart and understand how they work.", 
    interaction: "Give them space to solve problems, avoid excessive emotional interference, and get straight to the technical core.",
    tags: ["Calm", "Flexible", "Practitioner", "Observational"]
  },
  ISFJ: { 
    name: "Protector", 
    traits: "Quiet, friendly, responsible, and conscientious. Very loyal, will carefully take care of others' needs and feelings.", 
    interaction: "Show your sincerity and gratitude, provide a stable and safe environment, and respect their dedication.",
    tags: ["Loyal", "Attentive", "Guardian", "Warm"]
  },
  ISFP: { 
    name: "Artist", 
    traits: "Gentle, sensitive, and living in the moment. Have a keen awareness of aesthetics, dislike conflict, and pursue the realization of personal values.", 
    interaction: "Give them freedom to create and express, avoid imposing constraints, and communicate in a gentle, non-competitive way.",
    tags: ["Sensitive", "Free", "Harmonious", "Aesthetic"]
  },
  INFJ: { 
    name: "Advocate", 
    traits: "Serious, logical, persistent, and diligent. Compassionate, value emotional connections, understand others' needs, and care for others.", 
    interaction: "Share your vision and values, give them time alone to recharge, and respect their pursuit of deep meaning.",
    tags: ["Idealistic", "Insightful", "Compassionate", "Determined"]
  },
  INFP: { 
    name: "Mediator", 
    traits: "Idealists, loyal to their own values. Curious, can quickly see various possibilities, and committed to achieving inner harmony.", 
    interaction: "Affirm their uniqueness, talk with an open and non-judgmental attitude, and support their passion for pursuing ideals.",
    tags: ["Idealistic", "Harmonious", "Curious", "Unique"]
  },
  INTJ: { 
    name: "Architect", 
    traits: "Independent thinkers with a strong understanding of complex systems. Pursue perfection and have high standards for themselves and others.", 
    interaction: "Persuade them with logic and efficiency, respect their professional insights, and avoid meaningless social small talk.",
    tags: ["Independent", "Strategist", "Perfectionist", "Logical"]
  },
  INTP: { 
    name: "Logician", 
    traits: "Have an endless thirst for knowledge. Like to analyze theories and prefer logical explanations over social interaction.", 
    interaction: "Challenge their intellect, provide innovative ideas, and give them plenty of space for thinking and autonomy.",
    tags: ["Thirst for Knowledge", "Analytical", "Theoretical", "Independent"]
  },
  ESTP: { 
    name: "Persuader", 
    traits: "Action-oriented, good at handling crises. Live in the moment, like sensory experiences, and can quickly adapt to the environment and influence others.", 
    interaction: "Keep conversations concise and full of energy, focus on current actions and results, and avoid long theoretical explanations.",
    tags: ["Action-oriented", "Adaptable", "Influential", "Sensory"]
  },
  ESTJ: { 
    name: "Director", 
    traits: "Practical, decisive, and good at organizing people and things. Value efficiency and results, natural executors and managers.", 
    interaction: "Show your efficiency and organizational skills, provide specific results, and keep promises and rules.",
    tags: ["Decisive", "Organizational", "Efficient", "Practical"]
  },
  ESFP: { 
    name: "Entertainer", 
    traits: "Outgoing, friendly, and inclusive. Love life, like being with people, and can bring joy and vitality to the environment.", 
    interaction: "Participate in their activities, show your enthusiasm, and communicate in a vivid and interesting way.",
    tags: ["Vitality", "Social", "Inclusive", "Optimistic"]
  },
  ESFJ: { 
    name: "Caregiver", 
    traits: "Enthusiastic, responsible, and pursuing harmony. Like teamwork and will actively create a warm and orderly environment.", 
    interaction: "Affirm their efforts, participate in team activities, and show your cooperative spirit and care for others.",
    tags: ["Enthusiastic", "Harmonious", "Teamwork", "Responsible"]
  },
  ENFP: { 
    name: "Campaigner", 
    traits: "Enthusiastic and imaginative. Can see various connections in life and long for others' affirmation and support.", 
    interaction: "Support their creativity, show your enthusiasm, and give them flexible space to explore new possibilities.",
    tags: ["Enthusiastic", "Imaginative", "Creative", "Social"]
  },
  ENFJ: { 
    name: "Protagonist", 
    traits: "Charismatic and empathetic. Can keenly perceive others' needs and are committed to helping others grow and reach their potential.", 
    interaction: "Show your willingness to grow, build an emotional connection with them, and support their goals for social progress.",
    tags: ["Charismatic", "Empathetic", "Guide", "Growth"]
  },
  ENTP: { 
    name: "Debater", 
    traits: "Quick-witted and outspoken. Like to challenge the status quo and are good at analyzing complex problems and proposing innovative solutions.", 
    interaction: "Be prepared for intellectual challenges, keep an open mind to discuss various viewpoints, and don't be afraid of debate.",
    tags: ["Quick-witted", "Challenger", "Innovative", "Debate"]
  },
  ENTJ: { 
    name: "Commander", 
    traits: "Decisive, bold, and natural leaders. Can quickly find inefficiencies and formulate long-term plans, pursuing the achievement of goals.", 
    interaction: "Communicate directly and professionally, show your vision and execution, and focus on strategic goals and efficiency.",
    tags: ["Leadership", "Visionary", "Decisive", "Strategic"]
  }
};

export const CORE_VALUE = "In this world, everyone is unique, with their own autonomy and one-of-a-kind personality. What matters is whether you clearly know yourself. There is no absolute good or bad in MBTI personality traits; the important thing is to understand your strengths and blind spots.";
