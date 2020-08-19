const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

const App = props => {
  return (
    <ReactRouterDOM.HashRouter>
      <ul>
        <li>
          <Link to="/">ATM</Link>
        </li>
        <li>
          <Link to="/cash">Cash</Link>
        </li>
        <li>
          <Link to="/deposit">Deposit</Link>
        </li>
      </ul>

      <Route path="/" exact component={ATM} />
      <Route path="/cash" component={Cash} />
      <Route path="/deposit" component={Deposit} />
    </ReactRouterDOM.HashRouter>
  );
};
const ATM = () => <h1>ATM</h1>;
const Cash = () => <h1>Cash Back</h1>;
const Deposit = () => <h1>Deposit</h1>;

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
