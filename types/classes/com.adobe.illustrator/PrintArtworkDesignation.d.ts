/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintArtworkDesignation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Print all layers. */
			public static readonly ALLLAYERS: Adobe.Illustrator.PrintArtworkDesignation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Print visible layers. */
			public static readonly VISIBLELAYERS: Adobe.Illustrator.PrintArtworkDesignation;
			/** Print visible printable layers. */
			public static readonly VISIBLEPRINTABLELAYERS: Adobe.Illustrator.PrintArtworkDesignation;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}