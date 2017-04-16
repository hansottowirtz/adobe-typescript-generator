/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PostScriptLevels extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Level 2 PostScript. */
			public static readonly LEVEL_2: Adobe.Incopy.PostScriptLevels;
			/** Level 3 PostScript. */
			public static readonly LEVEL_3: Adobe.Incopy.PostScriptLevels;
			/** Alias for LEVEL_2. Level 2 PostScript. */
			public static readonly level2: Adobe.Incopy.PostScriptLevels;
			/** Alias for LEVEL_3. Level 3 PostScript. */
			public static readonly level3: Adobe.Incopy.PostScriptLevels;
			/** Constructor */
			public constructor();
		}
	}
}