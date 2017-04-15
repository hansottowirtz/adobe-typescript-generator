/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ColorRenderingDictionary extends Adobe.Csawlib.CSEnumBase {
			/** Uses the default CRD. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.ColorRenderingDictionary;
			/** Alias for DEFAULT_VALUE. Uses the default CRD. */
			public static readonly defaultValue: Adobe.Indesign.ColorRenderingDictionary;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the document's CRD. */
			public static readonly USE_DOCUMENT: Adobe.Indesign.ColorRenderingDictionary;
			/** Alias for USE_DOCUMENT. Uses the document's CRD. */
			public static readonly useDocument: Adobe.Indesign.ColorRenderingDictionary;
			/** Alias for WORKING. Uses the working CRD. */
			public static readonly working: Adobe.Indesign.ColorRenderingDictionary;
			/** Uses the working CRD. */
			public static readonly WORKING: Adobe.Indesign.ColorRenderingDictionary;
			/** Constructor */
			public constructor();
		}
	}
}