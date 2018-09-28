import App, { Container } from 'next/app'
// import { library as fontawesome } from '@fortawesome/fontawesome-svg-core'
// import {} from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel, meta } from '../constants'
// import '@fortawesome/fontawesome-svg-core/styles.css'
import 'tachyons/css/tachyons.min.css'
import 'modern-normalize/modern-normalize.css' //keep it the last import

// fontawesome.add()

export default class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = action => this.setState(prevState => reducer(prevState, action))

  render() {
    const { Component } = this.props
    return (
      <Container>
        <Head {...meta} />
        <Component model={this.state} dispatch={this.dispatch} />
        <style jsx global>{`
          body {
            background: black;
            color: #F4F4F4;
            max-width: 32rem;
            margin-right: auto;
            margin-left: auto;
          }
        `}</style>
      </Container>
    )
  }
}
