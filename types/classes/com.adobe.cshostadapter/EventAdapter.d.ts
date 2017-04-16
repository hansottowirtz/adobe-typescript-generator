/// <reference path="../../packages/com.adobe.cshostadapter/references.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class EventAdapter extends Adobe.Flash.Events.EventDispatcher {
			/**
			 * Constructs a new EventAdapter instance.
			 * This API should not be called directly. Instead, use 
			 * application-specific subclasses of this class, such as the 
			 * PSEventAdapter for Photoshop
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Registers a listener for the specified event, so that the 
			 * listener receives notification of the event.
			 * The set of allowed values for eventType varies depending on 
			 * which Creative Suite application is being targeted. The type 
			 * of event dispatched to the listener will also vary depending 
			 * on the target application.
			 * See the ASDoc for application-specific subclasses of this 
			 * class for information relevant to a particular application.
			 * @param {string} eventType
			 * @param {Function} listener
			 * @param {boolean} useCapture
			 * @param {number} priority
			 * @param {boolean} useWeakReference
			 * @returns {void}
			 */
			public addEventListener(eventType: string, listener: Function, useCapture: boolean, priority: number, useWeakReference: boolean): void;
			/**
			 * This method must be overridden by subclasses, or it will 
			 * throw an Error. It is called whenever a CSXS event is 
			 * received from the host adapter plug-in which requires 
			 * translation.
			 * @param {CSXSEvent} event
			 * @returns {Event}
			 */
			protected createAppEvent(event: CSXSEvent): Event;
			/**
			 * Helper method for subclasses which dispatches a CSXS event 
			 * with the specified type and XML payload.
			 * @param {string} _type
			 * @param {string} payload
			 * @returns {void}
			 */
			protected dispatchToEventAdapter(_type: string, payload: string): void;
			/**
			 * Obtains a list of the events for which the host adapter 
			 * plug-in is currently listening.
			 * A  is dispatched to responseHandler when the list of events 
			 * is received from the host adapter plug-in.
			 * This method provides a means of checking whether an event 
			 * listener was successfully added or removed by the host 
			 * adapter plug-in.
			 * @param {Function} responseHandler
			 * @returns {void}
			 */
			public listEvents(responseHandler: Function): void;
			/**
			 * Sends a 'ping' message to the host adapter plug-in and 
			 * dispatches the response to the specified handler.
			 * A  is dispatched to responseHandler either when a response 
			 * is received from the plug-in or after the specified timeout 
			 * period.
			 * This method provides a means of checking whether the 
			 * required host adapter plug-in has been loaded by the host 
			 * application, and therefore whether this library can be used 
			 * to register event listeners.
			 * @param {Function} responseHandler
			 * @param {number} timeout
			 * @returns {void}
			 */
			public pingPlugIn(responseHandler: Function, timeout: number): void;
			/**
			 * Removes an event listener for the specified event.
			 * If no matching listener is registered with this event 
			 * adapter, a call to this method has no effect.
			 * @param {string} eventType
			 * @param {Function} listener
			 * @param {boolean} useCapture
			 * @returns {void}
			 */
			public removeEventListener(eventType: string, listener: Function, useCapture: boolean): void;
		}
	}
}