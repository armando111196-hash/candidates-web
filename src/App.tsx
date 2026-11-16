import { Header } from './components/Header';
import { CandidatesPage } from './pages/CandidatesPage';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <CandidatesPage />
    </div>
  );
};