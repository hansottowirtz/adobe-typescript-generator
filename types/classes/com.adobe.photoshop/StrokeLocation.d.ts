/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The placement of path or selection boundary strokes. */
		class StrokeLocation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * The border is placed in the center of the the selection or 
			 * layer boundaries.
			 */
			public static readonly CENTER: Adobe.Photoshop.StrokeLocation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The border is placed inside the selection or layer 
			 * boundaries.
			 */
			public static readonly INSIDE: Adobe.Photoshop.StrokeLocation;
			/**
			 * The border is placed outside the selection or layer 
			 * boundaries.
			 */
			public static readonly OUTSIDE: Adobe.Photoshop.StrokeLocation;
			/** Constructor */
			public constructor();
		}
	}
}