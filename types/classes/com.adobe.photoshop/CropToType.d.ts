/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class CropToType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ARTBOX: Adobe.Photoshop.CropToType;
			public static readonly BLEEDBOX: Adobe.Photoshop.CropToType;
			public static readonly BOUNDINGBOX: Adobe.Photoshop.CropToType;
			public static readonly CROPBOX: Adobe.Photoshop.CropToType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly MEDIABOX: Adobe.Photoshop.CropToType;
			public static readonly TRIMBOX: Adobe.Photoshop.CropToType;
			/** Constructor */
			public constructor();
		}
	}
}