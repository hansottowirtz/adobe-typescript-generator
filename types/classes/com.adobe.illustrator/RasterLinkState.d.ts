/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class RasterLinkState extends IllustratorEnumBase {
			/** Image data is from the linked file. */
			public static readonly DATAFROMFILE: RasterLinkState;
			/** Image data has been modified. */
			public static readonly DATAMODIFIED: RasterLinkState;
			public static readonly enumCache: CSEnumSharedCache;
			/** Image data is not set. */
			public static readonly NODATA: RasterLinkState;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}