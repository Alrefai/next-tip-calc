import App, { Container } from 'next/app'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel, meta } from '../constants'
import 'modern-normalize/modern-normalize.css' //keep it the last import

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
          @import url('https://fonts.googleapis.com/css?family=Fira+Mono');

          body {
            font-family: 'Fira Mono', monospace;
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
