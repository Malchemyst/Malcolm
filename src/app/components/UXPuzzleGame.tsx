import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Trophy, Medal } from 'lucide-react';

interface Card {
  id: number;
  pairId: number;
  content: string;
  type: 'term' | 'definition';
  isFlipped: boolean;
  isMatched: boolean;
}

interface LeaderboardEntry {
  name: string;
  moves: number;
  date: string;
}

const cardPairs = [
  { term: 'Affordance', definition: 'Visual clue to interact' },
  { term: 'Heuristic', definition: 'Usability rule of thumb' },
  { term: 'Gestalt', definition: 'Visual perception principle' },
  { term: 'Hierarchy', definition: 'Order of importance' },
  { term: 'Consistency', definition: 'Uniform UI patterns' },
  { term: 'Feedback', definition: 'System response' },
  { term: 'Accessibility', definition: 'Usable by all abilities' },
  { term: 'Wireframe', definition: 'Low-fidelity layout' },
];

export function UXPuzzleGame({ onClose }: { onClose?: () => void }) {
  const [cards, setCards] = React.useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = React.useState<number[]>([]);
  const [moves, setMoves] = React.useState(0);
  const [isChecking, setIsChecking] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);
  const [playerName, setPlayerName] = React.useState('');
  const [showLeaderboard, setShowLeaderboard] = React.useState(false);
  const [leaderboard, setLeaderboard] = React.useState<LeaderboardEntry[]>([]);
  const [currentRank, setCurrentRank] = React.useState<number | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Load leaderboard from localStorage
  React.useEffect(() => {
    const savedLeaderboard = localStorage.getItem('uxPuzzleLeaderboard');
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  // Initialize cards
  React.useEffect(() => {
    const initialCards: Card[] = [];
    cardPairs.forEach((pair, index) => {
      initialCards.push({
        id: index * 2,
        pairId: index,
        content: pair.term,
        type: 'term',
        isFlipped: false,
        isMatched: false,
      });
      initialCards.push({
        id: index * 2 + 1,
        pairId: index,
        content: pair.definition,
        type: 'definition',
        isFlipped: false,
        isMatched: false,
      });
    });
    // Shuffle cards
    setCards(initialCards.sort(() => Math.random() - 0.5));
  }, []);

  // Check if game is won
  React.useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setTimeout(() => setGameWon(true), 500);
    }
  }, [cards]);

  // Scroll detection to close Puzzle section and return to landing page
  React.useEffect(() => {
    if (!onClose) return;

    const handleScroll = (e: WheelEvent) => {
      // Don't allow closing if a modal is open (game won or leaderboard showing)
      if (gameWon || showLeaderboard) return;
      
      // Since puzzle section doesn't scroll, any upward scroll closes it
      if (e.deltaY < 0) {
        onClose();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [onClose, gameWon, showLeaderboard]);

  const handleCardClick = (cardId: number) => {
    if (isChecking || selectedCards.length >= 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    // Flip the card
    setCards(prevCards =>
      prevCards.map(c => c.id === cardId ? { ...c, isFlipped: true } : c)
    );

    const newSelectedCards = [...selectedCards, cardId];
    setSelectedCards(newSelectedCards);

    // If two cards are selected, check for match
    if (newSelectedCards.length === 2) {
      setIsChecking(true);
      setMoves(prev => prev + 1);

      const [firstId, secondId] = newSelectedCards;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Match found!
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c
            )
          );
          setSelectedCards([]);
          setIsChecking(false);
        }, 800);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c
            )
          );
          setSelectedCards([]);
          setIsChecking(false);
        }, 1200);
      }
    }
  };

  const resetGame = () => {
    const resetCards = cards.map(card => ({
      ...card,
      isFlipped: false,
      isMatched: false,
    })).sort(() => Math.random() - 0.5);
    setCards(resetCards);
    setSelectedCards([]);
    setMoves(0);
    setGameWon(false);
    setIsChecking(false);
  };

  const saveLeaderboard = () => {
    if (!playerName) return;

    const newEntry: LeaderboardEntry = {
      name: playerName,
      moves: moves,
      date: new Date().toISOString(),
    };

    const updatedLeaderboard = [...leaderboard, newEntry].sort((a, b) => a.moves - b.moves);
    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('uxPuzzleLeaderboard', JSON.stringify(updatedLeaderboard));

    const rank = updatedLeaderboard.findIndex(entry => entry.name === playerName) + 1;
    setCurrentRank(rank);
    setShowLeaderboard(true);
  };

  return (
    <div className="overlay-dark h-screen bg-transparent px-4 py-4 md:px-6 md:py-6 overflow-hidden flex flex-col relative">
      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col">
        {/* Section Header */}
        <div className="mb-3 md:mb-4 flex-shrink-0">
          <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] tracking-tighter mb-1 md:mb-2 text-[#e8e6e1]">UX Memory Challenge</h2>
          <p className="text-[#b8b3ab] max-w-2xl text-xs md:text-sm">
            Match UX terms with their definitions
          </p>
        </div>

        {/* Game Stats */}
        <div className="mb-2 md:mb-3 flex items-center justify-between flex-shrink-0">
          <div className="text-xs md:text-sm text-[#e8e6e1]">
            <span className="tracking-wide">Moves: </span>
            <span className="font-semibold">{moves}</span>
          </div>
          <button
            onClick={resetGame}
            className="text-xs md:text-sm px-3 py-1 md:px-4 md:py-1.5 bg-[#87682A] dark:bg-[#c9a961] text-[#d4d0c8] dark:text-[#2a2520] hover:opacity-80 transition-opacity tracking-wide rounded"
          >
            Reset
          </button>
        </div>

        {/* Game Board */}
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 w-full h-full max-h-full">
            {cards.map((card) => (
              <motion.button
                key={card.id}
                layoutId={`card-${card.id}`}
                onClick={() => handleCardClick(card.id)}
                disabled={card.isMatched || card.isFlipped}
                className={`rounded-md border-2 transition-all duration-300 ${
                  card.isMatched
                    ? 'bg-[#87682A]/20 dark:bg-[#c9a961]/20 border-[#87682A] dark:border-[#c9a961] opacity-60'
                    : card.isFlipped
                    ? 'bg-[#87682A] dark:bg-[#c9a961] border-[#87682A] dark:border-[#c9a961]'
                    : 'bg-[#2a2520]/50 border-[#5a4f47]/30 hover:border-[#87682A]/50 dark:hover:border-[#c9a961]/50 hover:shadow-md'
                }`}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-1.5 md:p-2">
                  {card.isFlipped || card.isMatched ? (
                    <>
                      <div className={`text-[7px] md:text-[8px] tracking-widest mb-0.5 md:mb-1 uppercase ${
                        card.type === 'term' 
                          ? 'text-[#d4d0c8] dark:text-[#2a2520]' 
                          : 'text-[#d4d0c8]/70 dark:text-[#2a2520]/70'
                      }`}>
                        {card.type === 'term' ? 'Term' : 'Definition'}
                      </div>
                      <div className={`text-center text-[10px] md:text-xs leading-snug ${
                        card.type === 'term'
                          ? 'text-[#d4d0c8] dark:text-[#2a2520] font-semibold'
                          : 'text-[#d4d0c8] dark:text-[#2a2520]'
                      }`}>
                        {card.content}
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-2xl md:text-4xl opacity-20 text-[#e8e6e1]">?</div>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Win Modal */}
      <AnimatePresence>
        {gameWon && !showLeaderboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#2a2520]/80 dark:bg-[#2a2520]/85 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#87682A] dark:bg-[#c9a961] p-8 rounded-lg text-center max-w-md w-full mx-4 shadow-2xl"
            >
              <Trophy className="w-16 h-16 mx-auto mb-4 text-[#d4d0c8] dark:text-[#2a2520]" />
              <h3 className="text-2xl mb-2 text-[#d4d0c8] dark:text-[#2a2520] tracking-tight">Congratulations!</h3>
              <p className="text-[#d4d0c8]/90 dark:text-[#2a2520]/90 mb-1">You've completed the puzzle</p>
              <p className="text-sm text-[#d4d0c8]/70 dark:text-[#2a2520]/70 mb-6">in {moves} moves</p>
              
              {/* Name Input */}
              <div className="mb-6">
                <label className="block text-sm text-[#d4d0c8] dark:text-[#2a2520] mb-2 text-left">Enter your name for the leaderboard:</label>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-[#d4d0c8] dark:bg-[#2a2520] text-[#2a2520] dark:text-[#e8e6e1] placeholder:text-[#5a4f47] dark:placeholder:text-[#b8b3ab] border-none outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && playerName) {
                      saveLeaderboard();
                    }
                  }}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={resetGame}
                  className="flex-1 px-6 py-3 md:py-2 bg-[#d4d0c8]/20 dark:bg-[#2a2520]/20 text-[#d4d0c8] dark:text-[#e8e6e1] hover:opacity-80 active:scale-95 transition-all tracking-wide text-sm min-h-[44px]"
                >
                  Play Again
                </button>
                <button
                  onClick={saveLeaderboard}
                  disabled={!playerName}
                  className="flex-1 px-6 py-3 md:py-2 bg-[#d4d0c8] dark:bg-[#2a2520] text-[#2a2520] dark:text-[#e8e6e1] hover:opacity-80 active:scale-95 transition-all tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                >
                  Save Score
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leaderboard Modal */}
      <AnimatePresence>
        {showLeaderboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#2a2520]/80 dark:bg-[#2a2520]/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#87682A] dark:bg-[#c9a961] p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Medal className="w-10 h-10 text-[#d4d0c8] dark:text-[#2a2520]" />
                <h3 className="text-3xl text-[#d4d0c8] dark:text-[#2a2520] tracking-tight">Leaderboard</h3>
              </div>

              {currentRank && (
                <div className="mb-6 p-4 bg-[#d4d0c8]/20 dark:bg-[#2a2520]/20 rounded border-2 border-[#d4d0c8] dark:border-[#2a2520]">
                  <p className="text-[#d4d0c8] dark:text-[#2a2520] text-center">
                    Your Rank: <span className="font-bold">#{currentRank}</span>
                    {currentRank <= 10 && (
                      <span className="ml-2 text-sm">(Top 10!)</span>
                    )}
                  </p>
                </div>
              )}

              {/* Top 10 Leaderboard */}
              <div className="space-y-2 mb-6">
                {leaderboard.slice(0, 10).map((entry, index) => {
                  const isCurrentPlayer = entry.name === playerName && entry.moves === moves;
                  const rank = index + 1;
                  
                  return (
                    <motion.div
                      key={`${entry.name}-${entry.date}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-4 p-4 rounded transition-all ${
                        isCurrentPlayer
                          ? 'bg-[#d4d0c8] dark:bg-[#2a2520] border-2 border-[#d4d0c8] dark:border-[#2a2520]'
                          : 'bg-[#d4d0c8]/10 dark:bg-[#2a2520]/10'
                      }`}
                    >
                      {/* Rank Badge */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        rank === 1 ? 'bg-yellow-500' :
                        rank === 2 ? 'bg-gray-400' :
                        rank === 3 ? 'bg-amber-600' :
                        'bg-[#5a4f47] dark:bg-[#b8b3ab]'
                      }`}>
                        <span className={`text-sm ${
                          rank <= 3 ? 'text-white' : 'text-[#e8e6e1] dark:text-[#2a2520]'
                        }`}>
                          {rank}
                        </span>
                      </div>

                      {/* Name */}
                      <div className="flex-1">
                        <p className={`tracking-wide ${
                          isCurrentPlayer 
                            ? 'text-[#2a2520] dark:text-[#e8e6e1]' 
                            : 'text-[#d4d0c8] dark:text-[#2a2520]'
                        }`}>
                          {entry.name}
                        </p>
                        <p className={`text-xs ${
                          isCurrentPlayer
                            ? 'text-[#5a4f47] dark:text-[#b8b3ab]'
                            : 'text-[#d4d0c8]/60 dark:text-[#2a2520]/60'
                        }`}>
                          {new Date(entry.date).toLocaleDateString()}
                        </p>
                      </div>

                      {/* Moves */}
                      <div className={`text-right ${
                        isCurrentPlayer
                          ? 'text-[#2a2520] dark:text-[#e8e6e1]'
                          : 'text-[#d4d0c8] dark:text-[#2a2520]'
                      }`}>
                        <p className="text-xl">{entry.moves}</p>
                        <p className="text-xs opacity-70">moves</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {leaderboard.length === 0 && (
                <p className="text-center text-[#d4d0c8]/70 dark:text-[#2a2520]/70 mb-6">
                  No scores yet. Be the first!
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowLeaderboard(false);
                    setGameWon(false);
                    setPlayerName('');
                    setCurrentRank(null);
                    resetGame();
                  }}
                  className="flex-1 px-6 py-2 bg-[#d4d0c8] dark:bg-[#2a2520] text-[#2a2520] dark:text-[#e8e6e1] hover:opacity-80 transition-opacity tracking-wide text-sm"
                >
                  Play Again
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}