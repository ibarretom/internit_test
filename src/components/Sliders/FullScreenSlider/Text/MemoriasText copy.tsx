import { Text } from ".";
import { IFullScreenSliderTextProps } from ".";

export function MemoriasText({ ...rest }: IFullScreenSliderTextProps) {
  return (
    <Text {...rest}>
      crie memórias com <strong className="text-strong">amigos</strong> e{" "}
      <strong className="strong">família</strong>
    </Text>
  );
}
