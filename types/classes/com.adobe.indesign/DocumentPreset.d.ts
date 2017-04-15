/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DocumentPreset extends Adobe.Csawlib.CSHostObject {
			/** The bottom edge of the DocumentPreset. */
			public bottom: any;
			/** The number of columns to place on the page. */
			public columnCount: number;
			/** The distance between columns. */
			public columnGutter: any;
			/**
			 * The amount to offset the bottom document bleed. Note: To set 
			 * the bleed bottom offset, document bleed uniform size must be 
			 * false.
			 */
			public documentBleedBottomOffset: any;
			/**
			 * The amount to offset the inside or left document bleed. 
			 * Note: To set the bleed inside or left offset, document bleed 
			 * uniform size must be false.
			 */
			public documentBleedInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right document bleed. 
			 * Note: To set the bleed outside or right offset, document 
			 * bleed uniform size must be false.
			 */
			public documentBleedOutsideOrRightOffset: any;
			/** The amount to offset the top document bleed. */
			public documentBleedTopOffset: any;
			/**
			 * If true, uses the document bleed top offset value for bleed 
			 * offset measurements on all sides of the document. The 
			 * default setting is true.
			 */
			public documentBleedUniformSize: boolean;
			/**
			 * If true, uses the slug top offset value for slug 
			 * measurements on all sides of the document. The default value 
			 * is false.
			 */
			public documentSlugUniformSize: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** If true, the document has facing pages. */
			public facingPages: boolean;
			/** The unique ID of the DocumentPreset. */
			public readonly id: number;
			/**
			 * The index of the DocumentPreset within its containing 
			 * object.
			 */
			public readonly index: number;
			/** The intent for a document. */
			public intent: Adobe.Indesign.DocumentIntentOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The left edge of the DocumentPreset. */
			public left: any;
			/** If true, the document A-master has auto textframes. */
			public masterTextFrame: boolean;
			/** The name of the DocumentPreset. */
			public name: string;
			/** The height of the page. */
			public pageHeight: any;
			/** The page orientation. */
			public pageOrientation: Adobe.Indesign.PageOrientation;
			/** The size of the page. */
			public pageSize: string;
			/** The number of pages in the document. (Range: 1 to 9999) */
			public pagesPerDocument: number;
			/** The width of the page. */
			public pageWidth: any;
			/** The parent of the DocumentPreset (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The right edge of the DocumentPreset. */
			public right: any;
			/**
			 * The amount to offset the bottom slug. Note: To set the slug 
			 * bottom offset, document slug uniform size must be false.
			 */
			public slugBottomOffset: any;
			/**
			 * The amount to offset the inside or left slug. Note: To set 
			 * the slug inside or left offset, document slug uniform size 
			 * must be false.
			 */
			public slugInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right slug. Note: To set 
			 * the slug right or outside offset, document slug uniform size 
			 * must be false.
			 */
			public slugRightOrOutsideOffset: any;
			/** The amount to offset the top slug. */
			public slugTopOffset: any;
			/**
			 * The starting page number for a document. This is the same as 
			 * the starting page number for the first section of a 
			 * document. Default value is 1.
			 */
			public startPageNumber: number;
			/** The top edge of the DocumentPreset. */
			public top: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDocumentPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the DocumentPreset. */
			public duplicate(): Adobe.Indesign.DocumentPreset;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Deletes the DocumentPreset. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDocumentPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}