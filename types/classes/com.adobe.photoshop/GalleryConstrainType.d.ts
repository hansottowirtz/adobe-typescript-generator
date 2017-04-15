/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
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