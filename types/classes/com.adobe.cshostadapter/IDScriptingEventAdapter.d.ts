/// <reference path="../../packages/com.adobe.cshostadapter/index.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class IDScriptingEventAdapter extends Adobe.Flash.Events.EventDispatcher {
			/**
			 * Adds a listener for the specified event to the application 
			 * object at the root of the InDesign scripting DOM.
			 * See  and its subclasses for allowable event types.
			 * If useCapture is set to true, the event may be handled by 
			 * event listeners registered to scripting objects above the 
			 * target object of the event during the capturing phase of 
			 * event propagation. This means an event listener on the 
			 * application, for example, can respond to a document event 
			 * before an eventListener is triggered.
			 * @param {string} eventType
			 * @param {Function} listener
			 * @param {boolean} useCapture
			 * @param {number} priority
			 * @param {boolean} useWeakReference
			 */
			public addEventListener(eventType: string, listener: Function, useCapture: boolean, priority: number, useWeakReference: boolean): void;
			/**
			 * Adds a listener for the specified event to the specified 
			 * InDesign object. Returns an instance representing the added 
			 * event listener.
			 * See  and its subclasses for allowable event types.
			 * The idObject parameter must be an InDesign CSAWLib class 
			 * instance to which event listeners can be added. For example, 
			 * an instance of . If idObject is , the event listener is 
			 * added to the application object at the root of the InDesign 
			 * scripting DOM.
			 * If useCapture is set to true, the event may be handled by 
			 * event listeners registered to scripting objects above the 
			 * target object of the event during the capturing phase of 
			 * event propagation. This means an event listener on the 
			 * application, for example, can respond to a document event 
			 * before an eventListener is triggered.
			 * @param {string} eventType
			 * @param {Function} listener
			 * @param {CSHostObject} idObject
			 * @param {boolean} useCapture
			 */
			public addEventListenerToObject(eventType: string, listener: Function, idObject: CSHostObject, useCapture: boolean): EventListener;
			/** Returns the IDScriptingEventAdapter instance. */
			public getInstance(): Adobe.Cshostadapter.IDScriptingEventAdapter;
			/**
			 * Removes the specified listener for the specified event from 
			 * the application object at the root of the InDesign scripting 
			 * DOM.
			 * @param {string} eventType
			 * @param {Function} listener
			 * @param {boolean} useCapture
			 */
			public removeEventListener(eventType: string, listener: Function, useCapture: boolean): void;
			/**
			 * Removes the specified listener for the specified event from 
			 * the given InDesign object.
			 * Returns  if the event listener was removed successfully, 
			 * else returns . Failure may occur if for example a listener 
			 * is removed without ever being added.
			 * If idObject is , the event listener is removed from the 
			 * application object at the root of the InDesign scripting 
			 * DOM.
			 * @param {string} eventType
			 * @param {Function} listener
			 * @param {CSHostObject} idObject
			 * @param {boolean} useCapture
			 */
			public removeEventListenerFromObject(eventType: string, listener: Function, idObject: CSHostObject, useCapture: boolean): boolean;
		}
	}
}