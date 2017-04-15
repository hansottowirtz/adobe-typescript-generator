/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The shape of the dots (ink deposits) in the halftone screen.
		 */
		class BitmapHalfToneType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Cross. */
			public static readonly CROSS: Adobe.Photoshop.BitmapHalfToneType;
			/** Diamond. */
			public static readonly DIAMOND: Adobe.Photoshop.BitmapHalfToneType;
			/** Ellipse. */
			public static readonly ELLIPSE: Adobe.Photoshop.BitmapHalfToneType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Line. */
			public static readonly LINE: Adobe.Photoshop.BitmapHalfToneType;
			/** Round. */
			public static readonly ROUND: Adobe.Photoshop.BitmapHalfToneType;
			/** Square. */
			public static readonly SQUARE: Adobe.Photoshop.BitmapHalfToneType;
			/** Constructor */
			public constructor();
		}
	}
}