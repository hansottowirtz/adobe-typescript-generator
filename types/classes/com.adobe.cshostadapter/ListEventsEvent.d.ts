/// <reference path="../../packages/com.adobe.cshostadapter/references.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class ListEventsEvent extends Adobe.Flash.Events.Event {
			/**
			 * The list of events being listened for by the host adapter 
			 * plug-in which triggered this event. Typically each item in 
			 * the array is a String representing an event's unique 
			 * identifier, however this may vary between host applications.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly list: any[];
			/**
			 * Constructs a ListEventsEvent with the specified type and 
			 * event list array.
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Defines the value of the type property of a event object.
			 * @type {void}
			 */
			public static readonly LIST: any;
		}
	}
}