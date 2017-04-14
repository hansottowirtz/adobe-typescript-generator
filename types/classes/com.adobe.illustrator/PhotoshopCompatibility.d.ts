/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PhotoshopCompatibility extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Photoshop version 6. */
			public static readonly PHOTOSHOP6: Adobe.Illustrator.PhotoshopCompatibility;
			/** Photoshop version 8. */
			public static readonly PHOTOSHOP8: Adobe.Illustrator.PhotoshopCompatibility;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}