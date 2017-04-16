/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ColorRenderingDictionary extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default CRD.
			 * @type {Adobe.Incopy.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.ColorRenderingDictionary;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default CRD.
			 * @type {Adobe.Incopy.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Incopy.ColorRenderingDictionary;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the document's CRD.
			 * @type {Adobe.Incopy.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly USE_DOCUMENT: Adobe.Incopy.ColorRenderingDictionary;
			/**
			 * Alias for USE_DOCUMENT. Uses the document's CRD.
			 * @type {Adobe.Incopy.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly useDocument: Adobe.Incopy.ColorRenderingDictionary;
			/**
			 * Alias for WORKING. Uses the working CRD.
			 * @type {Adobe.Incopy.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly working: Adobe.Incopy.ColorRenderingDictionary;
			/**
			 * Uses the working CRD.
			 * @type {Adobe.Incopy.ColorRenderingDictionary}
			 * @readonly
			 */
			public static readonly WORKING: Adobe.Incopy.ColorRenderingDictionary;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}