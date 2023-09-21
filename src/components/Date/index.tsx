interface Props {
  className?: string;
  date: string;
}

export function Date({ className = "", date }: Props) {
  const dateTime = date.split(" ~ ")[0];

  return (
    <time className={`w-fit border-opacity-10 text-[--text--sec] text-2xs ${className}`} dateTime={dateTime}>
      {date}
    </time>
  );
}
