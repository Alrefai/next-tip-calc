import App from 'next/app'
import { ThemeProvider, Styled, ColorMode } from 'theme-ui'
import Head from '../components/head'
import Header from '../components/header'
import reducer from '../reducers'
import { initModel, meta, theme } from '../constants'
import '../static/webFonts.css'
import 'modern-normalize/modern-normalize.css' //keep it the last import

export default class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = action => this.setState(prevState => reducer(prevState, action))

  render() {
    const { Component } = this.props
    return (
      <>
        <Head {...meta} />
        <ThemeProvider {...{ theme }}>
          <ColorMode />
          <Styled.root>
            <Header />
            <Component model={this.state} dispatch={this.dispatch} />
          </Styled.root>
        </ThemeProvider>
      </>
    )
  }
}
