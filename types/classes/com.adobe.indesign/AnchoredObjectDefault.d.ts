/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class AnchoredObjectDefault extends Adobe.Indesign.Preference {
			/**
			 * The initial frame type of a new anchored object.
			 * @type {Adobe.Indesign.ContentType}
			 */
			public anchorContent: Adobe.Indesign.ContentType;
			/**
			 * The initial object style of a new anchored object.
			 * @type {Adobe.Indesign.ObjectStyle}
			 */
			public anchoredObjectStyle: Adobe.Indesign.ObjectStyle;
			/**
			 * The initial paragraph style of a new anchored object. Note: 
			 * Valid when anchor content is text.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public anchoredParagraphStyle: Adobe.Indesign.ParagraphStyle;
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
			 * The initial height of a new anchored object.
			 * @type {any}
			 */
			public initialAnchorHeight: any;
			/**
			 * The initial width of a new anchored object.
			 * @type {any}
			 */
			public initialAnchorWidth: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the AnchoredObjectDefault (a Application or 
			 * Document).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerAnchoredObjectDefault(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerAnchoredObjectDefault(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}