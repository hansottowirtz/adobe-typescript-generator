/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AntiAliasingMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Optimize for the art object. */
			public static readonly ARTOPTIMIZED: Adobe.Illustrator.AntiAliasingMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No anti-aliasing allowed. */
			public static readonly None: Adobe.Illustrator.AntiAliasingMethod;
			/** Optimize for the type object. */
			public static readonly TYPEOPTIMIZED: Adobe.Illustrator.AntiAliasingMethod;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}