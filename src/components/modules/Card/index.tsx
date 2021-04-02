import React from 'react';

export interface Props {
  title: string;
  subtitle: string;
  tags?: string[];
}

const Card: React.FC<Props> = ({ title, subtitle, tags = [] }) => {
  return (
    <div>
      <div className="flex flex-col py-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

          <h3 className="text-gray-600 my-4">{subtitle}</h3>
        </div>

        <div className="flex items-center">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-green-700 text-sm rounded-full px-2 bg-green-200"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
