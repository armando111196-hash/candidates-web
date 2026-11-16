import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar por nombre o ciudad..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Buscar candidatos por nombre o ciudad"
      />
    </div>
  );
};