import { Range } from "../Range";
import { useCarousel } from "../hooks";

export function RangeWithContext() {
  const { range, setRange } = useCarousel();

  return (
    <Range
      value={range}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setRange(Number(e.target.value))
      }
    />
  );
}
