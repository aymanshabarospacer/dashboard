import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef } from 'react';

//prop definition
type MultiSelectDropdownProps = {
  category: {name: string};
  options: {id: number; name: string; category: string}[];
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ category, options }) => {
  const [selectedFilter, setSelectedFilter] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [visibleTags, setVisibleTags] = React.useState<{id: number; name: string; category: string}[]>(options);
  const dropdownRef = useRef(null);

  // const handleClickOutside = (event: any) => {
  //   if (dropdownRef && dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
  //     setSelectedFilter(false);
  //   }
  // }

  // useEffect(() => {
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  
  const onCheckBoxSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      const newItems = selectedItems.filter((i) => i !== item);
      setSelectedItems(newItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  const filterTags = (string: string) => {
    //filter tags based on the input string
    const filteredTags = options.filter(tag => tag.name.toLowerCase().includes(string.toLowerCase()));
    setVisibleTags(filteredTags);
  }

  return (
    <div className="mt-4 relative">
      <div 
        className='w-full flex justify-between border border-gray-200' 
        onClick={() => setSelectedFilter(!selectedFilter)}
        ref={dropdownRef}
      >
        {
          selectedFilter ?
          <input type="text" className="p-2 outline-none text-gray-200 w-full bg-transparent" onChange={(event) => filterTags(event.target.value)} onClick={(e) => e.stopPropagation()}/> :
          <p className='text-gray-200 p-2 pl-6 font-semibold'>{category.name}</p>
        }
        
        {
          selectedFilter ? 
          <ChevronDownIcon className="p-2 w-10 text-gray-200 transform rotate-180" /> : 
          <ChevronDownIcon className="p-2 w-10 text-gray-200" />
        }
      </div>
      {
        selectedFilter && 
        <div className='list absolute top-10 right-0 left-0 border border-gray-200 bg-slate-950 z-10'>
          <ul className='text-left'>
            {visibleTags.map(option => (
              <li key={option.id} className='p-4 flex justify-between'>
                <label>{option.name}</label>
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded"
                  checked={selectedItems.includes(option.name)}
                  onChange={() => onCheckBoxSelect(option.name)}
                />
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default MultiSelectDropdown;