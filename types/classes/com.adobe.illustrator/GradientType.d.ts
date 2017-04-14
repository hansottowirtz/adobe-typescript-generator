/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GradientType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Linear gradient. */
			public static readonly LINEAR: Adobe.Illustrator.GradientType;
			public static readonly RADIAL: Adobe.Illustrator.GradientType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}