/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The method of polar distortion to use. */
		class PolarConversionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The selection is converted from its polar to rectangular 
			 * coordinates.
			 */
			public static readonly POLARTORECTANGULAR: Adobe.Photoshop.PolarConversionType;
			/**
			 * The selection is converted from its rectangular to polar 
			 * coordinates.
			 */
			public static readonly RECTANGULARTOPOLAR: Adobe.Photoshop.PolarConversionType;
			/** Constructor */
			public constructor();
		}
	}
}