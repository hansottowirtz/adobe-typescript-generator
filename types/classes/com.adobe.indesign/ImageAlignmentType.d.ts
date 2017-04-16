/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageAlignmentType extends Adobe.Csawlib.CSEnumBase {
			/** image will be aligned center */
			public static readonly ALIGN_CENTER: Adobe.Indesign.ImageAlignmentType;
			/** image will be aligned left */
			public static readonly ALIGN_LEFT: Adobe.Indesign.ImageAlignmentType;
			/** image will be aligned right */
			public static readonly ALIGN_RIGHT: Adobe.Indesign.ImageAlignmentType;
			/** Alias for ALIGN_CENTER. image will be aligned center */
			public static readonly alignCenter: Adobe.Indesign.ImageAlignmentType;
			/** Alias for ALIGN_LEFT. image will be aligned left */
			public static readonly alignLeft: Adobe.Indesign.ImageAlignmentType;
			/** Alias for ALIGN_RIGHT. image will be aligned right */
			public static readonly alignRight: Adobe.Indesign.ImageAlignmentType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}