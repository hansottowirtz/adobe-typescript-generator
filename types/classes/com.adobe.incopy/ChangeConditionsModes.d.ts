/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeConditionsModes extends Adobe.Csawlib.CSEnumBase {
			/** Change adds to applied conditions. */
			public static readonly ADD_TO: Adobe.Incopy.ChangeConditionsModes;
			/** Alias for ADD_TO. Change adds to applied conditions. */
			public static readonly addTo: Adobe.Incopy.ChangeConditionsModes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Change replaces applied conditions. */
			public static readonly REPLACE_WITH: Adobe.Incopy.ChangeConditionsModes;
			/** Alias for REPLACE_WITH. Change replaces applied conditions. */
			public static readonly replaceWith: Adobe.Incopy.ChangeConditionsModes;
			/** Constructor */
			public constructor();
		}
	}
}