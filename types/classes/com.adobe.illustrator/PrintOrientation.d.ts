/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintOrientation extends IllustratorEnumBase {
			/** Auto Rotate */
			public static readonly AUTOROTATE: PrintOrientation;
			public static readonly enumCache: CSEnumSharedCache;
			/** Landscape. */
			public static readonly LANDSCAPE: PrintOrientation;
			/** Portrait. */
			public static readonly PORTRAIT: PrintOrientation;
			/** Reverse landscape. */
			public static readonly REVERSELANDSCAPE: PrintOrientation;
			/** Reverse portrait. */
			public static readonly REVERSEPORTRAIT: PrintOrientation;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}