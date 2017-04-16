/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Font extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, the font can be embedded.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly allowEditableEmbedding: boolean;
			/**
			 * If true, the font can be converted to outlines.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly allowOutlines: boolean;
			/**
			 * If true, the font can be embedded in a PDF document.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly allowPDFEmbedding: boolean;
			/**
			 * If true, the can font be printed.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly allowPrinting: boolean;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The name of the font family
			 * @type {string}
			 * @readonly
			 */
			public readonly fontFamily: string;
			/**
			 * The name of the font style.
			 * @type {string}
			 * @readonly
			 */
			public readonly fontStyleName: string;
			/**
			 * The native name of the font style.
			 * @type {string}
			 * @readonly
			 */
			public readonly fontStyleNameNative: string;
			/**
			 * The type of font.
			 * @type {Adobe.Incopy.FontTypes}
			 * @readonly
			 */
			public readonly fontType: Adobe.Incopy.FontTypes;
			/**
			 * The full font name.
			 * @type {string}
			 * @readonly
			 */
			public readonly fullName: string;
			/**
			 * The full native name of the font.
			 * @type {string}
			 * @readonly
			 */
			public readonly fullNameNative: string;
			/**
			 * The index of the Font within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The full path to the Font.
			 * @type {string}
			 * @readonly
			 */
			public readonly location: string;
			/**
			 * The name of the Font.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The ordering of a CID font.
			 * @type {string}
			 * @readonly
			 */
			public readonly ordering: string;
			/**
			 * The parent of the Font (a Document or Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The platform font name.
			 * @type {string}
			 * @readonly
			 */
			public readonly platformName: string;
			/**
			 * The PostScript name of the font.
			 * @type {string}
			 * @readonly
			 */
			public readonly postscriptName: string;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The registry of a CID font.
			 * @type {string}
			 * @readonly
			 */
			public readonly registry: string;
			/**
			 * If true, the font allows only restricted printing.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly restrictedPrinting: boolean;
			/**
			 * The status of the font.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public readonly status: Adobe.Incopy.FontStatus;
			/**
			 * The font version.
			 * @type {string}
			 * @readonly
			 */
			public readonly version: string;
			/**
			 * The writing script.
			 * @type {number}
			 * @readonly
			 */
			public readonly writingScript: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerFont(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Checks whether the font supports the specified OpenType 
			 * feature.
			 * @param {any} usingParam The OpenType feature to check for, 
			 * specified either as an OpenType feature or a string. Can 
			 * accept: OpenTypeFeature enumerator or String.
			 * @returns {boolean}
			 */
			public checkOpenTypeFeature(usingParam: any): boolean;
			/**
			 * Create a copy of the font with just enough information to 
			 * render the list of characters given.
			 * @param {string} charactersForSubsetParam String with all the 
			 * characters used in the resulting font.
			 * @param {File} fontDestinationParam File location for the new 
			 * font.
			 * @returns {void}
			 */
			public createSubsetFont(charactersForSubsetParam: string, fontDestinationParam: File): void;
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
			public removeEventListenerFont(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}