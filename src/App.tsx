import { HashRouter, Routes, Route } from 'react-router-dom';
import { useGame } from '@/hooks/useGame';
import { GameProvider } from '@/hooks/GameContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rebirth from './pages/Rebirth';
import Gameplay from './pages/Gameplay';
import Ending from './pages/Ending';
import Gallery from './pages/Gallery';
import Leaderboard from './pages/Leaderboard';

function AppInner() {
  const game = useGame();

  return (
    <GameProvider value={game}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rebirth" element={<Rebirth />} />
            <Route path="/play" element={<Gameplay />} />
            <Route path="/ending" element={<Ending />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Layout>
      </HashRouter>
    </GameProvider>
  );
}

export default function App() {
  return <AppInner />;
}
