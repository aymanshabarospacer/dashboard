import React from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';

const tagsMock = [
  {
    id: 1,
    name: 'David Loyd',
    category: 'Gym'
  },
  {
    id: 10,
    name: 'Pure Gym',
    category: 'Gym'
  },
  {
    id: 2,
    name: 'Yorkshire',
    category: 'Region'
  },
  {
    id: 3,
    name: 'London West',
    category: 'Region'
  },
  {
    id: 4,
    name: 'London East',
    category: 'Region'
  },
  {
    id: 5,
    name: 'East Midlands',
    category: 'Region'
  },
  {
    id: 6,
    name: 'South East',
    category: 'Region'
  },
  {
    id: 7,
    name: 'London',
    category: 'Region'
  },
]

const SystemsFilters: React.FC = () => {
  //get tags from the server
  const [tags, setTags] = React.useState(tagsMock);


  //create a map of categories and their tags
  const categoriesMap: { name: string; options: { id: number; name: string; category: string; }[]; }[] = [];

  tagsMock.forEach(tag => {
    const categoryTags = categoriesMap.filter(category => tag.category === category.name);
    //check if category is already in the map to avoid duplicates but push new tags
    if (categoryTags.length === 0) {
      categoriesMap.push({ name: tag.category, options: [tag] });
    } else {
      categoryTags[0].options.push(tag);
    }
  });


  return (
    <div className="mt-4 relative">
      {
        categoriesMap.map(category => 
          <MultiSelectDropdown category={category} options={category.options} />
        )
      }
    </div>
  );
};

export default SystemsFilters;