import './App.css';
import Header from './Components/Header';
import Entry from './Components/Entry';
import ViewEntries from './Components/ViewEntries'
import DeleteModal from './Components/DeleteModal';

function App() {
  return (
    <>
      <Header />
      <main>
        <Entry />
        <ViewEntries />
      </main>
      <article>
        <DeleteModal />
      </article>
    </>
  );
}

export default App;
