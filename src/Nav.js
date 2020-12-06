import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			open: [false, true, false, true]
		};
  }
	handleClick(id) {
		let { open } = this.state;
    this.setState({
			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
		});
	}
	render() {
		return (
			<div className='menu-row'>
			  <HamburgerMenu
		      isOpen={this.state.open[0]}
		      menuClicked={this.handleClick.bind(this, 0)}
		      width={36}
					height={30}
					strokeWidth={2}
					rotate={0}
		      color='black'
					borderRadius={5}
		      animationDuration={0.3}
		    />
			</div>
		);
	}
};

export default Nav;