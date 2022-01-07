import React, { Component } from "react";
import './components/Style.css';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset ,ThemeProvider} from '@material-ui/core/styles';
import Direction from './components/assets/CustomTheme';
import Dashboard from './components/Dashboard/Dashboard';
import Loading from './components/Loading/Loading';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class App extends Component {

  constructor() {
    super()
    this.state = { loading: true }
  }

  componentDidMount() {
      setTimeout(() => {
        this.setState({loading: false})
      }, 3000);
  }


  render() {
    return (
      <>
        {
          this.state.loading ? (<Loading/>) : ([
            <div className='bg-Style'>
              <ThemeProvider theme={Direction}>
                <StylesProvider jss={jss}>
                  <Dashboard/>
                </StylesProvider>
              </ThemeProvider>
            </div>
          ])
        }
      </>
    );
  }
}

export default App;
