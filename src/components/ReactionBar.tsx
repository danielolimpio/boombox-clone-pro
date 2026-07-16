const ReactionBar = () => {
  const reactions = [
    { emoji: "😍", label: "like" },
    { emoji: "👎", label: "dislike" },
    { emoji: "😢", label: "cry" },
    { emoji: "😱", label: "damn" },
    { emoji: "😂", label: "lol" },
    { emoji: "🥰", label: "cute" },
    { emoji: "😮", label: "omg" },
    { emoji: "🏆", label: "win" },
    { emoji: "🤯", label: "wtf" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 py-4 md:py-6 border-b bg-card overflow-x-auto">
      {reactions.map((reaction) => (
        <button
          key={reaction.label}
          className="text-2xl sm:text-3xl hover:scale-125 transition-transform cursor-pointer shrink-0"
          title={reaction.label}
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;
