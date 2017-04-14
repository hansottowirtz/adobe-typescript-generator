/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class InkPrintStatus extends IllustratorEnumBase {
			/** Convert to process color during print. */
			public static readonly CONVERTINK: InkPrintStatus;
			/** Disable the ink during print. */
			public static readonly DISABLEINK: InkPrintStatus;
			/** Enable the ink during print. */
			public static readonly ENABLEINK: InkPrintStatus;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}