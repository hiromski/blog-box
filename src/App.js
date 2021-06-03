import classes from './App.module.css'
import Header from "./component/layout/Header";
import MainContent from './component/parts/MainContent';
import RecentMenu from './component/parts/RecentMenu';

function App() {
  return (
    <div>
      <Header />
      <div className={classes.row}>
        <div className={classes.column}>
          <RecentMenu />
        </div>
        <div className={classes.column} style={{width: '60%', backgroundColor: 'grey'}}>
          <MainContent />
        </div>
        <div className={classes.column}>right-side</div>
      </div>
    </div>
  );
}

export default App;
