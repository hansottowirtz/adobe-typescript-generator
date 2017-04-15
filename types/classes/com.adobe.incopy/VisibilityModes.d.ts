/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VisibilityModes extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ALL. Prints visible and hidden notes. */
			public static readonly all: Adobe.Incopy.VisibilityModes;
			/** Prints visible and hidden notes. */
			public static readonly ALL: Adobe.Incopy.VisibilityModes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Does not print any notes. */
			public static readonly none: Adobe.Incopy.VisibilityModes;
			/** Does not print any notes. */
			public static readonly NONE: Adobe.Incopy.VisibilityModes;
			/** Prints only visible notes. */
			public static readonly ONLY_VISIBLE: Adobe.Incopy.VisibilityModes;
			/** Alias for ONLY_VISIBLE. Prints only visible notes. */
			public static readonly onlyVisible: Adobe.Incopy.VisibilityModes;
			/** Constructor */
			public constructor();
		}
	}
}