import App from 'next/app'
import { ThemeProvider, Styled, ColorMode } from 'theme-ui'
import { Head } from '../components/head'
import { Header } from '../components/header'
import { meta, theme } from '../constants'
import '../static/webFonts.css'
import 'modern-normalize/modern-normalize.css' /* keep it last */

export default class MyApp extends App {
  // eslint-disable-next-line functional/no-return-void
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.log(`CUSTOM ERROR HANDLING`, error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  render(): React.ReactElement {
    const { Component } = this.props
    return (
      <>
        <Head {...meta} />
        <ThemeProvider {...{ theme }}>
          <ColorMode />
          <Styled.root>
            <Header />
            <Component />
          </Styled.root>
        </ThemeProvider>
      </>
    )
  }
}
