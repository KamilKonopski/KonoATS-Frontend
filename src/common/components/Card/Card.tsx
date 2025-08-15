interface CardProps {
  children: React.ReactNode;
  cardBgColor?: string;
  cardFontColor?: string;
  className?: string;
}

const Card = ({
  children,
  cardBgColor = "bg",
  cardFontColor = "text",
  className = "",
}: CardProps) => {
  return (
    <article className={`text-${cardFontColor} bg-${cardBgColor} rounded-[6px] ${className}`}>
      {children}
    </article>
  );
};

export default Card;
