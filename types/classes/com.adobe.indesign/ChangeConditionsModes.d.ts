/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeConditionsModes extends Adobe.Csawlib.CSEnumBase {
			/** Change adds to applied conditions. */
			public static readonly ADD_TO: Adobe.Indesign.ChangeConditionsModes;
			/** Alias for ADD_TO. Change adds to applied conditions. */
			public static readonly addTo: Adobe.Indesign.ChangeConditionsModes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Change replaces applied conditions. */
			public static readonly REPLACE_WITH: Adobe.Indesign.ChangeConditionsModes;
			/** Alias for REPLACE_WITH. Change replaces applied conditions. */
			public static readonly replaceWith: Adobe.Indesign.ChangeConditionsModes;
			/** Constructor */
			public constructor();
		}
	}
}