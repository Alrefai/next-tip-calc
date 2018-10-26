import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel, meta, theme } from '../constants'
import '../static/webFonts.css'
import 'modern-normalize/modern-normalize.css' //keep it the last import

export default class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = action => this.setState(prevState => reducer(prevState, action))

  render() {
    const [{ Component }, { color, background }] = [this.props, theme.colors]
    return (
      <Container>
        <Head {...meta} />
        <ThemeProvider {...{ theme }}>
          <Component model={this.state} dispatch={this.dispatch} />
        </ThemeProvider>
        <style jsx global>{`
          html {
            font-size: 10px;
          }

          body {
            font-family: 'Fira Mono', monospace;
            font-size: 1.6rem;
            background: ${background};
            color: ${color};
            max-width: 51.2rem;
            margin-right: auto;
            margin-left: auto;
          }
        `}</style>
      </Container>
    )
  }
}
