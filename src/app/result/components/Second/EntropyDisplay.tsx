import { calculateEntropy } from "@/app/utils/Calculations";

interface EntropyDisplayProps {
  str: string;
  title: string;
}

export const EntropyDisplay: React.FC<EntropyDisplayProps> = ({ str, title }) => {
  if (!str) {
    return <p>Error: String is missing.</p>;
  }

  const entropy = calculateEntropy(str);

  return (
    <div>
      <p className="text-xl font-semibold">
        {title}: <strong>{entropy}</strong>
      </p>
    </div>
  )
}