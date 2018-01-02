import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import moment from 'moment/moment';
import 'moment/locale/de-ch';

export default class Settings extends React.Component {
	render() {
		return (
			<Ons.Page contentStyle={{padding: 10}}>
				<div style={{textAlign: 'right', paddingRight: 5}}>
					<Ons.Icon 
						onClick={() => {this.props.navigator.popPage()}}
						size={40} 
						icon="ion-ios-arrow-left" 
						/>
				</div>
				<h1>Settings</h1>
			</Ons.Page>
		);
	}
}