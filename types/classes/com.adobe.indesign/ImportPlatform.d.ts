/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImportPlatform extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for MACINTOSH. Macintosh. */
			public static readonly macintosh: Adobe.Indesign.ImportPlatform;
			/** Macintosh. */
			public static readonly MACINTOSH: Adobe.Indesign.ImportPlatform;
			/** Alias for PC. Windows. */
			public static readonly pc: Adobe.Indesign.ImportPlatform;
			/** Windows. */
			public static readonly PC: Adobe.Indesign.ImportPlatform;
			/** Constructor */
			public constructor();
		}
	}
}