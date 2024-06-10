
import AddItemForm from './additems/AddItemForm';
import ItemsDisplay from './collections/ItemsDisplay';

const ParentComponent = () => {
  const handleItemAdded = () => {
    // This function will be passed to AddItemForm and called on successful item addition
    // It triggers a re-fetch in ItemsDisplay by changing a key
    window.location.reload(); // Or use a more sophisticated state management approach
  };

  return (
    <div>
      <AddItemForm onItemAdded={handleItemAdded} />
      <ItemsDisplay />
    </div>
  );
};

export default ParentComponent;
