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
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>
        Энтропия: <strong>{entropy}</strong>
      </p>
    </div>
  )
}