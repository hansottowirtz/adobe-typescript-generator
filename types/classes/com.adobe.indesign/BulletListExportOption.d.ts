/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BulletListExportOption extends Adobe.Csawlib.CSEnumBase {
			/** convert to text. */
			public static readonly AS_TEXT: Adobe.Indesign.BulletListExportOption;
			/** Alias for AS_TEXT. convert to text. */
			public static readonly asText: Adobe.Indesign.BulletListExportOption;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** map to html unordered list. */
			public static readonly UNORDERED_LIST: Adobe.Indesign.BulletListExportOption;
			/** Alias for UNORDERED_LIST. map to html unordered list. */
			public static readonly unorderedList: Adobe.Indesign.BulletListExportOption;
			/** Constructor */
			public constructor();
		}
	}
}