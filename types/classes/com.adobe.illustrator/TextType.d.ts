/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TextType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Text within an area. */
			public static readonly AREATEXT: Adobe.Illustrator.TextType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Text on a path. */
			public static readonly PATHTEXT: Adobe.Illustrator.TextType;
			/** Text from a point. */
			public static readonly POINTTEXT: Adobe.Illustrator.TextType;
			/** Constructor */
			public constructor();
		}
	}
}