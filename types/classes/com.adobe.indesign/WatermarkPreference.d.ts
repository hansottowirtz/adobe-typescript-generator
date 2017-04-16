/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class WatermarkPreference extends Adobe.Indesign.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the WatermarkPreference (a Document or 
			 * Application).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** Watermark do print for a document */
			public watermarkDoPrint: boolean;
			/** Watermark draw in back for a document */
			public watermarkDrawInBack: boolean;
			/**
			 * Watermark font color for a document. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public watermarkFontColor: any;
			/** Watermark font family display name */
			public watermarkFontFamily: string;
			/** Watermark font point size for a document */
			public watermarkFontPointSize: number;
			/** Watermark font style name */
			public watermarkFontStyle: string;
			/** Watermark horizontal offset for a document */
			public watermarkHorizontalOffset: any;
			/** Watermark horizontal position enum for a document */
			public watermarkHorizontalPosition: Adobe.Indesign.WatermarkHorizontalPositionEnum;
			/** Watermark opacity (as a percentage). (Range: 0 to 100) */
			public watermarkOpacity: number;
			/** Watermark rotation for a document */
			public watermarkRotation: number;
			/** Watermark text for a document */
			public watermarkText: string;
			/** Watermark vertical offset for a document */
			public watermarkVerticalOffset: any;
			/** Watermark vertical position enum for a document */
			public watermarkVerticalPosition: Adobe.Indesign.WatermarkVerticalPositionEnum;
			/** Watermark visibility for a document */
			public watermarkVisibility: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerWatermarkPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerWatermarkPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}