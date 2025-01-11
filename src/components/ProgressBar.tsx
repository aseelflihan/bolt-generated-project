import React from 'react';
    import { Gift } from 'lucide-react';

    interface ProgressBarProps {
      progress: number;
      total: number;
    }

    export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
      const percentage = (progress / total) * 100;

      return (
        <div className="relative pt-1 mb-4">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 transition-all duration-500"
            ></div>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <Gift className="w-6 h-6 text-pink-500" />
          </div>
        </div>
      );
    };
