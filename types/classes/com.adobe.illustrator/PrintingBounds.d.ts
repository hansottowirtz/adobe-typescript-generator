/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintingBounds extends IllustratorEnumBase {
			/** Use artboard bounds. */
			public static readonly ARTBOARDBOUNDS: PrintingBounds;
			/** Use artwork bounds. */
			public static readonly ARTWORKBOUNDS: PrintingBounds;
			/** Use crop bounds. */
			public static readonly CROPBOUNDS: PrintingBounds;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}