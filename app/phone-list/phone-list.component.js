angular.module('phoneList').component('phoneList', {
	templateUrl: 'phone-list/phone-list.template.html',
	controller: function PhoneListController() {
		this.phones = [
			{
				name: 'Nexus S',
				snippet: 'Fast just got faster with Nexus S.',
				age: 4
			}, {
				name: 'Motorola XOOM™ with Wi-Fi',
				snippet: 'The Next, Next Generation tablet.',
				age: 3
			}, {
				name: 'MOTOROLA XOOM™',
				snippet: 'The Next, Next Generation tablet.',
				age: 6
			}
		];
		this.orderProp = 'age';
	}
});