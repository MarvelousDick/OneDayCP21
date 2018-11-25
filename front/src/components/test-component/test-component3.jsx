import React, { PureComponent } from 'react';
import { BottomNavigation, FontIcon } from 'react-md';

const links = [{
    label: 'Recent',
    icon: <FontIcon>alarm_add</FontIcon>,
}, {
    label: 'Favorites',
    icon: <FontIcon>favorite</FontIcon>,
}, {
    label: 'Nearby',
    icon: <FontIcon>place</FontIcon>,
}];

class TestComponent3 extends PureComponent {
    state = { children: <div></div> };

    handleNavChange = (activeIndex) => {

        let children;
        switch (activeIndex) {
            case 1:
                children = <div>111</div>;
                break;
            case 2:
                children = <div>222</div>;
                break;
            default:
                children = <div>333</div>;
        }

        this.setState({ children });
    };

    render() {
        const { children } = this.state;

        return (
            <div>
                {children}
                <BottomNavigation links={links} dynamic={false} onNavChange={this.handleNavChange} />
            </div>
        );
    }
}

export default TestComponent3