/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TaggedPDFStructureOrderOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use Articles order for the tagged PDF structure. */
			public static readonly USE_ARTICLES: Adobe.Indesign.TaggedPDFStructureOrderOptions;
			/**
			 * Use XML structure and layout heuristic fallback for the 
			 * tagged PDF structure.
			 */
			public static readonly USE_XML_STRUCTURE: Adobe.Indesign.TaggedPDFStructureOrderOptions;
			/**
			 * Alias for USE_ARTICLES. Use Articles order for the tagged 
			 * PDF structure.
			 */
			public static readonly useArticles: Adobe.Indesign.TaggedPDFStructureOrderOptions;
			/**
			 * Alias for USE_XML_STRUCTURE. Use XML structure and layout 
			 * heuristic fallback for the tagged PDF structure.
			 */
			public static readonly useXmlStructure: Adobe.Indesign.TaggedPDFStructureOrderOptions;
			/** Constructor */
			public constructor();
		}
	}
}