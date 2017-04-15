/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The style to use when cropping a page. */
		class CropToType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Crop to the art box. */
			public static readonly ARTBOX: Adobe.Photoshop.CropToType;
			/** Crop to the bleed box. */
			public static readonly BLEEDBOX: Adobe.Photoshop.CropToType;
			/** Crop to the bounding box. */
			public static readonly BOUNDINGBOX: Adobe.Photoshop.CropToType;
			/** Crop to the crop box. */
			public static readonly CROPBOX: Adobe.Photoshop.CropToType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Crop to the media box. */
			public static readonly MEDIABOX: Adobe.Photoshop.CropToType;
			/** Crop to the trim box. */
			public static readonly TRIMBOX: Adobe.Photoshop.CropToType;
			/** Constructor */
			public constructor();
		}
	}
}