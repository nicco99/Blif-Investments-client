import { cn } from "@/lib/utils";

type Props = {
  amount: number;
  time: number;
  children: React.ReactNode;
  className?: string;
};

export const Marquee = ({ amount, time, children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full flex items-center h-8 mx-auto relative overflow-hidden",
        className
      )}
    >
      {Array.from({ length: amount }).map((_, index) => (
        <div
          key={index}
          className="flex w-max shrink-0 justify-center items-center absolute left-[200%] rounded-sm animate-slide-left"
          style={{
            animationDuration: `${time}s`,
            animationDelay: `calc(${time}s / ${amount} * (${amount} - ${
              index + 1
            }) * -1)`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
