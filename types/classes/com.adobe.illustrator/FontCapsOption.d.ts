/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FontCapsOption extends IllustratorEnumBase {
			/** All caps. */
			public static readonly ALLCAPS: FontCapsOption;
			/** All small caps. */
			public static readonly ALLSMALLCAPS: FontCapsOption;
			public static readonly enumCache: CSEnumSharedCache;
			/** Normal caps. */
			public static readonly NORMALCAPS: FontCapsOption;
			/** Small caps. */
			public static readonly SMALLCAPS: FontCapsOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}