/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Describes how the displacement map fits the image if the 
		 * image is not the same size as the map.
		 */
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