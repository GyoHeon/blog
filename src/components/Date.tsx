interface Props {
  className?: string;
  date: string;
}

export function Date({ className, date }: Props) {
  const dateTime = date.split(" ~ ")[0];
  return (
    <time
      className={`w-fit p-0.5 pr-1 border-b-2 border-[--orange] text-[--text--sec] text-xs italic ${className}`}
      dateTime={dateTime}
    >
      {date}
    </time>
  );
}
