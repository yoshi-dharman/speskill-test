import 'bootstrap/dist/css/bootstrap.min.css';
import './My.css';

function App() {

  const date = new Date();
  const month = date.toLocaleString('en-us', { month: 'long' }); 
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const sec = date.getSeconds();
  // console.log(hour)

  function nth(n){return n>3&&n<21?"th":n%10===1?"st":n%10===2?"nd":n%10===3?"rd":"th"}

  return (
    <div>
      <div className='gradBg'>
        <div className='navTop text-green text-center pt-5 pb-3'>
          <h1>{"< SPE / FRONTEND >"}</h1>
          <h5 className='letter-space-3 text2'>{month} {day}{nth(day)}, {year} - {hour}:{minute}:{sec}</h5>
        </div>
      </div>

    </div>
  );
}

export default App;
