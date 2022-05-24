import React, { Component } from "react";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset ,ThemeProvider} from '@material-ui/core/styles';
import Direction from './components/assets/CustomTheme';
import Dashboard from './components/Dashboard/Dashboard';
import Loading from './components/Loading/Loading';
import './App.scss';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class App extends Component {

  constructor() {
    super()
    this.state = { 
      loading: true ,
      MyComponents : []
     }
  }

  async componentDidMount() {
    const Components = await (
      <Dashboard/>
    )
    this.setState({ MyComponents : Components , loading: false})
  }

  render() {
    return (
      <>
        {
          this.state.loading ? (<Loading/>) : ([
            <div className='bg-Style'>
              <ThemeProvider theme={Direction}>
                <StylesProvider jss={jss}>
                  {this.state.MyComponents}
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
