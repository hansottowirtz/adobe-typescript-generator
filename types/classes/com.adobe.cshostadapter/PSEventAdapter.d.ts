/// <reference path="../../packages/com.adobe.cshostadapter/index.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class PSEventAdapter extends Adobe.Cshostadapter.EventAdapter {
			/**
			 * Constructs a new PSEventAdapter instance. Do not call this 
			 * constructor directly. Instead, call the function to obtain a 
			 * reference to the singleton PSEventAdapter object.
			 */
			public constructor();
			/**
			 * @param {CSXSEvent} event
			 */
			protected createAppEvent(event: CSXSEvent): Event;
			/** Returns the PSEventAdapter instance. */
			public getInstance(): Adobe.Cshostadapter.PSEventAdapter;
		}
	}
}