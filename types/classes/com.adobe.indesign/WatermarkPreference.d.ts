/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class WatermarkPreference extends Adobe.Indesign.Preference {
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the WatermarkPreference (a Document or 
			 * Application).
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
			 * Watermark do print for a document
			 * @type {boolean}
			 */
			public watermarkDoPrint: boolean;
			/**
			 * Watermark draw in back for a document
			 * @type {boolean}
			 */
			public watermarkDrawInBack: boolean;
			/**
			 * Watermark font color for a document. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public watermarkFontColor: any;
			/**
			 * Watermark font family display name
			 * @type {string}
			 */
			public watermarkFontFamily: string;
			/**
			 * Watermark font point size for a document
			 * @type {number}
			 */
			public watermarkFontPointSize: number;
			/**
			 * Watermark font style name
			 * @type {string}
			 */
			public watermarkFontStyle: string;
			/**
			 * Watermark horizontal offset for a document
			 * @type {any}
			 */
			public watermarkHorizontalOffset: any;
			/**
			 * Watermark horizontal position enum for a document
			 * @type {Adobe.Indesign.WatermarkHorizontalPositionEnum}
			 */
			public watermarkHorizontalPosition: Adobe.Indesign.WatermarkHorizontalPositionEnum;
			/**
			 * Watermark opacity (as a percentage). (Range: 0 to 100)
			 * @type {number}
			 */
			public watermarkOpacity: number;
			/**
			 * Watermark rotation for a document
			 * @type {number}
			 */
			public watermarkRotation: number;
			/**
			 * Watermark text for a document
			 * @type {string}
			 */
			public watermarkText: string;
			/**
			 * Watermark vertical offset for a document
			 * @type {any}
			 */
			public watermarkVerticalOffset: any;
			/**
			 * Watermark vertical position enum for a document
			 * @type {Adobe.Indesign.WatermarkVerticalPositionEnum}
			 */
			public watermarkVerticalPosition: Adobe.Indesign.WatermarkVerticalPositionEnum;
			/**
			 * Watermark visibility for a document
			 * @type {boolean}
			 */
			public watermarkVisibility: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerWatermarkPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerWatermarkPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}