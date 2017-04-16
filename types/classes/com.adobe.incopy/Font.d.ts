/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Font extends Adobe.Csawlib.CSHostObject {
			/** If true, the font can be embedded. */
			public readonly allowEditableEmbedding: boolean;
			/** If true, the font can be converted to outlines. */
			public readonly allowOutlines: boolean;
			/** If true, the font can be embedded in a PDF document. */
			public readonly allowPDFEmbedding: boolean;
			/** If true, the can font be printed. */
			public readonly allowPrinting: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The name of the font family */
			public readonly fontFamily: string;
			/** The name of the font style. */
			public readonly fontStyleName: string;
			/** The native name of the font style. */
			public readonly fontStyleNameNative: string;
			/** The type of font. */
			public readonly fontType: Adobe.Incopy.FontTypes;
			/** The full font name. */
			public readonly fullName: string;
			/** The full native name of the font. */
			public readonly fullNameNative: string;
			/** The index of the Font within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The full path to the Font. */
			public readonly location: string;
			/** The name of the Font. */
			public readonly name: string;
			/** The ordering of a CID font. */
			public readonly ordering: string;
			/** The parent of the Font (a Document or Application). */
			public readonly parent: any;
			/** The platform font name. */
			public readonly platformName: string;
			/** The PostScript name of the font. */
			public readonly postscriptName: string;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The registry of a CID font. */
			public readonly registry: string;
			/** If true, the font allows only restricted printing. */
			public readonly restrictedPrinting: boolean;
			/** The status of the font. */
			public readonly status: Adobe.Incopy.FontStatus;
			/** The font version. */
			public readonly version: string;
			/** The writing script. */
			public readonly writingScript: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFont(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Checks whether the font supports the specified OpenType 
			 * feature.
			 * @param {any} usingParam The OpenType feature to check for, 
			 * specified either as an OpenType feature or a string. Can 
			 * accept: OpenTypeFeature enumerator or String.
			 */
			public checkOpenTypeFeature(usingParam: any): boolean;
			/**
			 * Create a copy of the font with just enough information to 
			 * render the list of characters given.
			 * @param {string} charactersForSubsetParam String with all the 
			 * characters used in the resulting font.
			 * @param {File} fontDestinationParam File location for the new 
			 * font.
			 */
			public createSubsetFont(charactersForSubsetParam: string, fontDestinationParam: File): void;
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
			public removeEventListenerFont(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}