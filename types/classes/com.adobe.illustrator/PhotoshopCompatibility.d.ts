/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PhotoshopCompatibility extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Photoshop version 6. */
			public static readonly PHOTOSHOP6: PhotoshopCompatibility;
			/** Photoshop version 8. */
			public static readonly PHOTOSHOP8: PhotoshopCompatibility;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}