/// <reference path="../../packages/com.adobe.cshostadapter/index.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class AIEventAdapter extends Adobe.Cshostadapter.EventAdapter {
			/**
			 * Constructs a new AIEventAdapter instance. Do not call this 
			 * constructor directly. Instead, call the function to obtain a 
			 * reference to the singleton AIEventAdapter object.
			 */
			public constructor();
			/**
			 * @param {CSXSEvent} event
			 */
			protected createAppEvent(event: CSXSEvent): Event;
			/** Returns the AIEventAdapter instance. */
			public getInstance(): Adobe.Cshostadapter.AIEventAdapter;
		}
	}
}