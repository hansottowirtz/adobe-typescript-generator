/// <reference path="../../packages/com.adobe.cshostadapter/references.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class PSEventAdapter extends Adobe.Cshostadapter.EventAdapter {
			/**
			 * Constructs a new PSEventAdapter instance. Do not call this 
			 * constructor directly. Instead, call the function to obtain a 
			 * reference to the singleton PSEventAdapter object.
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {CSXSEvent} event
			 * @returns {Event}
			 */
			protected createAppEvent(event: CSXSEvent): Event;
			/**
			 * Returns the PSEventAdapter instance.
			 * @returns {Adobe.Cshostadapter.PSEventAdapter}
			 */
			public getInstance(): Adobe.Cshostadapter.PSEventAdapter;
		}
	}
}