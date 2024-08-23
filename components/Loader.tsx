export const Loader = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-20 h-20 border-t-4 border-indigo-900 rounded-full animate-spin" />
      <div className="absolute w-16 h-16 border-b-4 rounded-full border-lime-600 animate-spin direction-reverse" />
      <span className="absolute text-xs animate-pulse">Loading</span>
    </div>
  );
};
