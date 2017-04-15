/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLImportStyles extends Adobe.Csawlib.CSEnumBase {
			/** Appends the imported content. */
			public static readonly APPEND_IMPORT: Adobe.Indesign.XMLImportStyles;
			/** Alias for APPEND_IMPORT. Appends the imported content. */
			public static readonly appendImport: Adobe.Indesign.XMLImportStyles;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Merges the imported content. */
			public static readonly MERGE_IMPORT: Adobe.Indesign.XMLImportStyles;
			/** Alias for MERGE_IMPORT. Merges the imported content. */
			public static readonly mergeImport: Adobe.Indesign.XMLImportStyles;
			/** Constructor */
			public constructor();
		}
	}
}