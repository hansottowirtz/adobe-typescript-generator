/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintArtworkDesignation extends IllustratorEnumBase {
			/** Print all layers. */
			public static readonly ALLLAYERS: PrintArtworkDesignation;
			public static readonly enumCache: CSEnumSharedCache;
			/** Print visible layers. */
			public static readonly VISIBLELAYERS: PrintArtworkDesignation;
			/** Print visible printable layers. */
			public static readonly VISIBLEPRINTABLELAYERS: PrintArtworkDesignation;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}