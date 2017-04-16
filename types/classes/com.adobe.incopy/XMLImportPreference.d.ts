/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class XMLImportPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, transforms the XML using an XSLT file.
			 * @type {boolean}
			 */
			public allowTransform: boolean;
			/**
			 * If true, creates a link to the imported XML file. If false, 
			 * embeds the file.
			 * @type {boolean}
			 */
			public createLinkToXML: boolean;
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
			 * If true, ignores elements that do not match the existing 
			 * structure. Note: Valid only when import style is merge.
			 * @type {boolean}
			 */
			public ignoreUnmatchedIncoming: boolean;
			/**
			 * If true, leaves existing content in place if the matching 
			 * XML content contains only whitespace characters such as a 
			 * carriage return or a tab character. Note: Valid only when 
			 * import style is merge.
			 * @type {boolean}
			 */
			public ignoreWhitespace: boolean;
			/**
			 * If true, imports CALS tables as InDesign tables.
			 * @type {boolean}
			 */
			public importCALSTables: boolean;
			/**
			 * The style of incorporating imported XML content into the 
			 * document.
			 * @type {Adobe.Incopy.XMLImportStyles}
			 */
			public importStyle: Adobe.Incopy.XMLImportStyles;
			/**
			 * If true, imports text into tables if tags match placeholder 
			 * tables and their cells. Note: Valid only when import style 
			 * is merge.
			 * @type {boolean}
			 */
			public importTextIntoTables: boolean;
			/**
			 * If true, imports into the selected XML element. If false, 
			 * imports at the root element.
			 * @type {boolean}
			 */
			public importToSelected: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the XMLImportPreference (a Application or 
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
			 * If true, deletes existing elements or placeholders in the 
			 * document that do not have matches in the XML file. Note: 
			 * Valid only when import style is merge.
			 * @type {boolean}
			 */
			public removeUnmatchedExisting: boolean;
			/**
			 * If true, repeating text elements inherit the formatting 
			 * applied to placeholder text. Note: Valid only when import 
			 * style is merge.
			 * @type {boolean}
			 */
			public repeatTextElements: boolean;
			/**
			 * The name of the XSLT file. Note: Valid when allow transform 
			 * is true. Can return: File or XMLTransformFile enumerator.
			 * @type {any}
			 */
			public transformFilename: any;
			/**
			 * Stylesheet parameters as a list of name/value pairs in the 
			 * format [[name, value], [name, value], ...]. Can return: 
			 * Ordered array containing name:String, value:String.
			 * @type {any}
			 */
			public transformParameters: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerXMLImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerXMLImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}