/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextOrientation extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Horizontal orientation. */
			public static readonly HORIZONTAL: TextOrientation;
			/** Vertical orientation. */
			public static readonly VERTICAL: TextOrientation;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}