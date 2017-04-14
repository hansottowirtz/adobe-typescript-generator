/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AntiAliasingMethod extends IllustratorEnumBase {
			/** Optimize for the art object. */
			public static readonly ARTOPTIMIZED: AntiAliasingMethod;
			public static readonly enumCache: CSEnumSharedCache;
			/** No anti-aliasing allowed. */
			public static readonly None: AntiAliasingMethod;
			/** Optimize for the type object. */
			public static readonly TYPEOPTIMIZED: AntiAliasingMethod;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}