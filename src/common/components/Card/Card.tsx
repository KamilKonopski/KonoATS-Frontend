interface CardProps {
  children: React.ReactNode;
  cardBgColor?: string;
  cardFontColor?: string;
  className?: string;
}

const Card = ({
  children,
  cardBgColor = "bg-bg",
  cardFontColor = "text-text",
  className = "",
}: CardProps) => {
  return (
    <article className={`${cardFontColor} ${cardBgColor} rounded-[6px] ${className}`}>
      {children}
    </article>
  );
};

export default Card;
