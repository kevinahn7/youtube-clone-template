import React from 'react';
import Home from './Home';
import TopNav from './TopNav';
import Results from './Results';
import Watch from './Watch';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {

	render() {
		const topMargin = {
			height: "55px"
		}
		return (
			<BrowserRouter>
				<div>
					<TopNav />
					<div style={topMargin}></div>
					<Switch>
						<Route exact path='/' component={Home} />
						{ this.props.currentVideo &&
							<Route exact path='/watch/:videoId' render={()=><Watch currentVideo={this.props.currentVideo} channelInfo={this.props.channelInfo}/>} />
						}
						{ this.props.currentSearch &&
							<Route exact path='/results/:searchQuery' render={()=><Results currentSearch={this.props.currentSearch} />}  rel="stylesheet" href="/style.css"/>
						}
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

const mapStateToProps = state => {
		return {
			currentSearch: state.currentSearch,
			currentVideo: state.currentVideo.currentVideo,
			channelInfo: state.currentVideo.channelInfo
		};
	}

export default connect(mapStateToProps)(App);
