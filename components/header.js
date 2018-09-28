import { meta } from '../constants'

const Header = () => (
  <div className={`flex justify-between mv2 pv2 bb`}>
    <h1 className={`f2 mv0`}>{meta.title}</h1>
    <h6 className={`f5 bg-green black br2 pa1 mv1 self-end`}>Demo</h6>
  </div>
)

export default Header
