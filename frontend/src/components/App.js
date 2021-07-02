import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../Theme'
import { BrowserRouter as Router} from 'react-router-dom'
import MainRouter from '../MainRouter'
const App = () => {
   
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Router>
                    <MainRouter/>
                </Router>
            </ThemeProvider>
        </div>
    )
}
export default App
