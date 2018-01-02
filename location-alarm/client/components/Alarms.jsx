import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import moment from 'moment/moment';
import 'moment/locale/de-ch';

import AddAlarm from './AddAlarm.jsx';
import Settings from './Settings.jsx';

class Clock extends React.Component {
	constructor(props){
		super(props);
		var time = moment().format('LTS');
		// increase spacing arount :
		time = time.split(':').join(' : ');
		this.state = {
			time: time,
			interval: null
		}
	}
	componentDidMount() {
		var interval = setInterval(() => {
			var time = moment().format('LTS');
			// increase spacing arount :
			time = time.split(':').join(' : ');
			this.setState({time: time});
		},1000)
		this.setState({interval: interval});
	}
	render() {
		return (
			<p style={{marginTop: 5}}>{this.state.time}</p>
		);
	}
	componentWillUnmount() {
		clearInterval(this.state.interval);
	}
}

class WoWillstDuHin extends React.Component {
	render() {
		return(
			<div>
				<p>Wo willst du hin?</p>
				<Ons.Input modifier="underbar"/>
			</div>
		);
	}
}


export default class Alarms extends React.Component {
	handleAddAlarm() {
		this.props.navigator.pushPage({
			component: AddAlarm
		});
	}
	onOpenSettings() {
		this.props.navigator.pushPage({
			component: Settings
		})
	}
	render() {
		var day = moment().format('dddd'); 
		var date = moment().format('LL');
		return (
			<Ons.Page contentStyle={{padding: 10}}>
				<div style={{textAlign: 'right', paddingRight: 5}}>
					<Ons.Icon onClick={this.onOpenSettings.bind(this)} size={40} icon="ion-ios-gear-outline" />
				</div>
				<div style={{textAlign: 'center'}}>
					<h1 style={{marginTop: 10}}>Guten {DayTime}!</h1>
					<p style={{marginBottom: 3, marginTop: 40}}>{day}, {date}</p>
					<Clock />
				</div>
				<div style={{textAlign: 'center', marginTop: 30}}>
					<WoWillstDuHin />
					<br/>
					<button className="button button--light">Auf Karte suchen</button>
				</div>
				<div style={{borderTop: '1px solid #ccc', marginTop: 20, textAlign: 'center'}}>
					<p>Gespeicherte Wecker </p> 
					<div style={{textAlign: 'right'}}>
						<Ons.Icon onClick={this.handleAddAlarm.bind(this)} style={{position: 'absolute', marginTop: -43, right: 40}} icon="ion-ios-plus-empty" size={40} />
					</div>
					<p>watuuup</p>
				</div>
			</Ons.Page>
		);
	}
}
