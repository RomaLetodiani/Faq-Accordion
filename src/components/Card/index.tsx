import { useState } from 'react';
import Question from '../Question';
import { QaA } from '../shared/QAA';
import { StarIcon } from '../shared/icons';

const Card = () => {
  const [open, setOpen] = useState(0);
  const onclick = (index: number) => {
    if (open === index) {
      setOpen(-1);
    } else setOpen(index);
  };
  return (
    <div className="max-w-[600px] min-h-[630px] min-[450px]:min-h-[510px] flex flex-col z-20 bg-white p-10 pb-2 rounded-3xl">
      <div className="flex gap-5 items-center">
        <StarIcon />
        <h1 className="text-3xl md:text-5xl tracking-tighter font-extrabold">
          FAQs
        </h1>
      </div>
      <div className="flex-1">
        {QaA.map((qa, index) => (
          <Question
            key={index}
            index={index}
            onclick={() => onclick(index)}
            open={open === index}
            {...qa}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
