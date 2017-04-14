/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextOrientation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Horizontal orientation. */
			public static readonly HORIZONTAL: Adobe.Illustrator.TextOrientation;
			/** Vertical orientation. */
			public static readonly VERTICAL: Adobe.Illustrator.TextOrientation;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}