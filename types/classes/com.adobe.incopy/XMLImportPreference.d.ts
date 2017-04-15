/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLImportPreference extends Adobe.Incopy.Preference {
			/** If true, transforms the XML using an XSLT file. */
			public allowTransform: boolean;
			/**
			 * If true, creates a link to the imported XML file. If false, 
			 * embeds the file.
			 */
			public createLinkToXML: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, ignores elements that do not match the existing 
			 * structure. Note: Valid only when import style is merge.
			 */
			public ignoreUnmatchedIncoming: boolean;
			/**
			 * If true, leaves existing content in place if the matching 
			 * XML content contains only whitespace characters such as a 
			 * carriage return or a tab character. Note: Valid only when 
			 * import style is merge.
			 */
			public ignoreWhitespace: boolean;
			/** If true, imports CALS tables as InDesign tables. */
			public importCALSTables: boolean;
			/**
			 * The style of incorporating imported XML content into the 
			 * document.
			 */
			public importStyle: Adobe.Incopy.XMLImportStyles;
			/**
			 * If true, imports text into tables if tags match placeholder 
			 * tables and their cells. Note: Valid only when import style 
			 * is merge.
			 */
			public importTextIntoTables: boolean;
			/**
			 * If true, imports into the selected XML element. If false, 
			 * imports at the root element.
			 */
			public importToSelected: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the XMLImportPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, deletes existing elements or placeholders in the 
			 * document that do not have matches in the XML file. Note: 
			 * Valid only when import style is merge.
			 */
			public removeUnmatchedExisting: boolean;
			/**
			 * If true, repeating text elements inherit the formatting 
			 * applied to placeholder text. Note: Valid only when import 
			 * style is merge.
			 */
			public repeatTextElements: boolean;
			/**
			 * The name of the XSLT file. Note: Valid when allow transform 
			 * is true. Can return: File or XMLTransformFile enumerator.
			 */
			public transformFilename: any;
			/**
			 * Stylesheet parameters as a list of name/value pairs in the 
			 * format [[name, value], [name, value], ...]. Can return: 
			 * Ordered array containing name:String, value:String.
			 */
			public transformParameters: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerXMLImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerXMLImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}