/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Deprecated for Adobe Photoshop CS3. Web photo gallery thumb 
		 * size types.
		 */
		class GalleryThumbSizeType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Custom thumbnail. */
			public static readonly CUSTOM: Adobe.Photoshop.GalleryThumbSizeType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Large thumbnail. */
			public static readonly LARGE: Adobe.Photoshop.GalleryThumbSizeType;
			/** Medium thumbnail. */
			public static readonly MEDIUM: Adobe.Photoshop.GalleryThumbSizeType;
			/** Small thumbnail. */
			public static readonly SMALL: Adobe.Photoshop.GalleryThumbSizeType;
			/** Constructor */
			public constructor();
		}
	}
}