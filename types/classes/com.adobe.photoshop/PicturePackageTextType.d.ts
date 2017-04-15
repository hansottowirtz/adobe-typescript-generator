/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The function or meaning of text in a Picture Package. */
		class PicturePackageTextType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The text is a caption. */
			public static readonly CAPTION: Adobe.Photoshop.PicturePackageTextType;
			/** The text is the copyright. */
			public static readonly COPYRIGHT: Adobe.Photoshop.PicturePackageTextType;
			/** The text is the credit. */
			public static readonly CREDIT: Adobe.Photoshop.PicturePackageTextType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The text is the filename. */
			public static readonly FILENAME: Adobe.Photoshop.PicturePackageTextType;
			/** No text. */
			public static readonly NONE: Adobe.Photoshop.PicturePackageTextType;
			/** The text is the origin. */
			public static readonly ORIGIN: Adobe.Photoshop.PicturePackageTextType;
			/** The text is user defined. */
			public static readonly USER: Adobe.Photoshop.PicturePackageTextType;
			/** Constructor */
			public constructor();
		}
	}
}