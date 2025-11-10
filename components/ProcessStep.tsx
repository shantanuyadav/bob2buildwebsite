interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  duration: string;
}

const ProcessStep = ({ number, title, description, duration }: ProcessStepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Number Circle */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 dark:from-primary-600 dark:to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg dark:shadow-primary-900/20 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        {/* Duration Badge */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-dark-bg-tertiary border-2 border-primary-200 dark:border-primary-700 px-3 py-1 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 whitespace-nowrap">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-secondary-900 dark:text-dark-text-primary mb-3">{title}</h3>
        <p className="text-body text-secondary-600 dark:text-dark-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
