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
    <div className="flex items-center justify-center gap-4 py-6 border-b bg-card">
      {reactions.map((reaction) => (
        <button
          key={reaction.label}
          className="text-3xl hover:scale-125 transition-transform cursor-pointer"
          title={reaction.label}
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;
