import { useState } from 'react';
import { CANDIDATES } from '../data/candidates';
import { SearchBar } from '../components/SearchBar';
import { CandidateList } from '../components/CandidateList';
import './CandidatesPage.css';

export const CandidatesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // Función para alternar favoritos levantada a la página (nunca se usa push)
  const handleToggleFavorite = (id: number) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  // Filtrar candidatos por nombre o ciudad (insensible a mayúsculas/minúsculas)
  const filteredCandidates = CANDIDATES.filter((candidate) => {
    const query = searchQuery.toLowerCase();
    return (
      candidate.name.toLowerCase().includes(query) ||
      candidate.city.toLowerCase().includes(query)
    );
  });

  return (
    <main className="candidates-page">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="candidates-info-bar">
        <span className="candidates-counter">
          {filteredCandidates.length === 1
            ? '1 resultado'
            : `${filteredCandidates.length} resultados`}
        </span>
      </div>

      {filteredCandidates.length > 0 ? (
        <CandidateList
          candidates={filteredCandidates}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <div className="no-results-message">
          No se encontraron candidatos con ese término.
        </div>
      )}
    </main>
  );
};