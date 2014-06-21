(function() {
	'use strict';
	define([], function() {

		var stepService = function($q) {
			self = this;

			/**
			 *	@name model.steps
			 *
			 *	@description
			 *	This is concept of keeping model in service with setter and getter
			 */

			var modelClass = {
				model: {},
				getModel: function() {
					return this.model;
				},
				pushDataToModel: function(data) {
					this.model.push(data);
				},
				setModel: function(data) {
					this.model = data;
				}
			};

			this.steps = Object.create(modelClass);




			this.getSteps = function() {

				var data = [
				{
					id: 1,
					questionSet : [{
						id: 1,
						question: "What type of vessel?",
						description: "",
						answers: [
							{id: 1, name: "Motor powered vessel"},
							{id: 2, name: "Fishing vessel"},
							{id: 3, name: "Tug"},
							{id: 4, name: "Sail yacht"}
						]
					},{
						id: 2,
						question: "Wich side do you see?",
						description: "",
						answers:[
							{id: 21, name: "Port side"},
							{id: 22, name: "Starboard"},
							{id: 23, name: "Ahead"},
							{id: 24, name: "Aft"}
						]
					},{
						id: 3,
						question: "What length?",
						description: "",
						answers: [
							{id: 31, name: "<50m"},
							{id: 31, name: ">50m <100m"},
							{id: 31, name: ">100m"}
						]
					},{
						id: 4,
						question: "Day shape?",
						description: "",
						answers: [
							{id: 41, name: "Orb"},
							{id: 42, name: "Cone pointing down"},
							{id: 43, name: "Cylinder"}
						]
					},{
						id: 5,
						question: "Sound signal?",
						description: "",
						answers: [
							{id: 51, name: "•  — —"},
							{id: 52, name: "• • — —"},
							{id: 53, name: "• • • — —"},
						]
					},{
						id: 6,
						question: "Underway?",
						description: 'The word "Underway" means that vessel is not at anchor, or made fast to the shore, or aground',
						answers:[
							{id: 61, name: "Yes"},
							{id: 62, name: "No"},
							{id: 63, name: "Unknown"}
						]
					},{
						id: 7,
						question: "Making way?",
						description: "Lorem ipsum dolor sit amet senin",
						answers:[
							{id: 71, name: "Yes"},
							{id: 72, name: "No"},
							{id: 73, name: "Unknown"}
						]
					}],
					imageUrl: {
						question: "./img/vessels/1600x1117.gif",
						outline: "./img/vessels/1600x1118.gif"
					},
					navigationRule: [
						{rule: 'Rule 30', title: 'Anchored Vessels and Vessels Aground', description: 'Lorem ipsum dolor<br> sit <strong>amet</strong> senin.'},
					]
				},

				{
					id: 2,
					questionSet : [{
						id: 1,
						question: "What type of vessel?",
						description: "",
						answers: [
							{id: 1, name: "Motor powered vessel"},
							{id: 2, name: "Fishing vessel"},
							{id: 3, name: "Tug"},
							{id: 4, name: "Sail yacht"}
						]
					},{
						id: 2,
						question: "Wich side do you see?",
						description: "",
						answers:[
							{id: 21, name: "Port side"},
							{id: 22, name: "Starboard"},
							{id: 23, name: "Ahead"},
							{id: 24, name: "Aft"}
						]
					},{
						id: 3,
						question: "What length?",
						description: "",
						answers: [
							{id: 31, name: "<50m"},
							{id: 31, name: ">50m <100m"},
							{id: 31, name: ">100m"}
						]
					},{
						id: 6,
						question: "Underway?",
						description: 'The word "Underway" means that vessel is not at anchor, or made fast to the shore, or aground',
						answers:[
							{id: 61, name: "Yes"},
							{id: 62, name: "No"},
							{id: 63, name: "Unknown"}
						]
					},{
						id: 7,
						question: "Making way?",
						description: "Lorem ipsum dolor sit amet senin",
						answers:[
							{id: 71, name: "Yes"},
							{id: 72, name: "No"},
							{id: 73, name: "Unknown"}
						]
					}],
					imageUrl: {
						question: "./img/vessels/1600x1117.gif",
						outline: "./img/vessels/1600x1118.gif"
					},
					navigationRule: [
						{title: 'Navigation rule 23.', description: 'Lorem ipsum dolor sit amet senin.'},
					]
				},
				{
					id: 1337,
					questionSet : [{
						id: 1,
						question: "What type of vessel?",
						description: "",
						answers: [
							{id: 1, name: "Motor powered vessel"},
							{id: 2, name: "Fishing vessel"},
							{id: 3, name: "Tug"},
							{id: 4, name: "Sail yacht"}
						]
					},{
						id: 2,
						question: "Wich side do you see?",
						description: "",
						answers:[
							{id: 21, name: "Port side"},
							{id: 22, name: "Starboard"},
							{id: 23, name: "Ahead"},
							{id: 24, name: "Aft"}
						]
					},{
						id: 3,
						question: "What length?",
						description: "",
						answers: [
							{id: 31, name: "<50m"},
							{id: 31, name: ">50m <100m"},
							{id: 31, name: ">100m"}
						]
					},{
						id: 4,
						question: "Day shape?",
						description: "",
						answers: [
							{id: 41, name: "Orb"},
							{id: 42, name: "Cone pointing down"},
							{id: 43, name: "Cylinder"}
						]
					},{
						id: 5,
						question: "Sound signal?",
						description: "",
						answers: [
							{id: 51, name: "•  — —"},
							{id: 52, name: "• • — —"},
							{id: 53, name: "• • • — —"},
						]
					},{
						id: 6,
						question: "Underway?",
						description: 'The word "Underway" means that vessel is not at anchor, or made fast to the shore, or aground',
						answers:[
							{id: 61, name: "Yes"},
							{id: 62, name: "No"},
							{id: 63, name: "Unknown"}
						]
					},{
						id: 7,
						question: "Making way?",
						description: "Lorem ipsum dolor sit amet senin",
						answers:[
							{id: 71, name: "Yes"},
							{id: 72, name: "No"},
							{id: 73, name: "Unknown"}
						]
					}],
					imageUrl: {
						question: "./img/vessels/400x300.png",
						outline: "./img/vessels/1600x900.png"
					},
					navigationRule: [
						{title: 'Navigation rule 23.', description: 'Lorem ipsum dolor sit amet senin.'},
					]
				},
				{
					id: 10,
					questionSet : [{
						id: 1,
						question: "What type of vessel?",
						description: "",
						answers: [
							{id: 1, name: "Motor powered vessel"},
							{id: 2, name: "Fishing vessel"},
							{id: 3, name: "Tug"},
							{id: 4, name: "Sail yacht"}
						]
					},{
						id: 2,
						question: "Wich side do you see?",
						description: "",
						answers:[
							{id: 21, name: "Port side"},
							{id: 22, name: "Starboard"},
							{id: 23, name: "Ahead"},
							{id: 24, name: "Aft"}
						]
					},{
						id: 3,
						question: "What length?",
						description: "",
						answers: [
							{id: 31, name: "<50m"},
							{id: 31, name: ">50m <100m"},
							{id: 31, name: ">100m"}
						]
					},{
						id: 4,
						question: "Day shape?",
						description: "",
						answers: [
							{id: 41, name: "Orb"},
							{id: 42, name: "Cone pointing down"},
							{id: 43, name: "Cylinder"}
						]
					},{
						id: 5,
						question: "Sound signal?",
						description: "",
						answers: [
							{id: 51, name: "•  — —"},
							{id: 52, name: "• • — —"},
							{id: 53, name: "• • • — —"},
						]
					},{
						id: 6,
						question: "Underway?",
						description: 'The word "Underway" means that vessel is not at anchor, or made fast to the shore, or aground',
						answers:[
							{id: 61, name: "Yes"},
							{id: 62, name: "No"},
							{id: 63, name: "Unknown"}
						]
					},{
						id: 7,
						question: "Making way?",
						description: "Lorem ipsum dolor sit amet senin",
						answers:[
							{id: 71, name: "Yes"},
							{id: 72, name: "No"},
							{id: 73, name: "Unknown"}
						]
					}],
					imageUrl: {
						question: "./img/vessels/1600x1117.gif",
						outline: "./img/vessels/1600x1118.gif"
					},
					navigationRule: [
						{title: 'Navigation rule 23.', description: 'Lorem ipsum dolor sit amet senin.'},
					]
				},
				{
					id: 11,
					questionSet : [{
						id: 1,
						question: "What type of vessel?",
						description: "",
						answers: [
							{id: 1, name: "Motor powered vessel"},
							{id: 2, name: "Fishing vessel"},
							{id: 3, name: "Tug"},
							{id: 4, name: "Sail yacht"}
						]
						},{
							id: 2,
							question: "Wich side do you see?",
							description: "",
							answers:[
								{id: 21, name: "Port side"},
								{id: 22, name: "Starboard"},
								{id: 23, name: "Ahead"},
								{id: 24, name: "Aft"}
							]
						},{
							id: 3,
							question: "What length?",
							description: "",
							answers: [
								{id: 31, name: "<50m"},
								{id: 31, name: ">50m <100m"},
								{id: 31, name: ">100m"}
							]
						},{
							id: 4,
							question: "Day shape?",
							description: "",
							answers: [
								{id: 41, name: "Orb"},
								{id: 42, name: "Cone pointing down"},
								{id: 43, name: "Cylinder"}
							]
						},{
							id: 5,
							question: "Sound signal?",
							description: "",
							answers: [
								{id: 51, name: "•  — —"},
								{id: 52, name: "• • — —"},
								{id: 53, name: "• • • — —"},
							]
						},{
							id: 6,
							question: "Underway?",
							description: 'The word "Underway" means that vessel is not at anchor, or made fast to the shore, or aground',
							answers:[
								{id: 61, name: "Yes"},
								{id: 62, name: "No"},
								{id: 63, name: "Unknown"}
							]
						},{
							id: 7,
							question: "Making way?",
							description: "Lorem ipsum dolor sit amet senin",
							answers:[
								{id: 71, name: "Yes"},
								{id: 72, name: "No"},
								{id: 73, name: "Unknown"}
							]
					}],
					imageUrl: {
						question: "./img/vessels/1600x1117.gif",
						outline: "./img/vessels/1600x1118.gif"
					},
					navigationRule: [
						{title: 'Navigation rule 23.', description: 'Lorem ipsum dolor sit amet senin.'},
					]
				},
				{
					id: 17,
					questionSet : [{
						id: 1,
						question: "What type of vessel?",
						description: "",
						answers: [
							{id: 1, name: "Motor powered vessel"},
							{id: 2, name: "Fishing vessel"},
							{id: 3, name: "Tug"},
							{id: 4, name: "Sail yacht"}
						]
					},{
						id: 2,
						question: "Wich side do you see?",
						description: "",
						answers:[
							{id: 21, name: "Port side"},
							{id: 22, name: "Starboard"},
							{id: 23, name: "Ahead"},
							{id: 24, name: "Aft"}
						]
					},{
						id: 3,
						question: "What length?",
						description: "",
						answers: [
							{id: 31, name: "<50m"},
							{id: 31, name: ">50m <100m"},
							{id: 31, name: ">100m"}
						]
					},{
						id: 4,
						question: "Day shape?",
						description: "",
						answers: [
							{id: 41, name: "Orb"},
							{id: 42, name: "Cone pointing down"},
							{id: 43, name: "Cylinder"}
						]
					},{
						id: 5,
						question: "Sound signal?",
						description: "",
						answers: [
							{id: 51, name: "•  — —"},
							{id: 52, name: "• • — —"},
							{id: 53, name: "• • • — —"},
						]
					},{
						id: 6,
						question: "Underway?",
						description: 'The word "Underway" means that vessel is not at anchor, or made fast to the shore, or aground',
						answers:[
							{id: 61, name: "Yes"},
							{id: 62, name: "No"},
							{id: 63, name: "Unknown"}
						]
					},{
						id: 7,
						question: "Making way?",
						description: "Lorem ipsum dolor sit amet senin",
						answers:[
							{id: 71, name: "Yes"},
							{id: 72, name: "No"},
							{id: 73, name: "Unknown"}
						]
					}],
					imageUrl: {
						question: "./img/vessels/1600x1117.gif",
						outline: "./img/vessels/1600x1118.gif"
					},
					navigationRule: [
						{title: 'Navigation rule 23.', description: 'Lorem ipsum dolor sit amet senin.'},
					]
				},
				{
					id: 14,
					questionSet : [{
						id: 1,
						question: "What type of vessel?",
						description: "",
						answers: [
							{id: 1, name: "Motor powered vessel"},
							{id: 2, name: "Fishing vessel"},
							{id: 3, name: "Tug"},
							{id: 4, name: "Sail yacht"}
						]
					},{
						id: 2,
						question: "Wich side do you see?",
						description: "",
						answers:[
							{id: 21, name: "Port side"},
							{id: 22, name: "Starboard"},
							{id: 23, name: "Ahead"},
							{id: 24, name: "Aft"}
						]
					},{
						id: 3,
						question: "What length?",
						description: "",
						answers: [
							{id: 31, name: "<50m"},
							{id: 31, name: ">50m <100m"},
							{id: 31, name: ">100m"}
						]
					},{
						id: 4,
						question: "Day shape?",
						description: "",
						answers: [
							{id: 41, name: "Orb"},
							{id: 42, name: "Cone pointing down"},
							{id: 43, name: "Cylinder"}
						]
					},{
						id: 5,
						question: "Sound signal?",
						description: "",
						answers: [
							{id: 51, name: "•  — —"},
							{id: 52, name: "• • — —"},
							{id: 53, name: "• • • — —"},
						]
					},{
						id: 6,
						question: "Underway?",
						description: 'The word "Underway" means that vessel is not at anchor, or made fast to the shore, or aground',
						answers:[
							{id: 61, name: "Yes"},
							{id: 62, name: "No"},
							{id: 63, name: "Unknown"}
						]
					},{
						id: 7,
						question: "Making way?",
						description: "Lorem ipsum dolor sit amet senin",
						answers:[
							{id: 71, name: "Yes"},
							{id: 72, name: "No"},
							{id: 73, name: "Unknown"}
						]
					}],
					imageUrl: {
						question: "./img/vessels/1600x1117.gif",
						outline: "./img/vessels/1600x1118.gif"
					},
					navigationRule: [
						{rule: 'Rule 30', title: 'Anchored Vessels and Vessels Aground', description: 'Lorem ipsum dolor<br> sit amet senin.'},
					]
				}
				];

				var deferred = $q.defer();

				/* TODO: used when ready

				navrulesResource.getSteps(
					function(data) {
						deferred.resolve(data)
					}, function(reason) {
						deferred.reject(reason)
					}
				);
				*/

				this.steps.setModel(data);
				deferred.resolve(data);

				return deferred.promise;


			};
		};

		return ['$q', stepService];
	});
}())
