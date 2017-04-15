/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LayoutGridDataInformation extends Adobe.Indesign.Preference {
			/**
			 * The font applied to the LayoutGridDataInformation, specified 
			 * as either a font object or the name of font family. Can 
			 * return: Font or String.
			 */
			public appliedFont: any;
			/** The amount of white space between characters. */
			public characterAki: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The name of the font style. */
			public fontStyle: string;
			/**
			 * The horizontal scaling applied to the 
			 * LayoutGridDataInformation.
			 */
			public horizontalScale: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The amount of white space between lines. */
			public lineAki: number;
			/**
			 * The parent of the LayoutGridDataInformation (a Application 
			 * or Document).
			 */
			public readonly parent: any;
			/** The text size. */
			public pointSize: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The vertical scaling applied to the 
			 * LayoutGridDataInformation.
			 */
			public verticalScale: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLayoutGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerLayoutGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}