/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DisplacementMapType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The map is resized. */
			public static readonly STRETCHTOFIT: Adobe.Photoshop.DisplacementMapType;
			/** The selection is filled by repeating the map in a pattern. */
			public static readonly TILE: Adobe.Photoshop.DisplacementMapType;
			/** Constructor */
			public constructor();
		}
	}
}