/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ColorRenderingDictionary extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default CRD.
			 * @type {Adobe.Indesign.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.ColorRenderingDictionary;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default CRD.
			 * @type {Adobe.Indesign.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.ColorRenderingDictionary;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the document's CRD.
			 * @type {Adobe.Indesign.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly USE_DOCUMENT: Adobe.Indesign.ColorRenderingDictionary;
			/**
			 * Alias for USE_DOCUMENT. Uses the document's CRD.
			 * @type {Adobe.Indesign.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly useDocument: Adobe.Indesign.ColorRenderingDictionary;
			/**
			 * Alias for WORKING. Uses the working CRD.
			 * @type {Adobe.Indesign.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly working: Adobe.Indesign.ColorRenderingDictionary;
			/**
			 * Uses the working CRD.
			 * @type {Adobe.Indesign.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly WORKING: Adobe.Indesign.ColorRenderingDictionary;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}