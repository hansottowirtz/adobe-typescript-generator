/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class CameraRAWSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 5120 x 3413 image. */
			public static readonly EXTRALARGE: Adobe.Photoshop.CameraRAWSize;
			/** 4096 x 2731 image. */
			public static readonly LARGE: Adobe.Photoshop.CameraRAWSize;
			/** 6144 x 4096 image. */
			public static readonly MAXIMUM: Adobe.Photoshop.CameraRAWSize;
			/** 3072 x 2048 image. */
			public static readonly MEDIUM: Adobe.Photoshop.CameraRAWSize;
			/** 1536 x 1024 image. */
			public static readonly MINIMUM: Adobe.Photoshop.CameraRAWSize;
			/** 2048 x 1365 image. */
			public static readonly SMALL: Adobe.Photoshop.CameraRAWSize;
			/** Constructor */
			public constructor();
		}
	}
}