/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Deprecated for Adobe Photoshop CS3. Constrain values for 
		 * images.
		 */
		class GalleryConstrainType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Constrain both the height and the width of the image. */
			public static readonly CONSTRAINBOTH: Adobe.Photoshop.GalleryConstrainType;
			/** Constrain the height of the image. */
			public static readonly CONSTRAINHEIGHT: Adobe.Photoshop.GalleryConstrainType;
			/** Constrain width. */
			public static readonly CONSTRAINWIDTH: Adobe.Photoshop.GalleryConstrainType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}