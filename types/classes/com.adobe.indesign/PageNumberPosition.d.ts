/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageNumberPosition extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Places page numbers after entry text.
			 * @type {Adobe.Indesign.PageNumberPosition}
			 * @readonly
			 */
			public static readonly AFTER_ENTRY: Adobe.Indesign.PageNumberPosition;
			/**
			 * Alias for AFTER_ENTRY. Places page numbers after entry text.
			 * @type {Adobe.Indesign.PageNumberPosition}
			 * @readonly
			 */
			public static readonly afterEntry: Adobe.Indesign.PageNumberPosition;
			/**
			 * Places page numbers before entry text.
			 * @type {Adobe.Indesign.PageNumberPosition}
			 * @readonly
			 */
			public static readonly BEFORE_ENTRY: Adobe.Indesign.PageNumberPosition;
			/**
			 * Alias for BEFORE_ENTRY. Places page numbers before entry 
			 * text.
			 * @type {Adobe.Indesign.PageNumberPosition}
			 * @readonly
			 */
			public static readonly beforeEntry: Adobe.Indesign.PageNumberPosition;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Turns off page numbers.
			 * @type {Adobe.Indesign.PageNumberPosition}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.PageNumberPosition;
			/**
			 * Turns off page numbers.
			 * @type {Adobe.Indesign.PageNumberPosition}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.PageNumberPosition;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}