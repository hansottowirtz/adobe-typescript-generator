/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FrameFittingOption extends Adobe.Indesign.Preference {
			/**
			 * If true, the last saved fitting options will be applied to 
			 * the contents of a frame when it is resized.
			 * @type {boolean}
			 */
			public autoFit: boolean;
			/**
			 * The amount in measurement units to crop the bottom edge of a 
			 * graphic.
			 * @type {any}
			 */
			public bottomCrop: any;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The point with which to align the image empty when fitting 
			 * in a frame. For information, see frame fitting options.
			 * @type {Adobe.Indesign.AnchorPoint}
			 */
			public fittingAlignment: Adobe.Indesign.AnchorPoint;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content if the frame is empty. Can be applied to a frame, 
			 * object style, or document or to the application.
			 * @type {Adobe.Indesign.EmptyFrameFittingOptions}
			 */
			public fittingOnEmptyFrame: Adobe.Indesign.EmptyFrameFittingOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The amount in measurement units to crop the left edge of a 
			 * graphic.
			 * @type {any}
			 */
			public leftCrop: any;
			/**
			 * The parent of the FrameFittingOption (a ObjectStyle, Oval, 
			 * Rectangle, Polygon, Application or Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The amount in measurement units to crop the right edge of a 
			 * graphic.
			 * @type {any}
			 */
			public rightCrop: any;
			/**
			 * The amount in measurement units to crop the top edge of a 
			 * graphic.
			 * @type {any}
			 */
			public topCrop: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFrameFittingOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerFrameFittingOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}