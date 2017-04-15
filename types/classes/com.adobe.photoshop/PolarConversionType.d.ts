/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
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