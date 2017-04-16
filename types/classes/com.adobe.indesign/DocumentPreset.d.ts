/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DocumentPreset extends Adobe.Csawlib.CSHostObject {
			/**
			 * The bottom edge of the DocumentPreset.
			 * @type {any}
			 */
			public bottom: any;
			/**
			 * The number of columns to place on the page.
			 * @type {number}
			 */
			public columnCount: number;
			/**
			 * The distance between columns.
			 * @type {any}
			 */
			public columnGutter: any;
			/**
			 * If true, the document A-master has primary text frames when 
			 * a new document is created.
			 * @type {boolean}
			 */
			public createPrimaryTextFrame: boolean;
			/**
			 * The amount to offset the bottom document bleed. Note: To set 
			 * the bleed bottom offset, document bleed uniform size must be 
			 * false.
			 * @type {any}
			 */
			public documentBleedBottomOffset: any;
			/**
			 * The amount to offset the inside or left document bleed. 
			 * Note: To set the bleed inside or left offset, document bleed 
			 * uniform size must be false.
			 * @type {any}
			 */
			public documentBleedInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right document bleed. 
			 * Note: To set the bleed outside or right offset, document 
			 * bleed uniform size must be false.
			 * @type {any}
			 */
			public documentBleedOutsideOrRightOffset: any;
			/**
			 * The amount to offset the top document bleed.
			 * @type {any}
			 */
			public documentBleedTopOffset: any;
			/**
			 * If true, uses the document bleed top offset value for bleed 
			 * offset measurements on all sides of the document. The 
			 * default setting is true.
			 * @type {boolean}
			 */
			public documentBleedUniformSize: boolean;
			/**
			 * If true, uses the slug top offset value for slug 
			 * measurements on all sides of the document. The default value 
			 * is false.
			 * @type {boolean}
			 */
			public documentSlugUniformSize: boolean;
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
			 * If true, the document has facing pages.
			 * @type {boolean}
			 */
			public facingPages: boolean;
			/**
			 * The unique ID of the DocumentPreset.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the DocumentPreset within its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * The intent for a document.
			 * @type {Adobe.Indesign.DocumentIntentOptions}
			 */
			public intent: Adobe.Indesign.DocumentIntentOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The left edge of the DocumentPreset.
			 * @type {any}
			 */
			public left: any;
			/**
			 * The name of the DocumentPreset.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The height of the page.
			 * @type {any}
			 */
			public pageHeight: any;
			/**
			 * The page orientation.
			 * @type {Adobe.Indesign.PageOrientation}
			 */
			public pageOrientation: Adobe.Indesign.PageOrientation;
			/**
			 * The size of the page.
			 * @type {string}
			 */
			public pageSize: string;
			/**
			 * The number of pages in the document. (Range: 1 to 9999)
			 * @type {number}
			 */
			public pagesPerDocument: number;
			/**
			 * The width of the page.
			 * @type {any}
			 */
			public pageWidth: any;
			/**
			 * The parent of the DocumentPreset (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The right edge of the DocumentPreset.
			 * @type {any}
			 */
			public right: any;
			/**
			 * The amount to offset the bottom slug. Note: To set the slug 
			 * bottom offset, document slug uniform size must be false.
			 * @type {any}
			 */
			public slugBottomOffset: any;
			/**
			 * The amount to offset the inside or left slug. Note: To set 
			 * the slug inside or left offset, document slug uniform size 
			 * must be false.
			 * @type {any}
			 */
			public slugInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right slug. Note: To set 
			 * the slug right or outside offset, document slug uniform size 
			 * must be false.
			 * @type {any}
			 */
			public slugRightOrOutsideOffset: any;
			/**
			 * The amount to offset the top slug.
			 * @type {any}
			 */
			public slugTopOffset: any;
			/**
			 * The starting page number for a document. This is the same as 
			 * the starting page number for the first section of a 
			 * document. Default value is 1.
			 * @type {number}
			 */
			public startPageNumber: number;
			/**
			 * The top edge of the DocumentPreset.
			 * @type {any}
			 */
			public top: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerDocumentPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the DocumentPreset.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public duplicate(): Adobe.Indesign.DocumentPreset;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the DocumentPreset.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerDocumentPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}