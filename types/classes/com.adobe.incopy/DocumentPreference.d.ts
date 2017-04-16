/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class DocumentPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, guarantees that when pages are added to a spread it 
			 * will contain a maximum of two pages. If false, allows pages 
			 * to be added or moved into existing spreads. For override 
			 * information, see preserve layout when shuffling.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly allowPageShuffle: boolean;
			/**
			 * The direction of text in the column.
			 * @type {Adobe.Incopy.HorizontalOrVertical}
			 */
			public columnDirection: Adobe.Incopy.HorizontalOrVertical;
			/**
			 * The color of the column guides, specified either as an array 
			 * of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values,, or as a UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public columnGuideColor: any;
			/**
			 * If true, locks column guides.
			 * @type {boolean}
			 */
			public columnGuideLocked: boolean;
			/**
			 * If true, the document A-master has primary text frames when 
			 * a new document is created.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly createPrimaryTextFrame: boolean;
			/**
			 * The amount to offset the bottom document bleed. Note: To set 
			 * the bleed bottom offset, document bleed uniform size must be 
			 * false.
			 * @type {any}
			 * @readonly
			 */
			public readonly documentBleedBottomOffset: any;
			/**
			 * The amount to offset the inside or left document bleed. 
			 * Note: To set the bleed inside or left offset, document bleed 
			 * uniform size must be false.
			 * @type {any}
			 * @readonly
			 */
			public readonly documentBleedInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right document bleed. 
			 * Note: To set the bleed outside or right offset, document 
			 * bleed uniform size must be false.
			 * @type {any}
			 * @readonly
			 */
			public readonly documentBleedOutsideOrRightOffset: any;
			/**
			 * The amount to offset the top document bleed.
			 * @type {any}
			 * @readonly
			 */
			public readonly documentBleedTopOffset: any;
			/**
			 * If true, uses the document bleed top offset value for bleed 
			 * offset measurements on all sides of the document. The 
			 * default setting is true.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly documentBleedUniformSize: boolean;
			/**
			 * If true, uses the slug top offset value for slug 
			 * measurements on all sides of the document. The default value 
			 * is false.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly documentSlugUniformSize: boolean;
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
			 * If true, the document has facing pages.
			 * @type {boolean}
			 */
			public facingPages: boolean;
			/**
			 * The intent for a document.
			 * @type {Adobe.Incopy.DocumentIntentOptions}
			 * @readonly
			 */
			public readonly intent: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The color of the margin guides, specified either as an array 
			 * of three doubles, each in the range 0 to 255, representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public marginGuideColor: any;
			/**
			 * If true, overprints black when saving the document.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overprintBlack: boolean;
			/**
			 * The placement of the page binding.
			 * @type {Adobe.Incopy.PageBindingOptions}
			 */
			public pageBinding: Adobe.Incopy.PageBindingOptions;
			/**
			 * The height of the page.
			 * @type {any}
			 */
			public pageHeight: any;
			/**
			 * The page orientation.
			 * @type {Adobe.Incopy.PageOrientation}
			 */
			public pageOrientation: Adobe.Incopy.PageOrientation;
			/**
			 * The size of the page.
			 * @type {string}
			 */
			public pageSize: string;
			/**
			 * The number of pages in the document. (Range: 1 to 9999)
			 * @type {number}
			 * @readonly
			 */
			public readonly pagesPerDocument: number;
			/**
			 * The width of the page.
			 * @type {any}
			 */
			public pageWidth: any;
			/**
			 * The parent of the DocumentPreference (a Application or 
			 * Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, preserves the layout of spreads that contained more 
			 * than two pages when allow page shuffle was turned on. If 
			 * false, changes multi-page spreads to two-page spreads if the 
			 * spreads were created or changed since allow page shuffle was 
			 * turned on.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly preserveLayoutWhenShuffling: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The amount to offset the bottom slug. Note: To set the slug 
			 * bottom offset, document slug uniform size must be false.
			 * @type {any}
			 * @readonly
			 */
			public readonly slugBottomOffset: any;
			/**
			 * The amount to offset the inside or left slug. Note: To set 
			 * the slug inside or left offset, document slug uniform size 
			 * must be false.
			 * @type {any}
			 * @readonly
			 */
			public readonly slugInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right slug. Note: To set 
			 * the slug right or outside offset, document slug uniform size 
			 * must be false.
			 * @type {any}
			 * @readonly
			 */
			public readonly slugRightOrOutsideOffset: any;
			/**
			 * The amount to offset the top slug.
			 * @type {any}
			 * @readonly
			 */
			public readonly slugTopOffset: any;
			/**
			 * The starting page number for a document. This is the same as 
			 * the starting page number for the first section of a 
			 * document. Default value is 1.
			 * @type {number}
			 * @readonly
			 */
			public readonly startPageNumber: number;
			/**
			 * The depth of the text area.
			 * @type {number}
			 */
			public textAreaDepth: number;
			/**
			 * The unit in which to measure the text area depth.
			 * @type {Adobe.Incopy.TextAreaDepthUnit}
			 */
			public textAreaDepthUnit: Adobe.Incopy.TextAreaDepthUnit;
			/**
			 * The width of the text area.
			 * @type {any}
			 */
			public textAreaWidth: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerDocumentPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerDocumentPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}