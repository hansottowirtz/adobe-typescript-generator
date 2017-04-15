/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class DocumentPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, guarantees that when pages are added to a spread it 
			 * will contain a maximum of two pages. If false, allows pages 
			 * to be added or moved into existing spreads. For override 
			 * information, see preserve layout when shuffling.
			 */
			public readonly allowPageShuffle: boolean;
			/** The direction of text in the column. */
			public columnDirection: Adobe.Incopy.HorizontalOrVertical;
			/**
			 * The color of the column guides, specified either as an array 
			 * of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values,, or as a UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public columnGuideColor: any;
			/** If true, locks column guides. */
			public columnGuideLocked: boolean;
			/**
			 * The amount to offset the bottom document bleed. Note: To set 
			 * the bleed bottom offset, document bleed uniform size must be 
			 * false.
			 */
			public readonly documentBleedBottomOffset: any;
			/**
			 * The amount to offset the inside or left document bleed. 
			 * Note: To set the bleed inside or left offset, document bleed 
			 * uniform size must be false.
			 */
			public readonly documentBleedInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right document bleed. 
			 * Note: To set the bleed outside or right offset, document 
			 * bleed uniform size must be false.
			 */
			public readonly documentBleedOutsideOrRightOffset: any;
			/** The amount to offset the top document bleed. */
			public readonly documentBleedTopOffset: any;
			/**
			 * If true, uses the document bleed top offset value for bleed 
			 * offset measurements on all sides of the document. The 
			 * default setting is true.
			 */
			public readonly documentBleedUniformSize: boolean;
			/**
			 * If true, uses the slug top offset value for slug 
			 * measurements on all sides of the document. The default value 
			 * is false.
			 */
			public readonly documentSlugUniformSize: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** If true, the document has facing pages. */
			public facingPages: boolean;
			/** The intent for a document. */
			public readonly intent: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The color of the margin guides, specified either as an array 
			 * of three doubles, each in the range 0 to 255, representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public marginGuideColor: any;
			/** If true, the document A-master has auto textframes. */
			public readonly masterTextFrame: boolean;
			/** If true, overprints black when saving the document. */
			public readonly overprintBlack: boolean;
			/** The placement of the page binding. */
			public pageBinding: Adobe.Incopy.PageBindingOptions;
			/** The height of the page. */
			public pageHeight: any;
			/** The page orientation. */
			public pageOrientation: Adobe.Incopy.PageOrientation;
			/** The size of the page. */
			public pageSize: string;
			/** The number of pages in the document. (Range: 1 to 9999) */
			public readonly pagesPerDocument: number;
			/** The width of the page. */
			public pageWidth: any;
			/**
			 * The parent of the DocumentPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * If true, preserves the layout of spreads that contained more 
			 * than two pages when allow page shuffle was turned on. If 
			 * false, changes multi-page spreads to two-page spreads if the 
			 * spreads were created or changed since allow page shuffle was 
			 * turned on.
			 */
			public readonly preserveLayoutWhenShuffling: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The amount to offset the bottom slug. Note: To set the slug 
			 * bottom offset, document slug uniform size must be false.
			 */
			public readonly slugBottomOffset: any;
			/**
			 * The amount to offset the inside or left slug. Note: To set 
			 * the slug inside or left offset, document slug uniform size 
			 * must be false.
			 */
			public readonly slugInsideOrLeftOffset: any;
			/**
			 * The amount to offset the outside or right slug. Note: To set 
			 * the slug right or outside offset, document slug uniform size 
			 * must be false.
			 */
			public readonly slugRightOrOutsideOffset: any;
			/** The amount to offset the top slug. */
			public readonly slugTopOffset: any;
			/**
			 * The starting page number for a document. This is the same as 
			 * the starting page number for the first section of a 
			 * document. Default value is 1.
			 */
			public readonly startPageNumber: number;
			/** The depth of the text area. */
			public textAreaDepth: number;
			/** The unit in which to measure the text area depth. */
			public textAreaDepthUnit: Adobe.Incopy.TextAreaDepthUnit;
			/** The width of the text area. */
			public textAreaWidth: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDocumentPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerDocumentPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}