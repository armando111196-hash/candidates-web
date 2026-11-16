import type { Candidate } from '../types/candidate';
import './CandidateCard.css';

interface CandidateCardProps {
  candidate: Candidate;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export const CandidateCard = ({ candidate, isFavorite, onToggleFavorite }: CandidateCardProps) => {
  // Redacción exacta requerida por la guía
  const getExperienceText = (years: number) => {
    if (years === 0) return 'Sin experiencia';
    if (years === 1) return '1 año de experiencia';
    return `${years} años de experiencia`;
  };

  return (
    <div className="candidate-card">
      <div className="candidate-card-header">
        <h3 className="candidate-card-title">{candidate.name}</h3>
        <span className="candidate-card-city">{candidate.city}</span>
      </div>

      <p className="candidate-card-email">{candidate.email}</p>

      <p className="candidate-card-experience">
        {getExperienceText(candidate.experienceYears)}
      </p>

      <div className="candidate-card-skills">
        {candidate.skills.length > 0 ? (
          candidate.skills.map((skill, index) => (
            <span key={index} className="candidate-skill-tag">
              {skill}
            </span>
          ))
        ) : (
          <span className="candidate-no-skills">Sin habilidades registradas</span>
        )}
      </div>

      <div className="candidate-card-footer">
        <button
          type="button"
          aria-pressed={isFavorite}
          className={`candidate-favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
          onClick={() => onToggleFavorite(candidate.id)}
        >
          {isFavorite ? 'En favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    </div>
  );
};