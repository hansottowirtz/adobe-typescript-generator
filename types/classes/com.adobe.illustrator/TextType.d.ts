/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The type of text art. */
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