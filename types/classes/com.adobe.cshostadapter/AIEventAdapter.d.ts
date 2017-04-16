/// <reference path="../../packages/com.adobe.cshostadapter/references.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class AIEventAdapter extends Adobe.Cshostadapter.EventAdapter {
			/**
			 * Constructs a new AIEventAdapter instance. Do not call this 
			 * constructor directly. Instead, call the function to obtain a 
			 * reference to the singleton AIEventAdapter object.
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {CSXSEvent} event
			 * @returns {Event}
			 */
			protected createAppEvent(event: CSXSEvent): Event;
			/**
			 * Returns the AIEventAdapter instance.
			 * @returns {Adobe.Cshostadapter.AIEventAdapter}
			 */
			public getInstance(): Adobe.Cshostadapter.AIEventAdapter;
		}
	}
}