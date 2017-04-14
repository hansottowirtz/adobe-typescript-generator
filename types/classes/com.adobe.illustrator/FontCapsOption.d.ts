/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FontCapsOption extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** All caps. */
			public static readonly ALLCAPS: Adobe.Illustrator.FontCapsOption;
			/** All small caps. */
			public static readonly ALLSMALLCAPS: Adobe.Illustrator.FontCapsOption;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Normal caps. */
			public static readonly NORMALCAPS: Adobe.Illustrator.FontCapsOption;
			/** Small caps. */
			public static readonly SMALLCAPS: Adobe.Illustrator.FontCapsOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}