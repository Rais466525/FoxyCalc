"use client";

interface CalculatorFormProps {
  onCalculate: (x: string, y: string, action: string) => void;
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      x: { value: string };
      y: { value: string };
      action: { value: string };
    };
    const inputX = target.x.value;
    const inputY = target.y.value;
    const action = target.action.value;
    onCalculate(inputX, inputY, action);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        X:
        <input type="text" name="x" required />
      </label>
      <br />
      <label>
        Y:
        <input type="text" name="y" required />
      </label>
      <br />
      <label>
        Действие:
        <select name="action" required>
          <option value="one">one</option>
          <option value="one_1">one_1</option>
          <option value="two">two</option>
          <option value="th">th</option>
          <option value="for_4">for_4</option>
          <option value="sum_N">sum_N</option>
          <option value="f_m1">f_m1</option>
          <option value="f_m2">f_m2</option>
          <option value="five">five</option>
        </select>
      </label>
      <br />
      <button type="submit">Рассчитать</button>
    </form>
  );
}