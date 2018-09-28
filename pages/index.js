import Header from '../components/header'

const Main = ({ dispatch, model }) => (
  <div className={`mh2`}>
    <Header />
    <pre className={`f5`}>
      {JSON.stringify(model, null, 2)}
    </pre>
  </div>
)

export default Main
