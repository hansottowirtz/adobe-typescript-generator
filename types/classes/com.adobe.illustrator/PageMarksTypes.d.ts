/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PageMarksTypes extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Japanese page marks style. */
			public static readonly Japanese: PageMarksTypes;
			/** Roman page marks style. */
			public static readonly Roman: PageMarksTypes;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}