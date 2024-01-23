import { MinusIcon, PlusIcon } from '../shared/icons';

const Question = ({
  question,
  answer,
  index,
  open,
  onclick,
}: {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  onclick: () => void;
}) => {
  console.log(index);
  return (
    <div
      onClick={onclick}
      className={`cursor-pointer ${
        index !== 0 ? 'border-t border-light-pink' : ''
      } py-5 `}
    >
      <div className="flex justify-between mb-2 gap-5">
        <h3 className="md:text-lg font-bold hover:text-fuchsia-600 text-dark-purple">
          {question}
        </h3>
        <span>{open ? <PlusIcon /> : <MinusIcon />}</span>
      </div>
      {open && (
        <div
          className={`overflow-hidden ${
            open ? 'max-h-[500px]' : 'max-h-0'
          } transition-height duration-500 ease-in-out`}
        >
          <p className="max-w-[500px] text-grayish-purple">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
