/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLImportStyles extends Adobe.Csawlib.CSEnumBase {
			/** Appends the imported content. */
			public static readonly APPEND_IMPORT: Adobe.Incopy.XMLImportStyles;
			/** Alias for APPEND_IMPORT. Appends the imported content. */
			public static readonly appendImport: Adobe.Incopy.XMLImportStyles;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Merges the imported content. */
			public static readonly MERGE_IMPORT: Adobe.Incopy.XMLImportStyles;
			/** Alias for MERGE_IMPORT. Merges the imported content. */
			public static readonly mergeImport: Adobe.Incopy.XMLImportStyles;
			/** Constructor */
			public constructor();
		}
	}
}