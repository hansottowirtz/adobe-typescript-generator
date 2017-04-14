/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintColorSeparationMode extends IllustratorEnumBase {
			/** The composite mode. */
			public static readonly COMPOSITE: PrintColorSeparationMode;
			public static readonly enumCache: CSEnumSharedCache;
			/** The host based color separation mode. */
			public static readonly HOSTBASEDSEPARATION: PrintColorSeparationMode;
			/** The InRIP color separation mode. */
			public static readonly INRIPSEPARATION: PrintColorSeparationMode;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}